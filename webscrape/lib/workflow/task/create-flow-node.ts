import { AppNode } from "@/types/app-node";
import { TaskType } from "@/types/task";

export function CreateFlowNode(
    nodeType: TaskType,
    position?: { x: number, y: number },
) : AppNode{
    return {
        id: crypto.randomUUID(),
        type: 'FlowScrapeNode',
        dragHandle: ".drag-handle",
        position: position ?? { x: 0, y: 0 },
        data: {
            type: nodeType,
            inputs: {},
        }
    }
}