"use client";
import TooltipWrapper from "@/components/tooltip-wrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import SaveBtn from "./save-btn";
import ExecuteBtn from "./execute-btn";

interface Props {
  title: string;
  subtitle?: string;
  workflowId: string;
}

const Topbar = ({ title, subtitle, workflowId }: Props) => {
  const router = useRouter();
  return (
    <header
      className="flex p-2 border-separate border-b-2
     w-full h-[60px] bg-background z-10 sticky top-0 justify-between items-center"
    >
      <div className="flex gap-1 flex-1">
        <TooltipWrapper content="back">
          <Button size={"icon"} variant={"ghost"} onClick={() => router.back()}>
            <ChevronLeftIcon size={20} />
          </Button>
        </TooltipWrapper>
        <div className="flex justify-center items-center gap-3">
          <p
            className="font-bold text-ellipsis truncate bg-gradient-to-r
        bg-clip-text text-transparent from-emerald-500 to-emerald-400"
          >
            {title}
          </p>
          {subtitle && (
            <p className="font-bold text-ellipsis text-muted-foreground truncate">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-1 flex-1 justify-end">
        <ExecuteBtn workflowId={workflowId} />
        <SaveBtn workflowId={workflowId} />
      </div>
    </header>
  );
};

export default Topbar;
