import { TaskType } from "@/types/task";
import { GlobeIcon, LucideProps } from "lucide-react";

export const LaunchBrowserTask = {
    type: TaskType.LAUNCH_BROWSER,
    label: "Launch Browser",
    icon: (props : LucideProps) => <GlobeIcon {...props} className="stroke-pink-400" />,
    isEntryPoint: true,
}