import { cn } from "@/lib/utils";
import { TaskParam } from "@/types/task";
import React from "react";
import { Handle, Position, useEdges } from "@xyflow/react";
import NodeParamField from "./node-param-field";
import { ColorForHandle } from "./common";

export const NodeInputs = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col divide-y gap-2">{children}</div>;
};

export const NodeInput = ({
  input,
  nodeId,
  setNodes,
  disabled,
}: {
  input: TaskParam;
  nodeId: string;
  setNodes?: React.Dispatch<React.SetStateAction<any[]>>;
  disabled?: boolean;
}) => {

  const edges = useEdges()
  const isConnected = edges.some(edge => edge.target === nodeId && edge.targetHandle === input.name);

  return (
    <div className="flex justify-start bg-secondary relative p-3 w-full">
      <NodeParamField param={input} nodeId={nodeId} setNodes={setNodes} disabled={isConnected} />
      {!input.hideHandle && (
        <Handle
          id={input.name}
          type="target"
          position={Position.Left}
          className={cn(
            "!bg-muted-foreground !border-2 !border-bg !-left-[10px] !w-4 !h-4",
            ColorForHandle[input.type] || ""
          )}
        />
      )}
    </div>
  );
};
