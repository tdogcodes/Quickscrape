import { TaskType } from "@/types/task";
import { LaunchBrowserExecutor } from "./launch-browser-executor";
import { PageToHtmlExecutor } from "./page-to-html-executor";
import { ExecutionEnvironment } from "@/types/executor";
import { WorkflowTask } from "@/types/workflow";
import { ExtractTextFromElementExecutor } from "./extract-text-from-element-executor";
import { FillInputExecutor } from "./fill-input-executor";
import { ClickElementExecutor } from "./click-element-executor";
import { WaitForElementExecutor } from "./wait-for-element-executor";
import { DeliveryViaWebhookExecutor } from "./deliver-via-webhook-executor";
import { ExtractDataWithAIExecutor } from "./extract-data-with-ai-executor";
import { ReadPropertyFromJsonExecutor } from "./read-property-from-json-executor";
import { NavigateUrlExecutor } from "./navigate-task-url-executor";
import { AddPropertyToJsonExecutor } from "./add-property-to-json-executor";
import { ScrollToElementExecutor } from "./scroll-to-element-executor";

type ExecutorFunction<T extends WorkflowTask> = (
  environment: ExecutionEnvironment<T>
) => Promise<boolean>;

type RegistryType = {
  [K in TaskType]: ExecutorFunction<WorkflowTask & { type: K }>;
};

export const ExecutorRegistry: RegistryType = {
  LAUNCH_BROWSER: LaunchBrowserExecutor,
  PAGE_TO_HTML: PageToHtmlExecutor,
  EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementExecutor,
  FILL_INPUT: FillInputExecutor,
  CLICK_ELEMENT: ClickElementExecutor,
  WAIT_FOR_ELEMENT: WaitForElementExecutor,
  DELIVER_VIA_WEBHOOK: DeliveryViaWebhookExecutor, 
  EXTRACT_DATA_WITH_AI: ExtractDataWithAIExecutor,
  READ_PROPERTY_FROM_JSON: ReadPropertyFromJsonExecutor,
  NAVIGATE_URL: NavigateUrlExecutor,
  ADD_PROPERTY_TO_JSON: AddPropertyToJsonExecutor,
  SCROLL_TO_ELEMENT: ScrollToElementExecutor,
};
