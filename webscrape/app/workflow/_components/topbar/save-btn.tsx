"use client";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import React from "react";
import { useReactFlow } from "@xyflow/react";

const SaveBtn = () => {

  const { toObject } = useReactFlow();

  return (
    <Button
      variant={"outline"}
      className="flex items-center gap-2"
      onClick={() => console.log("Todo", toObject())}
    >
      <CheckIcon size={16} className="stroke-green-400" />
      Save
    </Button>
  );
};

export default SaveBtn;
