"use client";
import { RunWorkflow } from "@/actions/workflows/run-workflow";
import useExecutionPlan from "@/components/hooks/use-execution-plan";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useReactFlow } from "@xyflow/react";
import { PlayIcon } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const ExecuteBtn = ({ workflowId }: { workflowId: string }) => {
  const generate = useExecutionPlan();
  const { toObject } = useReactFlow();

  const mutation = useMutation({
    mutationFn: RunWorkflow,
    onSuccess: (data) => {
      toast.success("Workflow executed successfully", {id: "flow-execution"});
    },
    onError: (data) => {
      toast.error("Something went wrong", {id: "flow-execution"});
    },
  })

  return (
    <Button
      variant={"outline"}
      className="flex items-center gap-2"
      disabled={mutation.isPending}
      onClick={() => {
        const plan = generate();
        if (!plan) {
          console.error("Failed to generate execution plan");
          return;
        }
        mutation.mutate({
          workflowId: workflowId,
          flowDefinition: JSON.stringify(toObject()),
        });
      }}
    >
      <PlayIcon size={16} className="stroke-orange-400" />
    </Button>
  );
};

export default ExecuteBtn;
