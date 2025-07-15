import "server-only";
import prisma from "../prisma";
import { revalidatePath } from "next/cache";
import {
  ExecutionPhaseStatus,
  WorkflowExecutionStatus,
} from "@/types/workflow";
import { ExecutionPhase } from "@/generated/prisma";
import { AppNode } from "@/types/app-node";
import { TaskRegistry } from "./task/registry";
import { ExecutorRegistry } from "./executor/registry";
import { Environment, ExecutionEnvironment } from "@/types/executor";
import { LaunchBrowserTask } from "./task/launch-browser";
import { TaskParamType } from "@/types/task";
import { get } from "http";
import { Browser } from "puppeteer";

export const ExecuteWorkflow = async (executionId: string) => {
  const execution = await prisma.workflowExectution.findUnique({
    where: {
      id: executionId,
    },
    include: {
      workflow: true,
      phases: true,
    },
  });

  if (!execution) {
    throw new Error("Execution not found");
  }

  const envioronment: Environment = {
    phases: {},
  };

  await initializeWorkflowExecution(executionId, execution.workflowId);

  await initializePhaseStatuses(execution);

  let creditsConsumed = 0;
  let executionFailed = false;

  for (const phase of execution.phases) {
    const phaseExecution = await executeWorkflowPhase(phase, envioronment);
    if (phaseExecution === undefined) {
      executionFailed = true;
      break;
    }
    //TODO 3: Consume credits
    //TODO 4: Execute each phase
  }

  await finalizeWorkflowExecution(
    executionId,
    execution.workflowId,
    executionFailed,
    creditsConsumed
  );
  //TODO 6: Clean up execution envioronment

  revalidatePath("/workflows/runs");
};

const initializeWorkflowExecution = async (
  executionId: string,
  workflowId: string
) => {
  await prisma.workflowExectution.update({
    where: { id: executionId },
    data: {
      startedAt: new Date(),
      status: WorkflowExecutionStatus.RUNNING,
    },
  });

  await prisma.workFlow.update({
    where: {
      id: workflowId,
    },
    data: {
      lastRunAt: new Date(),
      lastRunId: executionId,
      lastRunStatus: WorkflowExecutionStatus.RUNNING,
    },
  });
};

const initializePhaseStatuses = async (execution: any) => {
  await prisma.executionPhase.updateMany({
    where: {
      id: {
        in: execution.phases.map((phase: any) => phase.id),
      },
    },
    data: {
      status: ExecutionPhaseStatus.PENDING,
    },
  });
};

const finalizeWorkflowExecution = async (
  executionId: string,
  workflowId: string,
  executionFailed: boolean,
  creditsConsumed: number
) => {
  const finalStatus = executionFailed
    ? WorkflowExecutionStatus.FAILED
    : WorkflowExecutionStatus.COMPLETED;

  await prisma.workflowExectution.update({
    where: {
      id: executionId,
    },
    data: {
      status: finalStatus,
      completedAt: new Date(),
      creditsConsumed,
    },
  });

  await prisma.workFlow
    .update({
      where: {
        id: workflowId,
        lastRunId: executionId,
      },
      data: {
        lastRunStatus: finalStatus,
      },
    })
    .catch((error) => {
      // ignore
      // This means we triggered other runs for this workflow
      // while an execution was in progress
    });
};

const executeWorkflowPhase = async (
  phase: ExecutionPhase,
  environment: Environment
) => {
  const startedAt = new Date();
  const node = JSON.parse(phase.node) as AppNode;

  setupEnvironmentForPhase(node, environment);
  // update phase status
  await prisma.executionPhase.update({
    where: {
      id: phase.id,
    },
    data: {
      status: ExecutionPhaseStatus.RUNNING,
      startedAt,
      inputs: JSON.stringify(environment.phases[node.id].inputs),
    },
  });

  const creditsRequired = TaskRegistry[node.data.type].credits;
  console.log(
    `Executing phase ${phase.name} with ${creditsRequired} credits required`
  );

  //TODO: Document user's credit balance

  // Simulate phase execution
  const success = await executePhase(phase, node, environment);

  await finalizePhase(phase.id, success);
  return { success };
};

const finalizePhase = async (phaseId: string, success: boolean) => {
  const finalStatus = success
    ? ExecutionPhaseStatus.COMPLETED
    : ExecutionPhaseStatus.FAILED;

  await prisma.executionPhase.update({
    where: {
      id: phaseId,
    },
    data: {
      status: finalStatus,
      completedAt: new Date(),
    },
  });
};

const executePhase = async (
  phase: ExecutionPhase,
  node: AppNode,
  environment: Environment
): Promise<boolean> => {
  const runFn = ExecutorRegistry[node.data.type];
  if (!runFn) {
    console.error(`No executor found for node type: ${node.data.type}`);
    return false;
  }
  const executionEnvironment: ExecutionEnvironment<any> =
    createExecutionEnvironment(node, environment);

  return await runFn(executionEnvironment);
};

const setupEnvironmentForPhase = (node: AppNode, environment: Environment) => {
  environment.phases[node.id] = {
    inputs: {},
    outputs: {},
  };
  const inputs = TaskRegistry[node.data.type].inputs;
  for (const input of inputs) {
    if (input.type === TaskParamType.BROWSER_INSTANCE) continue;
    const inputValue = node.data.inputs[input.name];
    if (inputValue) {
      environment.phases[node.id].inputs[input.name] = inputValue;
      continue;
    }

    // Get input value from an output of another node
  }
};

const createExecutionEnvironment = (
  node: AppNode,
  environment: Environment
) => {
  return {
    getInput: (name: string) => environment.phases[node.id]?.inputs[name],
    getBrowser: () => environment.browser || null,
    setBrowser: (browser: Browser) => (
      environment.browser = browser
    ),
  };
};
