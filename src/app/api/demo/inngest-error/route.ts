import { inngest } from "@/inngest/client";

export async function POST() {
  await inngest.send({ name: "demo/error", data: {} });

  return Response.json({
    status: "Started background job that will throw an error",
  });
}
