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
import { MoreVerticalIcon, TrashIcon } from "lucide-react";
import React, { useState } from "react";
import DeleteWorkflowDialog from "./delete-workflow-dialog";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WorkFlow } from "@/generated/prisma";
import { cn } from "@/lib/utils";
import { WorkFlowStatus } from "@/types/workflow";
import { FileTextIcon, PlayIcon, ShuffleIcon } from "lucide-react";
import Link from "next/link";

const statusColors = {
  [WorkFlowStatus.DRAFT]: "bg-yellow-400 text-yellow-600",
  [WorkFlowStatus.PUBLISHED]: "bg-primary",
};

const WorkflowCard = ({ workflow }: { workflow: WorkFlow }) => {
  const isDraft = workflow.status === WorkFlowStatus.DRAFT;
  const isPublished = workflow.status === WorkFlowStatus.PUBLISHED;

  return (
    <Card className="border border-separate shadow-md rounded-lg hover:shadow-lg dark:shadow-primary/30 transition-all duration-300">
      <CardContent className="p-4 items-center flex justify-between h-[100px]">
        <div className="flex items-center justify-end space-x-3">
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              isDraft
                ? statusColors[WorkFlowStatus.DRAFT]
                : statusColors[WorkFlowStatus.PUBLISHED]
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
          </div>
        </div>
        <div className="flex items-center space-x-2">
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
          </Link>
          <WorkflowActions workflowId={workflow.id} workflowName={workflow.name} />
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
          <TooltipWrapper content={"More actions"}>
          <Button variant={"outline"} size={"sm"}>
              <div className="flex items-center justify-center">
                <MoreVerticalIcon size={18} />
              </div>
          </Button>
          </TooltipWrapper>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel className="flex items-center justify-center">
            Actions
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => setShowDeleteDialog((prev) => !prev)}
            className="text-destructive flex items-center justify-center gap-2"
          >
            Delete
            <TrashIcon size={16} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
