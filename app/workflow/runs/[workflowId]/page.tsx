import React, { Suspense } from "react";
import Topbar from "../../editor/_components/topbar/topbar";
import { GetWorkflowExecutions } from "@/actions/workflows/get-workflow-executions";
import { InboxIcon, Loader2Icon } from "lucide-react";
import ExecutionTable from "./_components/executions-table";

const ExecutionPage = ({ params }: { params: { workflowId: string } }) => {
  return (
    <div className="h-full w-full overflow-auto">
      <Topbar
        title="All Workflow Runs"
        workflowId={params.workflowId}
        subtitle={`${params.workflowId}`}
        hideButtons
      />
      <Suspense
        fallback={
          <div className="w-full h-screen mx-auto">
            <Loader2Icon
              size={30}
              className="mx-auto stroke-primary h-screen animate-spin"
            />
          </div>
        }
      >
        <ExecutionsTableWrapper workflowId={params.workflowId} />
      </Suspense>
    </div>
  );
};

const ExecutionsTableWrapper = async ({
  workflowId,
}: {
  workflowId: string;
}) => {
  const executions = await GetWorkflowExecutions(workflowId);

  return executions.length > 0 ? (
    <div className="container py-6 w-full">
      <ExecutionTable workflowId={workflowId} initialData={executions} />
    </div>
  ) : (
    <div className="container w-full py-6">
      <div className="flex items-center flex-col w-full h-full">
        <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <InboxIcon size={40} className="stroke-primary" />
        </div>
        <div className="flex flex-col gap-1 text-center">
          <p className="font-bold">This workflow has no runs</p>
          <p className="text-muted-foreground text-sm ">
            You can trigger a new run in the Editor page
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExecutionPage;
