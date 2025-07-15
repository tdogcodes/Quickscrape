import { ExecutionEnvironment } from "@/types/executor";
import { ExtractTextFromElementTask } from "../task/extract-text-from-element";

export const ExtractTextFromElementExecutor = async (
  environment: ExecutionEnvironment<typeof ExtractTextFromElementTask>
): Promise<boolean> => {
  try {
    const websiteUrl = environment.getInput("Html");
    console.log("@@ENV WEBSITE URL:", websiteUrl);
    return true;
  } catch (e) {
    console.error("Error launching browser executor", e);
    return false;
  }
};
