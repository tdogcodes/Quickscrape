import { ExtractTextFromElement } from "./extract-text-from-element";
import { LaunchBrowserTask } from "./launch-browser";
import { PageToHTMLTask } from "./page-to-html";

export const TaskRegistry = {
  LAUNCH_BROWSER: LaunchBrowserTask,
  PAGE_TO_HTML: PageToHTMLTask,
  EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElement
};
