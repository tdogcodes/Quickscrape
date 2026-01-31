import { createContext, ReactNode, useState } from "react";
import { AppNodeMissingInputs } from "@/types/app-node";
import { Dispatch, SetStateAction } from "react";

type FlowValidationContextType = {
  invalidInputs: AppNodeMissingInputs[];
  setInvalidInputs: Dispatch<SetStateAction<AppNodeMissingInputs[]>>;
  clearErrors: () => void;
};

export const FlowValidationContext =
  createContext<FlowValidationContextType | null>(null);

export const FlowValidationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [invalidInputs, setInvalidInputs] = useState<AppNodeMissingInputs[]>(
    []
  );

  const clearErrors = ()  => {
    setInvalidInputs([]);
  }

  return (
  <FlowValidationContext.Provider value={{ invalidInputs, setInvalidInputs, clearErrors }}>
    {children}
  </FlowValidationContext.Provider>
  )
};
