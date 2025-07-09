import { FlowToExecutionPlan } from "@/lib/workflow/execution-plan";
import { AppNode } from "@/types/app-node";
import { useReactFlow } from "@xyflow/react";
import { useCallback } from "react";

const useExecutionPlan = () => {
    const {toObject} = useReactFlow();

    const generateExecutionPlan = useCallback(() => {
        const { nodes, edges } = toObject();      
        const { executionPlan } = FlowToExecutionPlan(nodes as AppNode[], edges);
        return executionPlan;
    } ,[toObject])
     return generateExecutionPlan;
}

export default useExecutionPlan;