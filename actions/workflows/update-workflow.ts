"use server";


import prisma from "@/lib/prisma";
import { WorkflowStatus } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function UpdateWorkflow({
  id,
  definition,
}: {
  id: string;
  definition: string;
}) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User is not authenticated");
  }

  const workFlow = await prisma.workFlow.findUnique({
    where: {
      id,
      userId,
    },
  });

  if (!workFlow) {
    throw new Error("Workflow not found");
  }

  if (workFlow.status !== WorkflowStatus.DRAFT) {
    throw new Error("Workflow is not in draft status");
  }

  await prisma.workFlow.update({
    data: {
      definition,
    },
    where: {
      id,
      userId,
    },
  });

  revalidatePath("dashboard/workflows")
}
