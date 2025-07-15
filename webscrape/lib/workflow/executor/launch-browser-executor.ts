import WaitFor from "@/lib/helper/wait-for";
import { ExecutionEnvironment } from "@/types/executor";
import puppeteer from "puppeteer";
import { LaunchBrowserTask } from "../task/launch-browser";

export const LaunchBrowserExecutor = async (
  environment: ExecutionEnvironment<typeof LaunchBrowserTask>
): Promise<boolean> => {
  try {
    const websiteUrl = environment.getInput("Website URL");
    console.log("@@ENV WEBSITE URL:", websiteUrl);
    const browser = await puppeteer.launch({
      headless: false,
    });
    await WaitFor(3000);
    await browser.close();
    return true;
  } catch (e) {
    console.error("Error launching browser executor", e);
    return false;
  }
};
