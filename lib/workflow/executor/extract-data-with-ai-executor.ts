import { ExecutionEnvironment } from "@/types/executor";
import { ExtractDataWithAITask } from "../task/extract-data-with-ai";
import prisma from "@/lib/prisma";
import { symmetricDecrypt } from "@/lib/encryption";
import { OpenAI } from "openai";

export const ExtractDataWithAIExecutor = async (
  environment: ExecutionEnvironment<typeof ExtractDataWithAITask>
): Promise<boolean> => {
  try {
    const credentials = environment.getInput("Credentials");

    let plainCredentialValue: string | undefined;

    const prompt = environment.getInput("Prompt");
    if (!prompt) {
      environment.log.error("Prompt input is required");
      return false;
    }

    const content = environment.getInput("Content");
    if (!content) {
      environment.log.error("Content input is required");
      return false;
    }

    // Try to get credential from database if provided
    if (credentials) {
      const credential = await prisma.credential.findUnique({
        where: {
          id: credentials,
        },
      });

      if (credential && credential.value !== null) {
        plainCredentialValue = symmetricDecrypt(credential.value);
        if (!plainCredentialValue) {
          environment.log.error("Decrypted credential value is invalid");
        }
      }
    }

    // Fallback to environment variable if no valid credential
    if (!plainCredentialValue) {
      plainCredentialValue = process.env.OPENAI_API_KEY;
      if (plainCredentialValue) {
        environment.log.info("Using Gemini API key from environment variable");
      } else {
        environment.log.error(
          "No valid credential found and OPENAI_API_KEY is not set"
        );
        return false;
      }
    }

    const gemini = new OpenAI({
      apiKey: plainCredentialValue,
      baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
    });

    const response = await gemini.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        {
          role: "system",
          content: `You are a webscraper helper that extracts data from HTML or text. 
            You will be given a piece of text or HTML content as input and also
            the prompt with the data you have to extract. The response should
            always be only the extracted data as a JSON array or object, without
            any additional words or explanations. Analyze the input carefully and
            extract data precisely based on the prompt. If no data is found, return
            an empty JSON array. Work only with the provided content and ensure
            the output is always a valid JSON array without any surrounding text`,
        },
        {
          role: "user",
          content: content,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 1,
    });

    environment.log.info(
      `Prompt tokens used: ${JSON.stringify(response.usage?.prompt_tokens)}`
    );

    environment.log.info(
      `Completition tokens used: ${JSON.stringify(
        response.usage?.completion_tokens
      )}`
    );

    let result = response.choices[0].message?.content;

    if (!result) {
      environment.log.error("Empty response from AI");
      return false;
    }

    result = result.replace(/```json\s*|\s*```/g, "").trim();
    let parsedResult
    try {
      parsedResult = JSON.parse(result);
    } catch (error) {
      environment.log.error(`Failed to parse AI response as JSON: ${error}`);
      environment.log.info(`Raw AI output: ${result}`);
      return false;
    }
    environment.setOutput("Extracted Data", result);
    return true;
  } catch (e: any) {
    // Provide more helpful error messages based on error type
    if (e.status === 400) {
      environment.log.error(
        `AI API request failed (400 Bad Request): Invalid API key or request format. Please check your Gemini API credentials.`
      );
    } else if (e.status === 401) {
      environment.log.error(
        `AI API authentication failed (401): Invalid or expired API key. Please update your credentials.`
      );
    } else if (e.status === 429) {
      environment.log.error(
        `AI API rate limit exceeded (429): Too many requests. Please try again later.`
      );
    } else {
      environment.log.error(`Failed to extract data with AI: ${e.message}`);
    }
    return false;
  }
};
