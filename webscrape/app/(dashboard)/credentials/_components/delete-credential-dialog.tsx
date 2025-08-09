"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { DeleteCredential } from "@/actions/credentials/delete-credential";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

interface Props {
  name: string;
}

const DeleteCredentialDialog = ({ name }: Props) => {
  const [open, setOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const deleteMutation = useMutation({
    mutationFn: DeleteCredential,
    onSuccess: () => {
      toast.success(`Credential "${name}" deleted successfully.`);
      setIsDeleting(false);
    },
    onError: (error: any) => {
      setIsDeleting(false);
      toast.error(
        error?.message || "An error occurred while deleting the credential."
      );
    },
  });

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className="bg-primary">
          <XIcon size={18} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Are you sure you want to delete {name}?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            This action{" "}
            <span className="font-semibold text-primary">cannot</span> be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="flex pt-2 mx-auto gap-2 items-center justify-center">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              disabled={isDeleting}
              onClick={(e) => {
                e.stopPropagation();
                setIsDeleting(true);
                deleteMutation.mutate(name);
              }}
              className="bg-primary text-white hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteCredentialDialog;
