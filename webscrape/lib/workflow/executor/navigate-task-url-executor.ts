import { ExecutionEnvironment } from "@/types/executor";
import { NavigateUrlTask } from "../task/navigate-task-url";

export async function NavigateUrlExecutor(
  enviornment: ExecutionEnvironment<typeof NavigateUrlTask>
): Promise<boolean> {
  try {
    const url = enviornment.getInput("Url");
    if (!url) {
      enviornment.log.error("input -> Url is not defined");
      return false;
    }

    await enviornment.getPage()!.goto(url);
    enviornment.log.info(`Visited ${url}`);

    return true;
  } catch (error: any) {
    enviornment.log.error(error.message);
    return false;
  }
}