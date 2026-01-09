import {request} from "@playwright/test";

export async function DELETE(endpoint: string, headers = {}) {
  const context = await request.newContext();
  return await context.delete(endpoint, {
    headers: {
      "Context-Type": "application/json",
      ...headers,
    },
  });
}
