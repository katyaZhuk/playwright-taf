import {request} from "@playwright/test";

export async function GET(endpoint: string, headers = {}) {
  const context = await request.newContext();
  return await context.get(endpoint, {
    headers: {
      "Context-Type": "application/json",
      ...headers,
    },
  });
}
