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
import { Calendar, TriangleAlertIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import cronsTrue from "cronstrue/i18n";

const SchedulerDialog = ({ workflowId }: { workflowId: string }) => {
  const [cron, setCron] = useState("");
  const [validCron, setValidCron] = useState(false);

  const mutation = useMutation({
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

  useEffect(() => {
    try {
        const humanCronString = cronsTrue.toString(cron)
    } catch (error) {
        throw new Error("Invalid cron expression");
    }
  }, [cron]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"link"}
          size={"sm"}
          className={cn("text-sm p-0 h-auto")}
        >
          <div className="flex items-center gap-1">
            <TriangleAlertIcon className="w-3 h-3 mr-1" /> Set Schedule
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="px-0">
        <CustomDialogHeader
          title="Schedule workflow execution"
          icon={<Calendar />}
        />
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
                mutation.mutate({ id: workflowId, cron });
              }}
              disabled={mutation.isPending}
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
