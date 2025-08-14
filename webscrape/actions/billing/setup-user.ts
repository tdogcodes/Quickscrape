"use server"
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function setupUser() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthenticated");
  }

  const userBalance = await prisma.userBalance.findUnique({
    where: {
      userId,
    },
  });

  if (!userBalance) {
    await prisma.userBalance.create({
      data: {
        userId,
        credits: 200,
      },
    });
  }

  redirect("/home");
}