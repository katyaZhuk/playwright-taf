import { Locator, Page } from "@playwright/test";
import logger from "../utils/logger";

export class Input {
  private locator: Locator;
  private name: string;

  constructor(page: Page, selector: string, name = "Input") {
    this.locator = page.locator(selector);
    this.name = name;
  }

  async fill(value: string) {
    logger.info(`Filling ${this.name} with ${value}`);
    await this.locator.fill(value);
  }
}
