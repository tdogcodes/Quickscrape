export const dynamic = "force-dynamic"; 

import { getAppUrl } from "@/lib/helper/appUrl";
import prisma from "@/lib/prisma";
import { WorkflowStatus } from "@/types/workflow";

export const GET = async (req: Request) => {
  const now = new Date();
  const workflows = await prisma.workFlow.findMany({
    select: { id: true },
    where: {
      status: WorkflowStatus.PUBLISHED,
      cron: { not: null },
      nextRunAt: { lte: now },
    },
  });

  console.log(`Workflows to run: ${workflows.length}`);
  for (const workflow of workflows) {
    triggerWorkflow(workflow.id);
  }

  return Response.json({ WorkflowsToRun: workflows.length }, { status: 200 });
};

function triggerWorkflow(workflowId: string) {
  const triggerApiUrl = getAppUrl(
    `api/workflows/execute?workflowId=${workflowId}`
  );
  console.log(`Triggering workflow: ${workflowId} at ${triggerApiUrl}`);

  fetch(triggerApiUrl, {
    cache: "no-store",
    headers: {
      authorization: `Bearer ${process.env.API_SECRET}`,
    },
  }).catch((error) => {
    console.error(`Failed to trigger workflow ${workflowId}: Error: ${error}`);
  });
}
