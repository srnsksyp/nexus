// POST localhost:3000/api/demo/blocking
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST() {
  const response = await generateText({
    model: openai("gpt-4.1-mini"),
    prompt: "Write a vegetarian lasagna recipe for 4 people.",
    experimental_telemetry: {
      isEnabled: true,
      recordInputs: true,
      recordOutputs: true,
    },
  });

  return Response.json({ response });
}
