"use client";
import useExecutionPlan from "@/components/hooks/use-execution-plan";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";
import React from "react";

const ExecuteBtn = ({ workflowId }: { workflowId: string }) => {

  const generate = useExecutionPlan();

  return (
    <Button variant={"outline"} className="flex items-center gap-2" onClick={() => {
      const plan = generate();
      if (!plan) {
        console.error("Failed to generate execution plan");
        return;
      }
      console.log("--- Plan ---");
      console.table(plan);
    }}>
      <PlayIcon size={16} className="stroke-orange-400" />
    </Button>
  );
};

export default ExecuteBtn;
