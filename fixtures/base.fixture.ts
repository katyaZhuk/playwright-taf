import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ExtendedPage } from "../shared/ExtendedPage";

type MyFixtures = {
  extPage: ExtendedPage;
};

export const test = base.extend<MyFixtures>({
  extPage: async ({ page }, use) => {
    const extPage = new ExtendedPage(page);
    const loginPage = new LoginPage(extPage);

    const email: string = process.env.USER_LOGIN || "";
    const password: string = process.env.USER_PASSWORD || "";

    await loginPage.goto();
    await loginPage.clickOnLoginButton();
    await loginPage.login(email, password);

    await loginPage.assertWelcomeMessage();

    await use(extPage);
  },
});
