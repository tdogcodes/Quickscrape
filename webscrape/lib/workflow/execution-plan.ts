import { AppNode } from "@/types/app-node";
import { WorkflowExecutionPlan } from "@/types/workflow";
import { Edge } from "@xyflow/react";
import { TaskRegistry } from "./task/registry";

type FlowToExecutionPlanType = {
  executionPlan?: WorkflowExecutionPlan;
};

export const FlowToExecutionPlan = (
  nodes: AppNode[],
  edges: Edge[]
): FlowToExecutionPlanType => {
  const entryPoint = nodes.find(
    (node) => TaskRegistry[node.data.type].isEntryPoint
  );

  if (!entryPoint) {
    throw new Error("No entry point found in the workflow nodes.");
  }

  const executionPlan: WorkflowExecutionPlan = [
    { phase: 1, nodes: [entryPoint] },
  ];

  return { executionPlan };
};
