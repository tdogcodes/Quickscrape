"use client";
import { WorkFlow } from "@/generated/prisma";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  useEdgesState,
  useNodesState,
  useReactFlow,
  Edge,
  Connection,
  addEdge,
} from "@xyflow/react";
import React, { useCallback, useEffect } from "react";
import NodeComponent from "./nodes/node-component";
import "@xyflow/react/dist/style.css";
import { CreateFlowNode } from "@/lib/workflow/create-flow-node";
import { TaskType } from "@/types/task";
import { AppNode } from "@/types/app-node";
import DeletableEdge from "./edges/deletable-edge";

const nodeTypes = {
  FlowScrapeNode: NodeComponent,
};

const edgeTypes = {
  default: DeletableEdge,
};

const fitViewOptions = {
  padding: 1,
};

const FlowEditor = ({ workflow }: { workflow: WorkFlow }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<AppNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const { setViewport, screenToFlowPosition, updateNodeData } = useReactFlow();

  useEffect(() => {
    try {
      const flow = JSON.parse(workflow.definition);
      if (!flow) return;
      setNodes(flow.nodes || []);
      setEdges(flow.edges || []);
    } catch (error) {}
  }, [workflow.definition, setEdges, setNodes, setViewport]);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    const taskType = event.dataTransfer.getData("application/reactflow");
    if (!taskType || typeof taskType === undefined) return;

    const position = screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });

    const newNode = CreateFlowNode(taskType as TaskType, position);
    setNodes((nds) => nds.concat(newNode));
  }, []);

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((edge) => addEdge({ ...connection, animated: true }, edge));
      if (!connection.targetHandle) return;

    const node = nodes.find((n) => n.id === connection.target);
    if (!node) return;

    // Deep clone inputs to ensure reactivity
    const newInputs = { ...(node.data?.inputs || {}) };

    if (newInputs[connection.targetHandle] !== undefined) {
      newInputs[connection.targetHandle] = ""; // clear the value

      updateNodeData(node.id, {
        inputs: newInputs,
      });

      console.log("Cleared input for:", node.id, connection.targetHandle);
    }},
    [setEdges, updateNodeData, nodes]
  );

  console.log("Nodes: ", nodes);
  return (
    <main className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitViewOptions={fitViewOptions}
        fitView
        onDragOver={onDragOver}
        onDrop={onDrop}
        onConnect={onConnect}
      >
        <Controls position="top-left" fitViewOptions={fitViewOptions} />
        <Background variant={BackgroundVariant.Dots} gap={12} />
      </ReactFlow>
    </main>
  );
};

export default FlowEditor;
