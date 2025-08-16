import GetWorkflowExecutionWithPhases from "@/actions/workflows/get-workflow-execution-with-phases";
import Topbar from "@/app/workflow/editor/_components/topbar/topbar";
import { Loader } from "lucide-react";
import { Suspense } from "react";
import ExecutionViewer from "./_components/execution-viewer";

export default function ExecutionViewerPage({
  params,
}: {
  params: {
    workflowId: string;
    executionId: string;
  };
}) {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <Topbar
        workflowId={params.workflowId}
        title="Workflow Run Details"
        subtitle={`Run Id: ${params.executionId}`}
        hideButtons
      />
      <section className="flex h-screen overflow-auto">
        <Suspense
          fallback={
            <div className="w-full flex items-center justify-center">
              <Loader className="w-10 h-10 animate-spin text-muted-foreground" />
            </div>
          }
        >
          <ExecutionViewerWrapper executionId={params.executionId} />
        </Suspense>
      </section>
    </div>
  );
}

const ExecutionViewerWrapper = async ({
  executionId,
}: {
  executionId: string;
}) => {
  const workflowExecution = await GetWorkflowExecutionWithPhases(executionId);

  if (!workflowExecution) {
    return (
      <div className="w-full flex items-center justify-center">
        Execution not found
      </div>
    );
  }

  return <ExecutionViewer initialData={workflowExecution} />;
};
