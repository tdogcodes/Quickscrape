"use client";
import React, { useCallback, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CopyIcon, Layers2Icon, Loader2Icon } from "lucide-react";
import CustomDialogHeader from "@/components/custom-dialog-header";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  DuplicateWorkflowSchemaType,
  duplicateWorkflowSchema,
} from "@/types/schema/workflows";
import { DuplicateWorkflow } from "@/actions/workflows/duplicate-workflow";
import { cn } from "@/lib/utils";

const DuplicateWorkflowDialog = ({ workflowId }: { workflowId?: string }) => {
  const [open, setOpen] = useState(false);

  const form = useForm<DuplicateWorkflowSchemaType>({
    resolver: zodResolver(duplicateWorkflowSchema),
    defaultValues: {
      workflowId,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: DuplicateWorkflow,
    onSuccess: () => {
      toast.success("Workflow duplicated successfully!", {
        id: "duplicate-workflow",
      });
      setOpen(prev => !prev);
    },
    onError: (error) => {
      toast.error("Failed to duplicate workflow. Please try again.", {
        id: "duplicate-workflow",
      });
      console.error("Error duplicating workflow:", error);
    },
  });

  const onSubmit = useCallback(
    (values: DuplicateWorkflowSchemaType) => {
      toast.loading("Duplicating workflow...", { id: "duplicate-workflow" });
      mutate(values);
    },
    [mutate]
  );

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        form.reset();
        setOpen(open);
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className={cn("ml-2 transition-opacity duration-200 opacity-0 group-hover/card:opacity-100")}
        >
          <CopyIcon className="cursor-pointer w-4 h-4"/>
        </Button>
      </DialogTrigger>
      <DialogContent className="px-0">
        <CustomDialogHeader icon={<Layers2Icon />} title="Duplicate Workflow" />
        <div className="p-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 px-1 items-center">
                      Name
                      <p className="text-xs text-primary">required</p>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter workflow name" />
                    </FormControl>
                    <FormDescription className="text-xs text-muted-foreground">
                      Choose a descriptive and unique name for your workflow.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 px-1 items-center">
                      Description
                      <p className="text-xs text-muted-foreground">
                        (optional)
                      </p>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="resize-none"
                        placeholder="Enter workflow description"
                      />
                    </FormControl>
                    <FormDescription className="text-xs text-muted-foreground">
                      Provide a brief description of what this workflow does.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
                <Button
                  type="submit"
                  className="w-full mx-auto flex items-center justify-center"
                  disabled={isPending}
                >
                  {!isPending ? (
                    "duplicate workflow"
                  ) : (
                    <Loader2Icon className="animate-spin" />
                  )}
                </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DuplicateWorkflowDialog;
