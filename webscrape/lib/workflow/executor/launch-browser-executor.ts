import { ExecutionEnvironment } from "@/types/executor";
import puppeteer from "puppeteer";
import { LaunchBrowserTask } from "../task/launch-browser";
import { exec } from "child_process";
import WaitFor from "@/lib/helper/wait-for";

const BROWSER_WS = "http://brd-customer-hl_59b3a552-zone-quickscrape-brd_mobile-desktop:k45te1fmynqr@brd.superproxy.io:33335"

const openDevtools = async (page : any, client : any) => {  
    // get current frameId  
    const frameId = page.mainFrame()._id;  
    // get URL for devtools from Browser API  
    const { url: inspectUrl } = await client.send('Page.inspect', { frameId });  
    // open devtools URL in local chrome  
    exec(`start chrome "${inspectUrl}"`, (error) => {  
        if (error)  
            throw new Error('Unable to open devtools: ' + error);  
    });  
    // wait for devtools ui to load  
    await WaitFor(5000);  
};  

export const LaunchBrowserExecutor = async (
  environment: ExecutionEnvironment<typeof LaunchBrowserTask>
): Promise<boolean> => {
  try {
    const websiteUrl = environment.getInput("Website URL");
    const browser = await puppeteer.launch({
      browserURL: BROWSER_WS,
    });
    environment.log.info("Browser launched successfully");
    environment.setBrowser(browser);
    const page = await browser.newPage();
    page.setViewport({ width: 2560, height: 1440 });
    const client = await page.createCDPSession();
    await page.goto(websiteUrl);
    environment.setPage(page);
    environment.log.info(`Navigated to ${websiteUrl}`);
    return true;
  } catch (e: any) {
    environment.log.error(`Failed to launch browser: ${e.message}`);
    return false;
  }
};
