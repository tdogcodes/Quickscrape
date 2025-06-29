import { cn } from "@/lib/utils";
import { TaskParam } from "@/types/task";
import React from "react";
import { Handle, Position } from "reactflow";
import NodeParamField from "./node-param-field";

export const NodeInputs = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col divide-y gap-2">{children}</div>;
};

export const NodeInput = ({
  input,
  nodeId,
}: {
  input: TaskParam;
  nodeId: string;
}) => {
  return (
    <div className="flex justify-start bg-secondary relative !rounded-b-sm p-3 w-full">
      <NodeParamField param={input} nodeId={nodeId} />
      {!input.hideHandle && (
        <Handle
          id={input.name}
          type="target"
          position={Position.Left}
          className={cn(
            "!bg-muted-foreground !border-2 !border-bg !-left-[21px] !w-4 !h-4"
          )}
        />
      )}
    </div>
  );
};
