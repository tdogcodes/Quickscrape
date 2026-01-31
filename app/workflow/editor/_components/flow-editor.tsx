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
  getOutgoers,
} from "@xyflow/react";
import React, { useCallback, useEffect } from "react";
import NodeComponent from "./nodes/node-component";
import "@xyflow/react/dist/style.css";
import { CreateFlowNode } from "@/lib/workflow/create-flow-node";
import { TaskType } from "@/types/task";
import { AppNode } from "@/types/app-node";
import DeletableEdge from "./edges/deletable-edge";
import { TaskRegistry } from "@/lib/workflow/task/registry";

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

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const taskType = event.dataTransfer.getData("application/reactflow");
      if (!taskType || typeof taskType === undefined) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = CreateFlowNode(taskType as TaskType, position);
      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes]
  );

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
      }
    },
    [setEdges, updateNodeData, nodes]
  );

  const isValidConnection = useCallback(
    (connection: Edge | Connection) => {
      const sourceNode = nodes.find((n) => n.id === connection.source);
      // no self connection allowed
      if (connection.source === connection.target) {
        return false;
      }
      // same taskParam type connection not allowed
      const source = nodes.find((n) => n.id === connection.source);
      const target = nodes.find((n) => n.id === connection.target);
      if (!source || !target) {
        console.error(
          "Invalid connection: source or target node not found",
          connection
        );
        return false;
      }

      const sourceTask = TaskRegistry[source.data.type];
      const targetTask = TaskRegistry[target.data.type];
      
      const output = sourceTask.outputs.find(
        (o) => o.name === connection.sourceHandle
      );
      const input = targetTask.inputs.find(
        (i) => i.name === connection.targetHandle
      );

      if (input?.type !== output?.type) {
        console.error(
          "Invalid connection: source and target types do not match"
        );
        return false;
      }
      const hasCycle = (node: AppNode, visited = new Set()) => {
        if(visited.has(node.id)) return false;
        visited.add(node.id);

        for(const outger of getOutgoers(node, nodes, edges)) {
          if(outger.id === connection.source) return true;
          if(hasCycle(outger, visited)) return true;
        }
      }
      const detectedCycle = hasCycle(target);

     return !detectedCycle
    },
    [nodes, edges]
  );

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
        isValidConnection={isValidConnection}
      >
        <Controls position="top-left" fitViewOptions={fitViewOptions} />
        <Background variant={BackgroundVariant.Dots} gap={12} />
      </ReactFlow>
    </main>
  );
};

export default FlowEditor;
