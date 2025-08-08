import { ExecutionEnvironment } from "@/types/executor";
import { FillInputTask } from "../task/fill-input";

export const FillInputExecutor = async (
  environment: ExecutionEnvironment<typeof FillInputTask>
): Promise<boolean> => {
  try {
    const selector = environment.getInput("Selector");
    if (!selector) {
      environment.log.error("Selector input is required");
    }
    const value = environment.getInput("Value");
    if (!value) {
      environment.log.error("Value not defined");
    }
    await environment.getPage()!.type(selector, value);
    return true;
  } catch (e: any) {
    environment.log.error(`Failed to fill the input: ${e.message}`);
    return false;
  }
};
