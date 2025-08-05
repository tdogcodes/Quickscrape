import { cn } from "@/lib/utils";
import { WorkflowExecutionStatus } from "@/types/workflow";
import React from "react";

const indicatorColors: Record<WorkflowExecutionStatus, string> = {
  PENDING: "bg-slate-400",
  RUNNING: "bg-yellow-400",
  COMPLETED: "bg-emerald-600",
  FAILED: "bg-primary",
};

const labelColor: Record<WorkflowExecutionStatus, string> = {
  PENDING: "text-slate-400",
  RUNNING: "text-yellow-400",
  COMPLETED: "text-emerald-600",
  FAILED: "text-primary",
};

const ExecutionsStatusIndicator = ({
  status,
}: {
  status: WorkflowExecutionStatus;
}) => {
  return (
    <div
      className={cn("w-2 h-2 rounded-full bg-red-500", indicatorColors[status])}
    />
  );
};

export const ExecutionsStatusLabel = ({
  status,
}: {
  status: WorkflowExecutionStatus;
}) => {
  return (
    <span className={cn("lowercase", labelColor[status])}>
      {status.replace("_", " ")}
    </span>
  );
};

export default ExecutionsStatusIndicator;
