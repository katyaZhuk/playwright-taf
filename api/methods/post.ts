import {request} from "@playwright/test";

export async function POST(endpoint: string, body: {}, headers = {}) {
  const context = await request.newContext();
  return await context.post(endpoint, {
    data: body,
    headers: {
      "Context-Type": "application/json",
      ...headers,
    },
  });
}
