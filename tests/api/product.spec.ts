import { apiTest, expect } from "../../fixtures/api.fixture";
import { ProductApi } from "../../api/endpoints/productApi";
import productTestData from "./test-data/productTestData.json";
import logger from "../../utils/logger";

apiTest.describe("API Testing with Playwright", () => {
  apiTest.beforeEach(async ({}, testInfo) => {
    logger.info(`Test ${testInfo.title} started`);
  });

  apiTest.afterEach(async ({}, testInfo) => {
    if (testInfo.status === "failed") {
      logger.error(`Test ${testInfo.title} failed`);
    } else {
      logger.info(`Test ${testInfo.title} passed`);
    }
  });

  apiTest("Get product count", async () => {
    const response = await ProductApi.getProductsCount();
    expect(
      response.status(),
      `Get products count failed with status ${response.status()} instead of 200`
    ).toBe(200);

    const body = await response.json();
    expect(
      body,
      `The count of products is not as expected: ${JSON.stringify(body, null, 2)}`,
    ).toHaveProperty("data.count", 21);
  });

  apiTest("Add item to basket", async ({ authApi }) => {
    const response = await ProductApi.addProductToBasket({
      ...productTestData.product,
      productId: "0c22e877-6dac-4ad3-a1d1-4a656830e298_2023021317162804",
      userId: "54836545-aeae-4d8f-af3d-4dd6fe630bc4"
    });

    expect(
      response.status(),
      `Add product to basket failed with status ${response.status()} instead of 200`
    ).toBe(200);

    const body = await response.json();

    expect(
      body,
      `The response body is not as expected ${JSON.stringify(body, null, 2)}`
    ).toHaveProperty("data",null);
  });
});
