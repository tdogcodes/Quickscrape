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
import { Browser, Page } from "puppeteer";
import { Edge } from "@xyflow/react";
import { LogCollector } from "@/types/log";
import { createLogCollector } from "../log";
import WaitFor from "../helper/wait-for";

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

  const edges = JSON.parse(execution.definition).edges as Edge[];

  const envioronment: Environment = {
    phases: {},
  };

  await initializeWorkflowExecution(executionId, execution.workflowId);

  await initializePhaseStatuses(execution);

  let creditsConsumed = 0;
  let executionFailed = false;

  for (const phase of execution.phases) {
    const phaseExecution = await executeWorkflowPhase(
      phase,
      envioronment,
      edges,
      execution.userId
    );

    creditsConsumed += phaseExecution.creditsConsumed;

    if (phaseExecution === undefined) {
      executionFailed = true;
      break;
    }
  }

  await finalizeWorkflowExecution(
    executionId,
    execution.workflowId,
    executionFailed,
    creditsConsumed
  );
  await cleanupEnvironment(envioronment);

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
  environment: Environment,
  edge: Edge[],
  userId: string
) => {
  const logCollector = createLogCollector();
  const startedAt = new Date();
  const node = JSON.parse(phase.node) as AppNode;

  setupEnvironmentForPhase(node, environment, edge);
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

  let success = await decrementCredits(userId, creditsRequired, logCollector);
  const creditsConsumed = success ? creditsRequired : 0;  

  if (success) {
    // executes the phase only if the credits are sufficient
    success = await executePhase(phase, node, environment, logCollector);
  }

  const outputs = environment.phases[node.id].outputs;

  await finalizePhase(phase.id, success, outputs, logCollector, creditsConsumed);
  return { success, creditsConsumed };
};

const finalizePhase = async (
  phaseId: string,
  success: boolean,
  outputs: any,
  logCollector: LogCollector,
  creditsConsumed: number
) => {
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
      outputs: JSON.stringify(outputs),
      creditsConsumed,
      logs: {
        createMany: {
          data: logCollector.getAll().map((log) => ({
            message: log.message,
            logLevel: log.level,
            timestamp: log.timestamp,
          })),
        },
      },
    },
  });
};

const executePhase = async (
  phase: ExecutionPhase,
  node: AppNode,
  environment: Environment,
  logCollector: LogCollector
): Promise<boolean> => {
  const runFn = ExecutorRegistry[node.data.type];
  if (!runFn) {
    console.error(`No executor found for node type: ${node.data.type}`);
    return false;
  }
  const executionEnvironment: ExecutionEnvironment<any> =
    createExecutionEnvironment(node, environment, logCollector);

  return await runFn(executionEnvironment);
};

const setupEnvironmentForPhase = (
  node: AppNode,
  environment: Environment,
  edge: Edge[]
) => {
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
    const connectedEdge = edge.find(
      (e) => e.target == node.id && e.targetHandle === input.name
    );

    if (!connectedEdge) {
      console.error("missing edge for input", input.name, "node id: ", node.id);
      continue;
    }

    const outputValue =
      environment.phases[connectedEdge.source]?.outputs[
        connectedEdge.sourceHandle!
      ];

    environment.phases[node.id].inputs[input.name] = outputValue;
  }
};

const createExecutionEnvironment = (
  node: AppNode,
  environment: Environment,
  LogCollector: LogCollector
): ExecutionEnvironment<any> => {
  return {
    getInput: (name: string) => environment.phases[node.id]?.inputs[name],
    setOutput: (name: string, value: string) => {
      environment.phases[node.id].outputs[name] = value;
    },
    getBrowser: () => environment.browser,
    setBrowser: (browser: Browser) => (environment.browser = browser),
    getPage: () => environment.page,
    setPage: (page: Page) => (environment.page = page),
    log: LogCollector,
  };
};

const cleanupEnvironment = async (envioronment: Environment) => {
  if (envioronment.browser) {
    await envioronment.browser
      .close()
      .catch((error) => console.error("Error closing browser:", error));
  }
};

const decrementCredits = async (
  userId: string,
  amount: number,
  logCollector: LogCollector
) => {
  try {
    await prisma.userBalance.update({
      where: { userId, credits: { gte: amount } },
      data: {
        credits: {
          decrement: amount,
        },
      },
    });
    return true;
  } catch (error) {
    logCollector.error("Not enough credits");
    return false;
  }
};
