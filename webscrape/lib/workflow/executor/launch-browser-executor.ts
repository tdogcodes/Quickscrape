import { ExecutionEnvironment } from "@/types/executor";
import puppeteer from "puppeteer";
import { LaunchBrowserTask } from "../task/launch-browser";

export const LaunchBrowserExecutor = async (
  environment: ExecutionEnvironment<typeof LaunchBrowserTask>
): Promise<boolean> => {
  try {
    const websiteUrl = environment.getInput("Website URL");
    const browser = await puppeteer.launch({
      headless: false,
    });
    environment.setBrowser(browser);
    const page = await browser.newPage();
    await page.goto(websiteUrl)
    environment.setPage(page);
    return true;
  } catch (e) {
    console.error("Error launching browser executor", e);
    return false;
  }
};
