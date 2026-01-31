import { cn } from "@/lib/utils";
import { TaskParam } from "@/types/task";
import React from "react";
import { Handle, Position, useEdges } from "@xyflow/react";
import NodeParamField from "./node-param-field";
import { ColorForHandle } from "./common";
import useFlowValidation from "@/components/hooks/use-flow-validation";

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
  const { invalidInputs } = useFlowValidation();
  const edges = useEdges()
  const isConnected = edges.some(edge => edge.target === nodeId && edge.targetHandle === input.name);
  const hasErrors = invalidInputs.find(node => node.nodeId === nodeId)?.inputs.find(invalidInput => invalidInput === input.name);  
  return (
    <div className={cn("flex justify-start bg-secondary relative p-3 w-full",
      hasErrors && "bg-destructive/30"
    )}>
      <NodeParamField param={input} nodeId={nodeId} setNodes={setNodes} disabled={isConnected} />
      {!input.hideHandle && (
        <Handle
          id={input.name}
          isConnectable={!isConnected}
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
