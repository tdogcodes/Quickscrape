import { ExecutionEnvironment } from "@/types/executor";
import { ExtractTextFromElementTask } from "../task/extract-text-from-element";
import * as cheerio from "cheerio";

export const ExtractTextFromElementExecutor = async (
  environment: ExecutionEnvironment<typeof ExtractTextFromElementTask>
): Promise<boolean> => {
  try {
    const selector = environment.getInput("Selector");
    if (!selector) {
      environment.log.error("Selector input not defined");
      return false;
    }
    const html = environment.getInput("Html");

    if (!html) {
      environment.log.error("Html input not defined");
      return false;
    }

    const $ = cheerio.load(html);
    const element = $(selector);

    if (!element) {
      environment.log.error(`Element not found for selector: ${selector}`);
      return false;
    }

    const extractedText = $.text(element);

    if (!extractedText) {
      environment.log.error(`No text found for selector: ${selector}`);
      return false;
    }

    environment.setOutput("Extracted Text", extractedText);
    return true;
  } catch (e : any) {
    environment.log.error(`Failed to extract text from element: ${e.message}`);
    return false;
  }
};
