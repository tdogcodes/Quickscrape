"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

const GetWorkflowExecutionWithPhases = async (executionId: string) => {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const workflowExecution = await prisma.workflowExectution.findUnique({
    where: {
      id: executionId,
      userId,
    },
    include: {
      phases: {
        orderBy: {
          number: "asc",
        },
      },
    },
  });

  if (!workflowExecution) {
    return null;
  }

  return workflowExecution;
};

export default GetWorkflowExecutionWithPhases;
