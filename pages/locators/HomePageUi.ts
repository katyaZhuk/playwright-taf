import { Page } from "@playwright/test";
import { Button } from "../../elements/Button";

export class HomePageUi {
  logoutButton: Button;

  constructor(page: Page) {
    this.logoutButton = new Button(
      page,
      'button[data-testid="logout-button"]',
      "Logout Button",
    );
  }
}
