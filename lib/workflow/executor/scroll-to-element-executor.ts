import { ExecutionEnvironment } from "@/types/executor";
import { ScrollToElementTask } from "../task/scroll-to-element";


export async function ScrollToElementExecutor(
  enviornment: ExecutionEnvironment<typeof ScrollToElementTask>
): Promise<boolean> {
  try {
    const selector = enviornment.getInput("Selector");
    if (!selector) {
      enviornment.log.error("input -> selector is not defined");
      return false;
    }

    await enviornment.getPage()!.evaluate((eleSelector) => {
      const element = document.querySelector(eleSelector);
      if (!element) {
        throw new Error("Element not found");
      }
      const eleScroll = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: eleScroll });
    }, selector);

    return true;
  } catch (error: any) {
    enviornment.log.error(error.message);
    return false;
  }
}