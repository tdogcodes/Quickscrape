import { Browser } from "puppeteer";
import { WorkflowTask } from "./workflow";

export type Environment = {
    // phases with nodeId/taskId as key
    browser?: Browser; // Puppeteer browser instance
    phases : Record<string, 
        {
            inputs: Record<string, any>;
            outputs: Record<string, any>;
        }
    >
};

export type ExecutionEnvironment<T extends WorkflowTask> = {
    getInput(name: T["inputs"][number]["name"]):  string;
    getBrowser(): Browser | null;
    setBrowser(browser: Browser): void;
}