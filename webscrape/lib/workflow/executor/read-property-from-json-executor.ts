import { ExecutionEnvironment } from "@/types/executor";
import { ReadPropertyFromJsonTask } from "../task/read-property-from-json";

export const ReadPropertyFromJsonExecutor = async (
  environment: ExecutionEnvironment<typeof ReadPropertyFromJsonTask>
): Promise<boolean> => {
  try {
    const jsonData = environment.getInput("JSON");
    if (!jsonData) {
      environment.log.error("No JSON input provided");
    }

    const propertyName = environment.getInput("Property Name");
    if (!propertyName) {
      environment.log.error("No property name input provided");
    }

    const json = JSON.parse(jsonData);
    const propertyValue = json[propertyName]

     if(!propertyValue){
      environment.log.error(`Property "${propertyName}" not found in JSON`);
      return false;
     }

    environment.setOutput("Property Value", propertyValue);
    return true;
  } catch (e: any) {
    environment.log.error(`Failed to read property from JSON: ${e.message}`);
    return false;
  }
};
