import { ExecutionEnvironment } from "@/types/executor";
import { WaitForElementTask } from "../task/wait-for-element";

export const WaitForElementExecutor = async (
  environment: ExecutionEnvironment<typeof WaitForElementTask>
): Promise<boolean> => {
  try {
    const selector = environment.getInput("Selector");
    if (!selector) {
      environment.log.error("Selector input is required");
    }

    const visibility = environment.getInput("Visibility");
    if (!visibility) {
      environment.log.error("Selector input is required");
    }

    await environment.getPage()!.waitForSelector(selector, {
      visible: visibility === "visible",
      hidden: visibility === "hidden",
    });

    environment.log.info(`Element ${selector} became: ${selector}`);
    return true;
  } catch (e: any) {
    environment.log.error(
      `The page doesn't seem to have that element: ${e.message}`
    );
    return false;
  }
};