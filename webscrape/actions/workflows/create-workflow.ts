"use server";

import prisma from "@/lib/prisma";
import { CreateFlowNode } from "@/lib/workflow/create-flow-node";
import {
  createWorkflowSchema,
  CreateWorkflowSchemaType,
} from "@/schema/workflows";
import { AppNode } from "@/types/app-node";
import { TaskType } from "@/types/task";
import { WorkflowStatus } from "@/types/workflow";

import { auth } from "@clerk/nextjs/server";
import { Edge } from "@xyflow/react";
import { redirect } from "next/navigation";

export async function CreateWorkflow(form: CreateWorkflowSchemaType) {
  // Validate the form data using Zod schema
  const { success, data } = createWorkflowSchema.safeParse(form);
  if (!success) {
    throw new Error("Invalid form data, please check your inputs");
  }

  // Check if the user is authenticated
  const { userId } = auth();
  if (!userId) {
    throw new Error("User is not authenticated, please log in or sign up");
  }

  // Initialize the workflow with empty nodes and edges
  const initialWorkflow: {nodes: AppNode[], edges: Edge[]} = {
    nodes: [],
    edges: [],
  }

  // Here is the workflow entry point
  initialWorkflow.nodes.push(CreateFlowNode(TaskType.LAUNCH_BROWSER))

  // Create the workflow in the database
  const result = await prisma.workFlow.create({
    data: {
      userId,
      definition: JSON.stringify(initialWorkflow),
      name: data.name.toLowerCase(),
      description: data.description ?? "",
      status: WorkflowStatus.DRAFT,
    },
  });

  // Check if the workflow was created successfully
  if (!result) {
    throw new Error("Failed to create workflow, please try again later");
  }

  // Redirect to the workflow editor page
  redirect(`/workflow/editor/${result.id}`);
}
