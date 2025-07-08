import React, { memo } from "react";
import { NodeProps } from "@xyflow/react";
import NodeCard from "./node-card";
import NodeHeader from "./node-header";
import { AppNodeData } from "@/types/app-node";
import { TaskRegistry } from "@/lib/workflow/task/registry";
import { NodeInputs, NodeInput } from "./node-inputs";
import { NodeOutputs, NodeOutput } from "./node-outputs";
import { TaskParam } from "@/types/task";

const NodeComponent = memo((props: NodeProps) => {
  const nodeData = props.data as AppNodeData;
  const task = TaskRegistry[nodeData.type];
  return (
    <NodeCard nodeId={props.id} isSelected={!!props.selected}>
      <NodeHeader taskType={nodeData.type} nodeId={props.id} />
      <NodeInputs>
        {task.inputs.map((input) => (
          <NodeInput
            key={input.name}
            input={input as TaskParam}
            nodeId={props.id}
          />
        ))}
      </NodeInputs>

      <NodeOutputs>
        {task.outputs.map((output, i) => {
          // Ensure output has a 'name' property for TaskParam compatibility
          const outputWithName =
            output.name !== undefined
              ? output
              : { ...output, name: output.webpage ?? `output_${i}` };
          return <NodeOutput key={i} output={outputWithName as TaskParam} />;
        })}
      </NodeOutputs>
    </NodeCard>
  );
});

export default NodeComponent;
NodeComponent.displayName = "NodeComponent";
