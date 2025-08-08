import { ExecutionEnvironment } from "@/types/executor";
import { DeliverViaWebhookTask } from "@/lib/workflow/task/deliver-via-webhook";

export const DeliveryViaWebhookExecutor = async (
  environment: ExecutionEnvironment<typeof DeliverViaWebhookTask>
): Promise<boolean> => {
  try {
    const targetUrl = environment.getInput("Target URL");
    if (!targetUrl) {
      environment.log.error("Target URL is required for Deliver via Webhook task.");
    }

    const body = environment.getInput("Body");
    if (!body) {
      environment.log.error("Body is required for Deliver via Webhook task.");
    }

    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    if(!response.ok) {
      environment.log.error(`Failed to deliver via webhook. Status: ${response.status}`);
      return false
    }

    const responseBody = await response.json();
    environment.log.info(JSON.stringify(responseBody, null, 4));

    return true;
  } catch (e: any) {
    environment.log.error(`Failed to deliver via webhook: ${e.message}`);
    return false;
  }
};
