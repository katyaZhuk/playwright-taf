import { ExtendedPage } from "../shared/ExtendedPage";
import { HomePageUi } from "./locators/HomePageUi";

export class HomePage {
  private homeUi: HomePageUi;

  constructor(page: ExtendedPage) {
    this.homeUi = new HomePageUi(page.page);
  }

  async logout(){
    await this.homeUi.logoutButton.click();
  }
}
