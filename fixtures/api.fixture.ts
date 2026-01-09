import { test as base } from "@playwright/test";
import { AuthApi } from "../api/endpoints/authApi";

type MyFixtures = {
  authApi: AuthApi;
}

export const apiTest = base.extend<MyFixtures>({
  authApi: async ({}, use) => {
    const response = await AuthApi.authenticate();
    const parsedResponse = await response.json();
    const token = parsedResponse.data?.accessToken;
    process.env.TOKEN = token;

    await use(token);
  },
});

export { expect } from "@playwright/test";
