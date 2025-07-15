import { ExecutionEnvironment } from "@/types/executor";
import { PageToHTMLTask } from "../task/page-to-html";

export const PageToHtmlExecutor = async (
  environment: ExecutionEnvironment<typeof PageToHTMLTask>
): Promise<boolean> => {
  try {
    const html = await environment.getPage()!.content();
    environment.setOutput("HTML", html);
    return true;
  } catch (e) {
    console.error("Error launching browser executor", e);
    return false;
  }
};
