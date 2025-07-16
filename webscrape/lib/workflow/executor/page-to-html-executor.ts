import { ExecutionEnvironment } from "@/types/executor";
import { PageToHTMLTask } from "../task/page-to-html";

export const PageToHtmlExecutor = async (
  environment: ExecutionEnvironment<typeof PageToHTMLTask>
): Promise<boolean> => {
  try {
    const html = await environment.getPage()!.content();
    environment.setOutput("HTML", html);
    return true;
  } catch (e :any) {
    environment.log.error(`Failed to convert page to HTML: ${e.message}`);
    return false;
  }
};
