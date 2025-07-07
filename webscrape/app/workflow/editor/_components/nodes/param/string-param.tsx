"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ParamProps } from "@/types/app-node";
import React, { useEffect, useState } from "react";

const StringParam = ({ param, value, updateNodeParamValue, disabled }: ParamProps) => {
  const id = React.useId();
  const [inputValue, setInputValue] = useState(value);
  
  useEffect(() => {
    setInputValue(value);
  },[value])

  let Component: any = Input;
   if(param.variant === "textarea") {
    Component = Textarea;
   }

  return (
    <div className="space-y-1 p-1 w-full">
      <Label className="text-xs flex flex-col" htmlFor={id}>
        <div className="flex px-1">
          {param.name}
          {param.required && <p className="text-red-400  px-2">*</p>}
        </div>
        <Component
          disabled={disabled}
          value={inputValue}
          placeholder="Enter value here"
          className="!text-xs my-1"        
          id={id}
          onChange={(e : any) => {
            const newValue = e.target.value;
            setInputValue(newValue);
            updateNodeParamValue(newValue);
          }}
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
