import { ExecutionEnvironment } from "@/types/executor";
import { ClickElementTask } from "../task/click-element";

export const ClickElementExecutor = async (
  environment: ExecutionEnvironment<typeof ClickElementTask>
): Promise<boolean> => {
  try {
    const selector = environment.getInput("Selector");
  if (!selector) {
      environment.log.error("Selector input is required");
    }
    await environment.getPage()!.click(selector);
    return true;
  } catch (e: any) {
    environment.log.error(`Failed to click the element: ${e.message}`);
    return false;
  }
};
