"use client";
import GetWorkflowExecutionWithPhases from "@/actions/workflows/get-workflow-execution-with-phases";
import { GetWorkflowPhaseDetails } from "@/actions/workflows/get-workflow-phase-details";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DatesToDurationString } from "@/lib/helper/helper";
import { GetPhasesTotalCost } from "@/lib/helper/phases";
import {
  ExecutionPhaseStatus,
  WorkflowExecutionStatus,
} from "@/types/workflow";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import {
  Calendar,
  CircleDashedIcon,
  Clock,
  ClockIcon,
  Coins,
  CoinsIcon,
  Loader,
  LucideIcon,
  WorkflowIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import React, { ReactNode, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { ExecutionLog } from "@/generated/prisma";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { LogLevel } from "@/types/log";
import PhaseStatusBadge from "./phase-status-badge";
import ReactCountWrapper from "@/components/react-count-wrapper";

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
  });

  const isRunning = query.data?.status === WorkflowExecutionStatus.RUNNING;

  useEffect(() => {
    //while runnning, auto select the current runnning phase in the sidebar
    const phases = query.data?.phases || [];
    if (isRunning) {
      const phaseToSelect = phases.toSorted((a, b) =>
        a.startedAt! > b.startedAt! ? -1 : 1
      )[0];
      setSelectedPhase(phaseToSelect.id);
      return;
    }
    const phaseToSelect = phases.toSorted((a, b) =>
        a.completedAt! > b.completedAt! ? -1 : 1
      )[0];
      setSelectedPhase(phaseToSelect.id);
  }, [query.data?.phases, isRunning, setSelectedPhase]);

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
            value={<ReactCountWrapper value={creditsUsed}/>}
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
              variant={selectedPhase === phase.id ? "secondary" : "ghost"}
              className="w-full justify-between mb-2"
              onClick={() => {
                setSelectedPhase(phase.id);
              }}
            >
              <div className="flex items-center gap-2">
                <Badge className="" variant={"outline"}>
                  {i + 1}
                </Badge>
                <p className="font-semibold">{phase.name}</p>
              </div>
              <PhaseStatusBadge status={phase.status as ExecutionPhaseStatus} />
            </Button>
          ))}
        </div>
      </aside>
      <div className="flex w-full h-full">
        {isRunning && (
          <div className="flex items-center flex-col gap-2 justify-center w-full h-full">
            <p className="font-bold">Run is in progress, please wait...</p>
          </div>
        )}
        {!isRunning && !selectedPhase && (
          <div className="flex items-center flex-col gap-2 justify-center w-full h-full">
            <div className="flex flex-col gap-1 text-center">
              <p className="font-bold">No phase selected</p>
              <p className="text-sm text-muted-foreground">
                Select a phase to view details
              </p>
            </div>
          </div>
        )}
        {!isRunning && selectedPhase && phaseDetails.data && (
          <div className="flex flex-col py-4 container gap-4 overflow-auto">
            <div className="flex gap-2 items-center">
              <Badge className="space-x-2" variant={"outline"}>
                <div className="flex items-center gap-1">
                  <Coins size={18} className="stroke-muted-foreground" />
                  <span>Credits</span>
                </div>
                <span>{phaseDetails?.data.creditsConsumed}</span>
              </Badge>
              <Badge className="space-x-2" variant={"outline"}>
                <div className="flex items-center gap-1">
                  <Clock size={18} className="stroke-muted-foreground" />
                  <span>Duration</span>
                </div>
                <span>
                  {DatesToDurationString(
                    phaseDetails.data.completedAt,
                    phaseDetails.data.startedAt
                  ) || "N/A"}
                </span>
              </Badge>
            </div>
            <ParameterViewer
              title="Inputs"
              subTitle="Inputs used for this phase"
              paramsJson={phaseDetails.data.inputs}
            />
            <ParameterViewer
              title="Outputs"
              subTitle="Outputs used for this phase"
              paramsJson={phaseDetails.data.outputs}
            />
            <LogViewer logs={phaseDetails.data.logs} />
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

const ParameterViewer = ({
  title,
  subTitle,
  paramsJson,
}: {
  title: string;
  subTitle: string;
  paramsJson: string | null;
}) => {
  const params = paramsJson ? JSON.parse(paramsJson) : undefined;
  return (
    <Card>
      <CardHeader
        className="rounded-lg rounded-b-none border-b
       py-4 bg-gray-50 dark:bg-background"
      >
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {subTitle}
        </CardDescription>
      </CardHeader>
      <CardContent className="py-4">
        <div className="flex flex-col gap-2">
          {!params ||
            (Object.keys(params).length === 0 && (
              <p className="text-sm">No parameters generated by this phase</p>
            ))}
          {params &&
            Object.entries(params).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between items-center space-y-1"
              >
                <p className="text-sm text-muted-foreground flex-1 basis-1/3">
                  {key}
                </p>
                <Input
                  readOnly
                  className="flex-1 basis-2/3"
                  value={value as string}
                />
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

const LogViewer = ({ logs }: { logs: ExecutionLog[] | undefined }) => {
  if (!logs || logs.length === 0) return null;
  return (
    <Card className="w-full">
      <CardHeader
        className="rounded-lg rounded-b-none border-b
       py-4 bg-gray-50 dark:bg-background"
      >
        <CardTitle className="text-base">Logs</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Logs generated by this phase
        </CardDescription>
      </CardHeader>
      <CardContent className="py-0">
        <Table>
          <TableHeader className="text-muted-foreground text-sm">
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs?.map((log) => (
              <TableRow className="text-muted-foreground" key={log.id}>
                <TableCell
                  width={190}
                  className="text-xs text-muted-foreground p-[2px] pl-4"
                >
                  {log.timestamp.toISOString()}
                </TableCell>
                <TableCell
                  width={80}
                  className={cn(
                    "uppercase text-xs font-bold p-[3px] pl-4",
                    (log.logLevel as LogLevel) === "error"
                      ? "text-destructive"
                      : (log.logLevel as LogLevel) === "warning"
                      ? "text-yellow-500"
                      : (log.logLevel as LogLevel) === "info"
                      ? "text-primary"
                      : "text-gray-500"
                  )}
                >
                  {log.logLevel}
                </TableCell>
                <TableCell width={190} className="text-sm flex-1 p-[3px] pl-4">
                  {log.message}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
