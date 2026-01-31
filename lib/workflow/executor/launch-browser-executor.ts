import { ExecutionEnvironment } from "@/types/executor";
import puppeteer, { Browser } from "puppeteer";
import puppeteerCore from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import { LaunchBrowserTask } from "../task/launch-browser";

// Check if we're running in a serverless environment (Vercel)
const isServerless = process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME;

export const LaunchBrowserExecutor = async (
  environment: ExecutionEnvironment<typeof LaunchBrowserTask>
): Promise<boolean> => {
  try {
    const websiteUrl = environment.getInput("Website URL");
    
    let browser: Browser;
    
    if (isServerless) {
      // Use @sparticuz/chromium for serverless environments (Vercel/AWS Lambda)
      environment.log.info("Using serverless Chromium");
      browser = await puppeteerCore.launch({
        args: chromium.args,
        defaultViewport: { width: 2560, height: 1440 },
        executablePath: await chromium.executablePath(),
        headless: true,
      }) as unknown as Browser;
    } else {
      // Use regular puppeteer for local development
      environment.log.info("Using local Puppeteer");
      browser = await puppeteer.launch({
        headless: true,
        args: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",
          "--disable-gpu",
          "--disable-software-rasterizer",
        ],
      });
    }
    
    environment.log.info("Browser launched successfully");
    environment.setBrowser(browser);
    const page = await browser.newPage();
    await page.setViewport({ width: 2560, height: 1440 });
    await page.goto(websiteUrl, { waitUntil: "networkidle2" });
    environment.setPage(page);
    environment.log.info(`Navigated to ${websiteUrl}`);
    return true;
  } catch (e: any) {
    environment.log.error(`Failed to launch browser: ${e.message}`);
    return false;
  }
};
