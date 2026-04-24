import { generateText } from "ai";
import { inngest } from "./client";
import { openai } from "@ai-sdk/openai";

export const demoGenerate = inngest.createFunction(
  { id: "demo-generate" },
  { event: "demo/generate" },
  async ({ step }) => {
    await step.run("generate-text", async () => {
      return await generateText({
        model: openai("gpt-5"),
        prompt: "Write a vegetarian lasagna recipe for 4 people.",
      });
    });
  },
);
