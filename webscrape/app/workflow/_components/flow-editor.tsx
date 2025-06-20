"use client";
import { WorkFlow } from "@/generated/prisma";
import ReactFlow, { useEdgesState, useNodesState } from "reactflow";
import React from "react";

const FlowEditor = ({ workflow }: { workflow: WorkFlow }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  return (
    <main className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      ></ReactFlow>
    </main>
  );
};

export default FlowEditor;
