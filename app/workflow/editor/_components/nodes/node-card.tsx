"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { useReactFlow } from "@xyflow/react";
import useFlowValidation from "@/components/hooks/use-flow-validation";

const NodeCard = ({
  children,
  nodeId,
  isSelected = false,
}: {
  children: React.ReactNode;
  nodeId: string;
  isSelected: boolean;
}) => {
  const { getNode, setCenter } = useReactFlow();
  const { invalidInputs } = useFlowValidation();
  const hasInvalidInputs = invalidInputs.some((node) => node.nodeId === nodeId);

  return (
    <div
      onDoubleClick={() => {
        const node = getNode(nodeId);
        if (!node) return;
        const { position, width, height } = node;
        if (!position || !width || !height) return;
        const x = position.x + width / 2;
        const y = position.y + height / 2;
        if (x === undefined || y === undefined) return;
        setCenter(x, y, { duration: 500, zoom: 1 });
      }}
      className={cn(
        "border-2 transition-colors duration-200 rounded-t-md cursor-pointer bg-background w-[420px] border-separate text-sm gap-1 flex flex-col ",
        isSelected && "border-primary",
        hasInvalidInputs && "border-destructive border-2",
      )}
      id={nodeId}
    >
      {children}
    </div>
  );
};

export default NodeCard;
