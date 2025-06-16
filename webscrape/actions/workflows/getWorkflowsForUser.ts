"use server"

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export const GetWorkflowsForUser = async () => {
    const { userId } = auth();

    if(!userId){
        throw new Error("User is not authenticated, please log in or sign up");
    } 

    return prisma.workFlow.findMany({
        where: {
            userId,
        },
        orderBy: {
            createdAt: 'asc',
        },
    })
}