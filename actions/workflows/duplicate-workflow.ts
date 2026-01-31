"use server"

import prisma from "@/lib/prisma";
import { duplicateWorkflowSchema, DuplicateWorkflowSchemaType } from "@/types/schema/workflows"
import { WorkflowStatus } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const DuplicateWorkflow = async (form: DuplicateWorkflowSchemaType) => {
    const { success, data } = duplicateWorkflowSchema.safeParse(form); 

    if(!success){
        throw new Error("Invalid form data, please check your inputs");
    }

    const { userId } = auth();

    if(!userId){
        throw new Error("User is not authenticated, please log in or sign up");
    }

    const sourceWorkflow = await prisma.workFlow.findUnique({
        where: {id: data.workflowId, userId},
    })

    if(!sourceWorkflow){
        throw new Error("Source workflow not found or you do not have permission to access it");
    }

    const result = await prisma.workFlow.create({
        data: {
            userId,
            name: data.name,
            description: data.description || "",
            status: WorkflowStatus.DRAFT,
            definition: sourceWorkflow.definition,
        }
    })

    if(!result){
        throw new Error("Failed to duplicate workflow");
    }

    revalidatePath("dashboard/workflows");
}