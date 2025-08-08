"use client";
import { ParamProps } from "@/types/app-node";
import React, { useId } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type OptionType = {
  label: string;
  value: string;
};

const SelectParam = ({ param, updateNodeParamValue, value }: ParamProps) => {
  const id = useId();
  return (
    <div className="flex flex-col gap-1 w-full">
      <Label htmlFor={id} className="text-sm flex font-medium">
        {param.name}
        {param.required && <p className="text-primary px-2">*</p>}
      </Label>
      <Select
        onValueChange={(value) => 
          updateNodeParamValue(value)
        }
        defaultValue={value}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Options</SelectLabel>
            {param.options.map((option: OptionType) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectParam;
