import { GetWorkflowsForUser } from "@/actions/workflows/getWorkflowsForUser";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Workflows</h1>
          <p className="text-muted-foreground">Manage your Workflows</p>
        </div>
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
        <AlertDescription></AlertDescription>
    </Alert>);
  }

  return <div className=""></div>;
};

export default Page;
