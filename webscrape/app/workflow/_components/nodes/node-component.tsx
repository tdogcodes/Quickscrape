import React, { memo } from "react";
import { NodeProps } from "@xyflow/react";
import NodeCard from "./node-card";
import NodeHeader from "./node-header";
import { AppNodeData } from "@/types/app-node";
import { TaskRegistry } from "@/lib/workflow/task/registry";
import { NodeInput, NodeInputs } from "./node-inputs";

const NodeComponent = memo((props: NodeProps) => {
  const nodeData = props.data as AppNodeData;
  const task = TaskRegistry[nodeData.type];
  return (
    <NodeCard nodeId={props.id} isSelected={!!props.selected}>
      <NodeHeader taskType={nodeData.type} />
      <NodeInputs>
        {task.input.map((input) => (
          <NodeInput key={input.name} input={input} nodeId={props.id}/>
        ))}
      </NodeInputs>
    </NodeCard>
  );
});

export default NodeComponent;
NodeComponent.displayName = "NodeComponent";
