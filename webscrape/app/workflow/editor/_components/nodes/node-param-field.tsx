import { TaskParam, TaskParamType } from "@/types/task";
import React, { useCallback } from "react";
import StringParam from "./param/string-param";
import { AppNode } from "@/types/app-node";
import { useReactFlow } from "@xyflow/react";

const NodeParamField = ({
  param,
  nodeId,
  setNodes,
}: {
  nodeId: string;
  param: TaskParam;
  setNodes?: React.Dispatch<React.SetStateAction<AppNode[]>>;
}) => {
  const { getNode, updateNodeData } = useReactFlow();
  const node = getNode(nodeId) as AppNode;
  const value = node?.data.inputs?.[param.name];

  const updateNodeParamValue = useCallback(
    (newValue: string) => {
      updateNodeData(nodeId, {
        inputs: {
          ...node?.data?.inputs,
          [param.name]: newValue,
        }
      })
    },
    [updateNodeData, param.name, nodeId, node?.data?.inputs]
  );

  switch (param.type) {
    case TaskParamType.STRING:
      return (
        <StringParam
          param={param}
          value={value}
          updateNodeParamValue={updateNodeParamValue}
        />
      );
    default:
      return (
        <div className="w-full">
          <p className="text-xs text-muted-foreground">Not Implemented</p>
        </div>
      );
  }
};

export default NodeParamField;
