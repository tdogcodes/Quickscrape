"use client";
import { TaskParam} from "@/types/task";
import React from "react";

export const NodeOutputs = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col divide-y gap-1">{children}</div>;
};

export const NodeOutput = ({ output}: { output: TaskParam}) => {
  return <div>{output.name}</div>;
};
