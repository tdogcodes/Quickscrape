import { Node } from "reactflow";
import { TaskType } from "./task";

export interface AppNodeData {
    type: TaskType;
    inputs: Record<string, string>;
    [keys: string]: any;
}

export interface AppNode extends Node{
    data: AppNodeData;
}