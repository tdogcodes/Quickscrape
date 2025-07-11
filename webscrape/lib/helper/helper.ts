import { intervalToDuration } from "date-fns";
import { AppNode } from "@/types/app-node";
import { TaskRegistry } from "../workflow/task/registry";

export function DatesToDurationString(
  end: Date | null | undefined,
  start: Date | null | undefined
) {
  if (!start || !end) return null;

  const timeElapsed = end.getTime() - start.getTime();
  if (timeElapsed < 1000) {
    return `${timeElapsed} ms`;
  }

  // intervalToDuration does not account for values under one second
  const duration = intervalToDuration({
    start: 0,
    end: timeElapsed,
  });

  return `${duration.hours || 0}h ${duration.minutes || 0}m ${
    duration.seconds || 0
  }s`;
}

export function CalculateWorkflowCost(nodes: AppNode[]) {
  return nodes.reduce((acc, node) => {
    return acc + TaskRegistry[node.data.type].credits;
  }, 0);
}

export function GetAppUrl(path: string): string {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;

  return `${appUrl}/${path}`;
}