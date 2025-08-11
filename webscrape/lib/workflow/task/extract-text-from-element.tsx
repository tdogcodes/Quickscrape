import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { TextIcon, LucideProps } from "lucide-react";

export const ExtractTextFromElementTask = {
  type: TaskType.EXTRACT_TEXT_FROM_ELEMENT,
  label: "Extract Text from Element",
  icon: (props: LucideProps) => (
    <TextIcon {...props} className="stroke-rose-400"/>
  ),
  isEntryPoint: false,
  credits: 3,
  inputs: [
    {
        name : "Html",
        type: TaskParamType.STRING,
        required: true,
        variant: "textarea",
    },
    {
        name : "Selector",
        type: TaskParamType.STRING,
        required: true,
    },
  ] as const,
  outputs: [
    { 
        name: "Extracted Text",
        type: TaskParamType.STRING
    }, 
  ] as const,
} satisfies WorkflowTask;
