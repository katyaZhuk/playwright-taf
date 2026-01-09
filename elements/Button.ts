import { Locator, Page } from "@playwright/test";
import logger from "../utils/logger";

export class Button {
  private locator: Locator;
  private name: string;

  constructor(page: Page, selector: string, name = "Button") {
    this.locator = page.locator(selector);
    this.name = name;
  }

  async click() {
    logger.info(`Clicking on: ${this.name}`);
    await this.locator.click();
  }
}
