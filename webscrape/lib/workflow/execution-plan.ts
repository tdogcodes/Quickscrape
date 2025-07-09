import { AppNode } from "@/types/app-node";
import {
  WorkflowExecutionPlan,
  WorkflowExecutionPlanPhase,
} from "@/types/workflow";
import { Edge, getIncomers } from "@xyflow/react";
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

  const planned = new Set<string>();

  const executionPlan: WorkflowExecutionPlan = [
    { phase: 1, nodes: [entryPoint] },
  ];

  planned.add(entryPoint.id);

  for (
    let phase = 2;
    phase <= nodes.length && planned.size < nodes.length;
    phase++
  ) {
    const nextPhase: WorkflowExecutionPlanPhase = { phase, nodes: [] };
    for (const currentNode of nodes) {
      if (planned.has(currentNode.id)) {
        // Node already put in the execution plan
        continue;
      }
      const invalidInputs = getInvalidInputs(currentNode, edges, planned);
      if (invalidInputs.length > 0) {
        const incomers = getIncomers(currentNode, nodes, edges);
        if (incomers.every((incomer) => planned.has(incomer.id))) {
          /* if all incomers are planned and there are still invalid inputs,
                then this particular node has an invalid input and 
                it means the worklow in invalid
            */
          console.error("@Invalid inputs", currentNode.id, invalidInputs);
          throw new Error("Todo: handle error 1");
        } else { continue } //skip this node for now;
      }

      nextPhase.nodes.push(currentNode);
    }
     for (const node of nextPhase.nodes) {
      planned.add(node.id);
     }
    executionPlan.push(nextPhase);
  }

  return { executionPlan };
};

const getInvalidInputs = (
  node: AppNode,
  edges: Edge[],
  planned: Set<string>
) => {
  const invalidInputs = [];
  const inputs = TaskRegistry[node.data.type].inputs;
  for (const input of inputs) {
    const inputValue = node.data.inputs[input.name];
    const inputValueProvided = inputValue?.length > 0;
    if (inputValueProvided) {
      // this means this input is fine
      continue;
    }
    // is a vlaue isnt provided by the user, we check if theres an output linked to the current input
    const incomingEdges = edges.filter((edge) => edge.target === node.id);

    const inputLinkedToOutput = incomingEdges.find(
      (edge) => edge.targetHandle === input.name
    );

    const requiredInputProvidedByVisitedOutput =
      input.required &&
      inputLinkedToOutput &&
      planned.has(inputLinkedToOutput.source);

      if(requiredInputProvidedByVisitedOutput){
        // this means this input is reuqired and we have a valid value for it provided by a previous node
        continue;
      } else if(!input.required){
        // if an input is not required but there is an output linked to it
        // we need to be sure that the output is already planned
        if(!inputLinkedToOutput) continue;
        if(inputLinkedToOutput && planned.has(inputLinkedToOutput.source)){
          // the output is providing a value for this input
          continue;
        }
    }
    invalidInputs.push(input.name);
  }
  return invalidInputs;
};
