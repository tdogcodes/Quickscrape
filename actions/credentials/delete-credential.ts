"use server"

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function DeleteCredential(name: string){
    const { userId }  = auth()

    if(!userId){
        throw Error("User is not authenticated, please log in or sign up!");
    }

    await prisma.credential.delete({
        where: {
            userId_name: {
                userId,
                name
            }
        }
    })

    revalidatePath("/dashboard/credentials");
}