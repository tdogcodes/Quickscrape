"use server"

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function DeleteWorkflow(id: string){
    const { userId }  = auth()

    if(!userId){
        throw Error("User is not authenticated, please log in or sign up!");
    }

    await prisma.workFlow.delete({
        where: {
            id,
            userId,
        }
    })


    revalidatePath("/workflows");
}