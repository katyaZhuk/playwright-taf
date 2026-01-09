import {request} from "@playwright/test";

export async function PUT(endpoint: string, body: {}, headers = {}) {
  const context = await request.newContext();
  return await context.put(endpoint, {
    data: {
      body
    },
    headers: {
      "Context-Type": "application/json",
      ...headers,
    },
  });
}
