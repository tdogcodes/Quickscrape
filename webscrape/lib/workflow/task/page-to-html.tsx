import { TaskParamType, TaskType } from "@/types/task";
import { CodeIcon, LucideProps } from "lucide-react";

export const PageToHTMLTask = {
  type: TaskType.PAGE_TO_HTML,
  label: "get HTML from page",
  icon: (props: LucideProps) => (
    <CodeIcon {...props} className="stroke-rose-400"/>
  ),
  isEntryPoint: true,
  inputs: [
    {
        name : "Webpage",
        type: TaskParamType.BROWSER_INSTANCE,
        required: true,
    },
  ],
  outputs: [
    { 
        name: "HTML",
        type: TaskParamType.STRING
    }, 
    { 
        webpage: "Web page",
        type: TaskParamType.BROWSER_INSTANCE 
    },
  ],
};
