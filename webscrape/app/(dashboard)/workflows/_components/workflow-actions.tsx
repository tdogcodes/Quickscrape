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
import React from "react";

const WorkflowActions = () => {
  return (
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
        <DropdownMenuItem className="text-destructive flex items-center justify-center gap-2">
          Delete
          <TrashIcon size={16} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkflowActions;
