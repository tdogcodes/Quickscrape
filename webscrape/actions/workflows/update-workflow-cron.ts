"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import parser from "cron-parser";

export const UpdateWorkflowCron = async ({
  id,
  cron,
}: {
  id: string;
  cron: string;
}) => {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const interval = parser.parse(cron, {
      tz: "UTC"});
    return await prisma.workFlow.update({
        where: { id, userId },
        data: {
        cron, 
        nextRunAt: interval.next().toDate(),
        }
  });
  } catch (error : any) {
    console.error("Error updating workflow cron:", error.message);
    throw new Error("Invalid cron expression");
  }

};
