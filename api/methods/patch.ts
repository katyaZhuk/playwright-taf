import {request} from "@playwright/test";

export async function PATCH(endpoint: string, body: {}, headers = {}) {
  const context = await request.newContext();
  return await context.patch(endpoint, {
    data: {
      body
    },
    headers: {
      "Context-Type": "application/json",
      ...headers,
    },
  });
}
