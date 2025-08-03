"use client";
import TooltipWrapper from "@/components/tooltip-wrapper";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CoinsIcon,
  CornerDownRightIcon,
  MoreVerticalIcon,
  MoveRightIcon,
  TrashIcon,
} from "lucide-react";
import React, { useState } from "react";
import DeleteWorkflowDialog from "./delete-workflow-dialog";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WorkFlow } from "@/generated/prisma";
import { cn } from "@/lib/utils";
import { WorkflowStatus } from "@/types/workflow";
import { FileTextIcon, PlayIcon, ShuffleIcon } from "lucide-react";
import Link from "next/link";
import RunBtn from "./run-btn";
import SchedulerDialog from "./scheduler-dialog";
import { Badge } from "@/components/ui/badge";

const statusColors = {
  [WorkflowStatus.DRAFT]: "bg-amber-400 text-amber-600",
  [WorkflowStatus.PUBLISHED]: "bg-emerald-400 text-emerald-600",
};

const WorkflowCard = ({ workflow }: { workflow: WorkFlow }) => {
  const isDraft = workflow.status === WorkflowStatus.DRAFT;
  const isPublished = workflow.status === WorkflowStatus.PUBLISHED;

  return (
    <Card className="border border-separate shadow-md rounded-lg hover:shadow-lg dark:shadow-primary/30 transition-all duration-300">
      <CardContent className="p-4 items-center flex justify-between h-[100px]">
        <div className="flex items-center justify-end space-x-3">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center",
              isDraft
                ? statusColors[WorkflowStatus.DRAFT]
                : statusColors[WorkflowStatus.PUBLISHED]
            )}
          >
            {isDraft ? (
              <FileTextIcon className="h-5 w-5" />
            ) : (
              <PlayIcon className="h-5 w-5 text-white" />
            )}
          </div>
          <div>
            <h3 className="text-base font-bold text-muted-foreground flex items-center">
              <Link
                href={`/workflow/editor/${workflow.id}`}
                className="flex items-center hover:underline"
              >
                {workflow.name}
              </Link>
              {isDraft && (
                <span className="ml-2 px-2 py-0.5 text-sm font-medium bg-yellow-200 text-yellow-800 rounded full">
                  Draft
                </span>
              )}
            </h3>
            <ScheduleSection
              workflowId={workflow.id}
              isDraft={isDraft}
              creditsCost={workflow.creditsCost}
              cron={workflow.cron}
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {!isDraft && <RunBtn workflowId={workflow.id} />}
          <Link
            href={`/workflow/editor/${workflow.id}`}
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "sm",
              }),
              "flex items-center gap-2"
            )}
          >
            <ShuffleIcon size={16} />
            Editor
          </Link>
          <WorkflowActions
            workflowId={workflow.id}
            workflowName={workflow.name}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkflowCard;

const WorkflowActions = ({
  workflowName,
  workflowId,
}: {
  workflowName: string;
  workflowId: string;
}) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return (
    <>
      <DeleteWorkflowDialog
        open={showDeleteDialog}
        setOpen={() => setShowDeleteDialog((prev) => !prev)}
        workflowName={workflowName}
        workflowId={workflowId}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} size={"sm"}>
            <TooltipWrapper content={"More actions"}>
              <div className="flex items-center justify-center">
                <MoreVerticalIcon size={18} />
              </div>
            </TooltipWrapper>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel className="flex items-center justify-center">
            Actions
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => setShowDeleteDialog((prev) => !prev)}
            className="text-primary flex items-center justify-center gap-2"
          >
            Delete
            <TrashIcon size={16} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

const ScheduleSection = ({
  isDraft,
  creditsCost,
  workflowId,
  cron
}: {
  isDraft: boolean;
  creditsCost: number;
  workflowId: string;
  cron: string | null;
}) => {
  if (isDraft) return null;

  return (
    <div className="flex items-center gap-2">
      <CornerDownRightIcon
        size={16}
        className="h-4 w-4 text-muted-foreground"
      />
      <SchedulerDialog workflowId={workflowId} cron={cron} />
      <MoveRightIcon className="h-4 w-4 text-muted-foreground" />
      <TooltipWrapper content="credit consumption for to execute the workflow">
        <div className="flex items-center gap-3">
          <Badge
            variant={"outline"}
            className="space-x-2 text-muted-foreground rounded-sm"
          >
            <span className="text-sm">{creditsCost}</span>
            <CoinsIcon className="h-4 w-4" />
          </Badge>
        </div>
      </TooltipWrapper>
    </div>
  );
};
