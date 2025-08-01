"use server";

import { CalculateWorkflowCost } from "@/lib/helper/helper";
import prisma from "@/lib/prisma";
import { FlowToExecutionPlan } from "@/lib/workflow/execution-plan";
import { WorkflowStatus } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const PublishWorkflow = async ({
  id,
  flowDefinition,
}: {
  id: string;
  flowDefinition: string;
}) => {
  const { userId } = auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  const workflow = await prisma.workFlow.findUnique({
    where: {
      id,
      userId,
    },
  });

  if (!workflow) {
    throw new Error("Workflow not found");
  }

  if (workflow.status !== WorkflowStatus.DRAFT) {
    throw new Error("Workflow is not a draft");
  }

  const flow = JSON.parse(flowDefinition);
  const result = FlowToExecutionPlan(flow.nodes, flow.edges);

  if (result.error) {
    throw new Error("flow definition not valid");
  }

  if (!result.executionPlan) {
    throw new Error("Execution plan not generated");
  }

  const creditsCost = CalculateWorkflowCost(flow.nodes);

  await prisma.workFlow.update({
    where: {
      id,
      userId,
    },
    data: {
      definition: flowDefinition,
      executionPlan: JSON.stringify(result.executionPlan),
      status: WorkflowStatus.PUBLISHED,
      creditsCost,
    },
  });

  revalidatePath(`/workflow/editor/${id}`);
};
