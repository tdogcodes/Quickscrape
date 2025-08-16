export const dynamic = "force-dynamic";

import { ExecuteWorkflow } from "@/lib/workflow/execute-workflow";
import { TaskRegistry } from "@/lib/workflow/task/registry";
import {
  ExecutionPhaseStatus,
  WorkflowExecutionPlan,
  WorkflowExecutionStatus,
  WorkflowExecutionTrigger,
} from "@/types/workflow";
import { timingSafeEqual } from "crypto";
import parser from "cron-parser";
import prisma from "@/lib/prisma";

function isValidSecret(secret: string) {
  const API_SECRET = process.env.API_SECRET;

  if (!API_SECRET) {
    return false;
  }

  try {
    return timingSafeEqual(Buffer.from(secret), Buffer.from(API_SECRET));
  } catch (error) {
    return false;
  }
}

export const GET = async (req: Request) => {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  const secret = authHeader.split(" ")[1];

  if (!isValidSecret(secret)) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const workflowId = searchParams.get("workflowId") as string;

  if (!workflowId) {
    return Response.json({ error: "bad request" }, { status: 400 });
  }

  const workflow = await prisma.workFlow.findUnique({
    where: { id: workflowId },
  });

  if (!workflow) {
    return Response.json({ error: "bad request" }, { status: 400 });
  }

  const executionPlan = JSON.parse(
    workflow.executionPlan!
  ) as WorkflowExecutionPlan;

  if (!executionPlan) {
    return Response.json({ error: "bad request" }, { status: 400 });
  }

  try {
    const cron = parser.parse(workflow.cron!, { tz: "UTC" });
    const nextRun = cron.next().toDate();

    const execution = await prisma.workflowExectution.create({
      data: {
        workflowId,
        userId: workflow.userId,
        status: WorkflowExecutionStatus.RUNNING,
        definition: workflow.definition,
        startedAt: new Date(),
        trigger: WorkflowExecutionTrigger.CRON,
        phases: {
          create: executionPlan.flatMap((phase) => {
            return phase.nodes.flatMap((node) => {
              return {
                userId: workflow.userId,
                status: ExecutionPhaseStatus.CREATED,
                number: phase.phase,
                node: JSON.stringify(node),
                name: TaskRegistry[node.data.type].label,
              };
            });
          }),
        },
      },
    });

    await ExecuteWorkflow(execution.id, nextRun);
    return new Response(null, { status: 200 });
  } catch (error) {
    return Response.json({ error: "internal server error" }, { status: 500 });
  }
};
