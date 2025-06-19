import { GetWorkflowsForUser } from "@/actions/workflows/getWorkflowsForUser";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, InboxIcon } from "lucide-react";
import React, { Suspense } from "react";
import CreateWorkflowDialog from "./_components/create-workflow-dialog";
import WorkflowCard from "./_components/workflow-card";

const Page = () => {
  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Workflows</h1>
          <p className="text-muted-foreground">Manage your Workflows</p>
        </div>
        <CreateWorkflowDialog triggerText="Create workflow" />
      </div>
      <div className="h-full py-6 ">
        <Suspense fallback={<UserWorkflowsSkeleton />}>
          <UserWorkflows />
        </Suspense>
      </div>
    </div>
  );
};

const UserWorkflowsSkeleton = () => {
  return (
    <div className="space-y-2">
      {Array.from({ length: 4 }).map((item, i) => (
        <Skeleton key={i} className="h-32 w-full" />
      ))}
    </div>
  );
};

const UserWorkflows = async () => {

  const workFlows = await GetWorkflowsForUser();
  if (!workFlows) {
    return (
    <Alert>
        <AlertCircle className="w-4 h-4"/>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong, please try again</AlertDescription>
    </Alert>)
  }
  if(workFlows.length === 0){
    return (
      <div className="flex flex-col gap-4 h-full items-center justify-center">
        <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
            <InboxIcon size={40} className="stroke-primary"/>
        </div>
        <div className="flex flex-col text-center gap-1">
            <p className="font-bold">No Workflows Found</p>
            <p className="text-sm text-muted-foreground">Click the button below to make your first workflow</p>
        </div>
        <CreateWorkflowDialog triggerText="Make your first workflow"/>
      </div>
    );
  }

  return <div className="grid grid-cols-1 gap-4">
    {workFlows.map((workflow) => (
      <WorkflowCard key={workflow.id} workflow={workflow} />
    ))}
  </div>
};

export default Page;
