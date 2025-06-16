"use server"

import prisma from "@/lib/prisma";
import { CreateWorkflowSchema, CreateWorkflowSchemaType } from "@/schema/workflows"
import { WorkFlowStatus } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

export async function CreateWorkflow(form: CreateWorkflowSchemaType) {
    // Validate the form data using Zod schema
    const { success, data } = CreateWorkflowSchema.safeParse(form)
    if(!success){
        throw new Error("Invalid form data, please check your inputs");
    }

    // Check if the user is authenticated
    const { userId } = auth()
    if(!userId){
       throw new Error("User is not authenticated, please log in or sign up");
    }

    // Create the workflow in the database
    const result = await prisma.workFlow.create({
        data: {
            userId,
            definition: "TODO",
            name: data.name.toLowerCase(),
            description: data.description ?? "",
            status: WorkFlowStatus.DRAFT,
        },
    })

    // Check if the workflow was created successfully
    if(!result){
        throw new Error("Failed to create workflow, please try again later");
    }

    // Redirect to the workflow editor page
    redirect(`/workflow/editor/${result.id}`)
}