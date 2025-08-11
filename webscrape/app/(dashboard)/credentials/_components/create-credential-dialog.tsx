"use client";

import React, { useCallback, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2Icon, ShieldEllipsis } from "lucide-react";
import CustomDialogHeader from "@/components/custom-dialog-header";
import {
  createCredentialSchema,
  CreateCredentialSchemaType,
} from "@/schema/credential";
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
import { CreateCredential } from "../../../../actions/credentials/create-credential";
import { set } from "date-fns";

const CreateCredentialDialog = ({ triggerText }: { triggerText?: string }) => {
  const [open, setOpen] = useState(false);

  const form = useForm<CreateCredentialSchemaType>({
    resolver: zodResolver(createCredentialSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: CreateCredential,
    onSuccess: () => {
      toast.success("Credential created successfully!", {
        id: "create-credential",
      });
      setOpen((prev) => !prev);
    },
    onError: (error) => {
      toast.error("Failed to create credential. Please try again.", {
        id: "create-credential",
      });
      console.error("Error creating credential:", error);
    },
  });

  const onSubmit = useCallback(
    (values: CreateCredentialSchemaType) => {
      toast.loading("Creating credential...", { id: "create-credential" });
      mutate(values);
    },
    [mutate]
  );

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button>{triggerText ?? "Create Credential"}</Button>
      </DialogTrigger>
      <DialogContent className="px-0">
        <CustomDialogHeader
          icon={<ShieldEllipsis />}
          title="Create Credential"
          subTitle="Save and manage your credentials securely"
        />
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
                      <Input {...field} placeholder="Enter credential name" />
                    </FormControl>
                    <FormDescription className="text-xs text-muted-foreground">
                      Choose a descriptive and unique name for your credential.{" "}
                      <br />
                      This name will be used to identify the credential.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="value"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 px-1 items-center">
                      Value
                      <p className="text-xs text-muted-foreground">
                        (required)
                      </p>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="resize-none"
                        placeholder="Enter credential value"
                      />
                    </FormControl>
                    <FormDescription className="text-xs text-muted-foreground">
                      Provide a value for your credential. <br />
                      This value will be securely stored and can be used in your
                      workflows.
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
                  "Create credential"
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

export default CreateCredentialDialog;
