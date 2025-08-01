"use client";
import TooltipWrapper from "@/components/tooltip-wrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import SaveBtn from "./save-btn";
import ExecuteBtn from "./execute-btn";
import NavigationTabs from "./navigation-tabs";
import PublishBtn from "./publish-btn";
import UnpublishBtn from "./unpublish-btn";

interface Props {
  title: string;
  subtitle?: string;
  workflowId: string;
  hideButtons?: boolean;
  isPublished?: boolean;
}

const Topbar = ({
  title,
  subtitle,
  workflowId,
  hideButtons = false,
  isPublished = false,
}: Props) => {
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
            className="font-bold text-ellipsis truncate text-primary dark:bg-gradient-to-r
        dark:bg-clip-text dark:text-transparent dark:from-primary dark:to-white "
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

      {/* Action Buttons */}
      <NavigationTabs workflowId={workflowId} />

      <div className="flex gap-1 flex-1 justify-end">
        {!hideButtons && (
          <>
            <ExecuteBtn workflowId={workflowId} />
            {isPublished && (
              <>
                <UnpublishBtn workflowId={workflowId} />
              </>
            )}
            {!isPublished && (
              <>
                <SaveBtn workflowId={workflowId} />
                <PublishBtn workflowId={workflowId} />
              </>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Topbar;
