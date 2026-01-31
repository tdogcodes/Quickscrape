import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { FileJson2Icon, MousePointerClickIcon } from "lucide-react";

export const ReadPropertyFromJsonTask = {
  type: TaskType.READ_PROPERTY_FROM_JSON,
  label: "Read Property From JSON",
  icon: (props) => (
    <FileJson2Icon {...props} className="stroke-emerald-400"/>
  ),
  isEntryPoint: false,
  credits: 1,
  inputs: [
    {
        name : "JSON",
        type: TaskParamType.STRING,
        required: true
    },
    {
        name : "Property Name",
        type: TaskParamType.STRING,
        required: true,
    },
  ] as const,
  outputs: [
    { 
        name: "Property Value",
        type: TaskParamType.STRING
    }, 
  ] as const,
} satisfies WorkflowTask;
