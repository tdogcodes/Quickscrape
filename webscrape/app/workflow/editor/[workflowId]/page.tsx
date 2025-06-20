import NotFound from "@/app/not-found";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import Editor from "../../_components/editor";

const Page = async ({ params }: { params: { workflowId: string } }) => {
  const { workflowId } = params;
  const { userId } = auth();

  if (!userId || !workflowId) {
    return <NotFound />;
  }

  const workflow = await prisma.workFlow.findUnique({
    where: {
      id: workflowId,
      userId,
    },
  });

  if (!workflow) {
    return <NotFound />;
  }

  return <Editor workflow={workflow} />;
};

export default Page;
