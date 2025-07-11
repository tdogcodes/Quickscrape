"use server"

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"

export const GetWorkflowPhaseDetails = async (phaseId: string) => {

    const { userId } = auth();
    if(!userId){
        throw new Error("Unauthorized access");
    } 

    return prisma.executionPhase.findUnique({
        where: {
            id: phaseId,
            execution: {
                userId,
            }
        },
    });
}