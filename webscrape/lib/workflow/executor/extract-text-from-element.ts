import { ExecutionEnvironment } from "@/types/executor";
import { ExtractTextFromElementTask } from "../task/extract-text-from-element";
import * as cheerio from "cheerio";

export const ExtractTextFromElementExecutor = async (
  environment: ExecutionEnvironment<typeof ExtractTextFromElementTask>
): Promise<boolean> => {
  try {
    const selector = environment.getInput("Selector");
    if (!selector) {
      console.error("Selector input is required");
      return false;
    }
    const html = environment.getInput("Html");

    if (!html) {
      console.error("Html was not provided");
      return false;
    }

    const $ = cheerio.load(html);
    const element = $(selector);

    if (!element) {
      console.error(`No element found for selector: ${selector}`);
      return false;
    }

    const extractedText = $.text(element);

    if (!extractedText) {
      console.error(`No text found for selector: ${selector}`);
      return false;
    }

    environment.setOutput("Extracted Text", extractedText);
    return true;
  } catch (e) {
    console.error("Error launching browser executor", e);
    return false;
  }
};
