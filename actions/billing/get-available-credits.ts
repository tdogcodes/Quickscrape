"use server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export const GetAvailableCredits = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  // Use upsert to create the balance if it doesn't exist
  const balance = await prisma.userBalance.upsert({
    where: { userId },
    update: {}, // Don't update anything if it exists
    create: {
      userId,
      credits: 500, // New users get 100 credits
    },
  });

  return balance.credits;
};
