"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreateFlowNode } from "@/lib/workflow/create-flow-node";
import { TaskRegistry } from "@/lib/workflow/task/registry";
import { AppNode } from "@/types/app-node";
import { TaskType } from "@/types/task";
import { useReactFlow } from "@xyflow/react";
import { CoinsIcon, CopyIcon, GripVerticalIcon, TrashIcon } from "lucide-react";
import React from "react";

const NodeHeader = ({
  taskType,
  nodeId,
}: {
  taskType: TaskType;
  nodeId: string;
}) => {
  const task = TaskRegistry[taskType];
  const { deleteElements, getNode, addNodes } = useReactFlow();


  return (
    <div className="flex items-center p-2 gap-2">
      <task.icon size={16} />
      <div className="flex justify-between items-center w-full">
        <p className="text-xs text-muted-foreground uppercase font-bold">
          {task.label}
        </p>
        <div className="gap-1 items-center flex">
          {task.isEntryPoint && <Badge>Entry Point</Badge>}
          <Badge className="gap-2 flex items-center text-xs">
            <CoinsIcon className="text-white" size={16} />
            {task.credits}
          </Badge>
          {!task.isEntryPoint && (
            <>
              <Button
                variant={"ghost"}
                size={"icon"}
                onClick={() => {
                  deleteElements({
                    nodes: [{ id: nodeId }],
                  });
                }}
              >
                <TrashIcon size={16} />
              </Button>
              <Button variant={"ghost"} size={"icon"} onClick={() => {
                const node  = getNode(nodeId) as AppNode
                const newX = node.position.x;
                const newY = node.position.y + node.measured?.height! + 20;
                const newNode = CreateFlowNode(node.data.type, {
                  x : newX,
                  y: newY,
                });
                addNodes([newNode])
              }}>
                <CopyIcon size={16} />
              </Button>
            </>
          )}
          <Button
            variant={"ghost"}
            size={"icon"}
            className="drag-handle cursor-grab"
          >
            <GripVerticalIcon size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NodeHeader;
