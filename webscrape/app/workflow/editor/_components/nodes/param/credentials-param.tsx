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
import { useQuery } from "@tanstack/react-query";
import { GetCredentialsForUser } from "@/actions/credentials/get-credentials-for-user";

const CredentialsParam = ({ param, updateNodeParamValue, value }: ParamProps) => {
  const id = useId();
  const query = useQuery({
    queryKey: ["credentials-for-user"],
    queryFn: () => GetCredentialsForUser(),
    refetchInterval: 10000,
  })
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
            <SelectLabel>Credentials</SelectLabel>
            {query.data?.map((credential) => (
              <SelectItem key={credential.id} value={credential.id}>
                {credential.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CredentialsParam;
