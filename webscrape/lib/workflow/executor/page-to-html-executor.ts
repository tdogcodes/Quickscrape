import { ExecutionEnvironment } from "@/types/executor";
import { PageToHTMLTask } from "../task/page-to-html";

export const PageToHtmlExecutor = async (
  environment: ExecutionEnvironment<typeof PageToHTMLTask>
): Promise<boolean> => {
  try {
    const websiteUrl = environment.getInput("Webpage");
    console.log("@@ENV WEBSITE URL:", websiteUrl);
    return true;
  } catch (e) {
    console.error("Error launching browser executor", e);
    return false;
  }
};
