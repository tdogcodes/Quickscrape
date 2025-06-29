"use client";
import { WorkFlow } from "@/generated/prisma";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import React from "react";
import { CreateFlowNode } from "@/lib/workflow/task/create-flow-node";
import { TaskType } from "@/types/task";
import NodeComponent from "./nodes/node-component";

const nodeTypes = {
  FlowScrapeNode: NodeComponent,
};
const fitViewOptions = {
  padding: 1,
};

const FlowEditor = ({ workflow }: { workflow: WorkFlow }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    CreateFlowNode(TaskType.LAUNCH_BROWSER),
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  return (
    <main className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={fitViewOptions}
      >
        <Controls position="top-left" fitViewOptions={fitViewOptions} />
        <Background variant={BackgroundVariant.Dots} gap={12} />
      </ReactFlow>
    </main>
  );
};

export default FlowEditor;
