import { test } from "../../fixtures/base.fixture";
import { HomePage } from "../../pages/HomePage";
import logger from "../../utils/logger";
import {apiTest} from "../../fixtures/api.fixture";

test.describe("UI Testing with Playwright", () => {
  test.beforeEach(async ({}, testInfo) => {
    logger.info(`Test ${testInfo.title} started`);
  });

  apiTest.afterEach(async ({}, testInfo) => {
    if (testInfo.status === "failed") {
      logger.error(`Test ${testInfo.title} failed`);
    } else {
      logger.info(`Test ${testInfo.title} passed`);
    }
  });

  test("Logout", async ({extPage}) => {
    const homePage = new HomePage(extPage);
    await homePage.logout();
  });
});
