"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ParamProps } from "@/types/app-node";
import React from "react";

const StringParam = ({ param, value, updateNodeParamValue }: ParamProps) => {
  const id = React.useId();
  const [internalValue, setInternalValue] = React.useState<string>(value);
  return (
    <div className="space-y-1 p-1 w-full">
      <Label className="text-xs flex flex-col" htmlFor={id}>
        <div className="flex px-1">
          {param.name}
          {param.required && <p className="text-red-400  px-2">*</p>}
        </div>
        <Input
          value={internalValue}
          placeholder="Enter value here"
          className="!text-xs my-1"
          id={id}
          onChange={(e) => setInternalValue(e.target.value)}
          onBlur={(e) => updateNodeParamValue(e.target.value)}
        />
        {param.helperText && (
          <p className="text-xs text-muted-foreground px-1">
            {param.helperText}
          </p>
        )}
      </Label>
    </div>
  );
};

export default StringParam;
