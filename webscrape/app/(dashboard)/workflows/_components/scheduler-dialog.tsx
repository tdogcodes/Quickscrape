"use client";
import { UpdateWorkflowCron } from "@/actions/workflows/update-workflow-cron";
import CustomDialogHeader from "@/components/custom-dialog-header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import {
  Calendar,
  ClockIcon,
  RefreshCcw,
  TimerResetIcon,
  TriangleAlertIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import cronsTrue from "cronstrue/i18n";
import parser from "cron-parser";
import { RemoveWorkflowSchedule } from "@/actions/workflows/remove-workflow-schedule";

type Props = {
  workflowId: string;
  cron: string | null;
};

const SchedulerDialog = (props: Props) => {
  const [cron, setCron] = useState(props.cron || "");
  const [validCron, setValidCron] = useState(false);
  const [readableCron, setReadableCron] = useState("");

  const updateScheduleMutation = useMutation({
    mutationFn: UpdateWorkflowCron,
    onSuccess: () => {
      toast.success("Workflow cron updated successfully", {
        id: "update-workflow-cron",
      });
    },
    onError: () => {
      toast.error("Failed to update workflow cron", {
        id: "update-workflow-cron",
      });
    },
  });

  const removeScheduleMutation = useMutation({
    mutationFn: RemoveWorkflowSchedule,
    onSuccess: () => {
      toast.success("Workflow cron removed successfully", {
        id: "remove-workflow-cron",
      });
    },
    onError: () => {
      toast.error("Failed to remove workflow cron", {
        id: "remove-workflow-cron",
      });
    },
  });

  useEffect(() => {
    try {
      parser.parse(cron);
      const humanCronString = cronsTrue.toString(cron);
      setValidCron(true);
      setReadableCron(humanCronString);
    } catch (error) {
      setValidCron(false);
      setReadableCron("Invalid cron expression");
    }
  }, [cron]);

  const workflowHasValidCron = props.cron && props.cron.length > 0;
  const readableSavedCron =
    workflowHasValidCron && cronsTrue.toString(props.cron!);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"link"}
          size={"sm"}
          className={cn(
            "text-sm p-0 h-auto",
            workflowHasValidCron && "text-emerald-600"
          )}
        >
          {workflowHasValidCron ? (
            <div className="flex items-center gap-1">
              <ClockIcon size={20} />
              {readableSavedCron}
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <TriangleAlertIcon className="w-3 h-3 mr-1" /> Set Schedule
            </div>
          )}
        </Button>
      </DialogTrigger>
      {workflowHasValidCron && (
        <Button
          variant={"outline"}
          className="border-destructive p-2 h-6"
          onClick={() =>  {
                toast.loading("Removing...", {
                  id: "remove-workflow-cron",
                });
                removeScheduleMutation.mutate(props.workflowId);
              }}
            disabled={removeScheduleMutation.isPending}
        >
          Reset
          <RefreshCcw size={14} />
        </Button>
      )}
      <DialogContent className="px-0">
        <CustomDialogHeader title="Schedule Web Scraping" icon={<Calendar />} />
        <div className="p-6 space-y-4">
          <p className="text-muted-foreground text-sm">
            Specify a cron expression to schedule a workflow execution, all
            times are in UTC
          </p>
          <Input
            placeholder="eg: * * * * *"
            value={cron}
            onChange={(e) => setCron(e.target.value)}
          />
          <div
            className={cn(
              "bg-accent rounded-md p-4 border text-sm border-primary text-muted-foreground",
              validCron && "border-emerald-600"
            )}
          >
            {validCron ? readableCron : "Not a valid cron expression"}
          </div>
        </div>
        <DialogFooter className="px-6 gap-2">
          <DialogClose asChild>
            <Button className="w-full" variant={"secondary"}>
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              className="w-full"
              onClick={() => {
                toast.loading("Saving...", {
                  id: "update-workflow-cron",
                });
                updateScheduleMutation.mutate({ id: props.workflowId, cron });
              }}
              disabled={updateScheduleMutation.isPending || !validCron}
            >
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SchedulerDialog;
