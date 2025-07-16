"use client";
import GetWorkflowExecutionWithPhases from "@/actions/workflows/get-workflow-execution-with-phases";
import { GetWorkflowPhaseDetails } from "@/actions/workflows/get-workflow-phase-details";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DatesToDurationString } from "@/lib/helper/helper";
import { GetPhasesTotalCost } from "@/lib/helper/phases";
import { WorkflowExecutionStatus } from "@/types/workflow";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import {
  Calendar,
  CircleDashedIcon,
  ClockIcon,
  CoinsIcon,
  Loader,
  LucideIcon,
  WorkflowIcon,
} from "lucide-react";
import React, { ReactNode, useState } from "react";

type ExecutionData = Awaited<ReturnType<typeof GetWorkflowExecutionWithPhases>>;

const ExecutionViewer = ({ initialData }: { initialData: ExecutionData }) => {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

  const query = useQuery({
    queryKey: ["execution", initialData?.id],
    initialData,
    refetchInterval: (q) =>
      q.state?.data?.status === WorkflowExecutionStatus.RUNNING ? 2000 : false,
    queryFn: () => GetWorkflowExecutionWithPhases(initialData!.id),
  });

  const phaseDetails = useQuery({
    queryKey: ["phaseDetails", selectedPhase],
    enabled: selectedPhase !== null,
    queryFn: () => GetWorkflowPhaseDetails(selectedPhase!),
  })

  const isRunning = query.data?.status === WorkflowExecutionStatus.RUNNING;

  const duration = DatesToDurationString(
    query.data?.completedAt,
    query.data?.startedAt
  );

  const creditsUsed = GetPhasesTotalCost(query.data?.phases || []);

  return (
    <div className="flex w-full h-full">
      <aside
        className="w-[440px] min-w-[440px] max-w-[440px]
      border-separate border-r-2 flex flex-grow flex-col overflow-hidden
    "
      >
        {/*  Displays the status of the workflow execution  */}
        <div className="py-4 px-2">
          <ExecutionLabel
            icon={CircleDashedIcon}
            label="Status"
            value={query.data?.status}
          />

          {/*  Displays the started at of the workflow execution  */}
          <ExecutionLabel
            icon={Calendar}
            label="Started At"
            value={
              query.data?.startedAt
                ? formatDistanceToNow(new Date(query?.data?.startedAt), {
                    addSuffix: true,
                  })
                : "N/A"
            }
          />

          {/*  Displays the duration of the workflow execution  */}
          <ExecutionLabel
            icon={ClockIcon}
            label={duration}
            value={
              duration ? (
                duration
              ) : (
                <Loader className="animate-spin" size={20} />
              )
            }
          />

          {/*  Displays the duration of the workflow execution  */}
          <ExecutionLabel
            icon={CoinsIcon}
            label="Credits Used"
            value={creditsUsed}
          />
        </div>
        <Separator />
        <div className="flex justify-center items-center py-2 px-4">
          <div className="text-muted-foreground flex items-center gap-2">
            <WorkflowIcon size={20} className="stroke-muted-foreground/80" />
            <span className="font-semibold">Phases</span>
          </div>
        </div>
        <Separator />
        <div className="overflow-auto px-2 h-full py-4">
          {query?.data?.phases.map((phase, i) => (
            <Button
              key={phase.id}
              disabled={isRunning}
              variant={ selectedPhase === phase.id ? "secondary" : "ghost"}
              className="w-full justify-between mb-2"
              onClick={() =>{ 
                setSelectedPhase(phase.id)
              }}
            >
              <div className="flex items-center gap-2">
                <Badge className="" variant={"outline"}>
                  {i + 1}
                </Badge>
                <p className="font-semibold">{phase.name}</p>
              </div>
              <p className="text-xs text-muted-foreground">{phase.status}</p>
            </Button>
          ))}
        </div>
      </aside>
      <div className="flex w-full h-full">
        {isRunning && (
          <div className="flex items-center flex-col gap-2 justify-center w-full h-full">
            <p className="font-bold">
              Run is in progress, please wait...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExecutionViewer;

const ExecutionLabel = ({
  icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: ReactNode;
  value: ReactNode;
}) => {
  const Icon = icon;

  return (
    <div className="py-2 px-4 flex justify-between items-center text-sm">
      <div className="text-muted-foreground flex gap-2 items-center">
        <Icon size={20} className="stroke-muted-foreground/80" />
        <span className="">{label}</span>
      </div>
      <div className="font-semibold capitalize flex items-center gap-2">
        {value}
      </div>
    </div>
  );
};
