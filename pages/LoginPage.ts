import { ExtendedPage } from "../shared/ExtendedPage";
import { LoginPageUi } from "./locators/LoginPageUi";
import { env } from "../utils/env";

export class LoginPage {
  private page: ExtendedPage;
  private loginUi: LoginPageUi;

  constructor(page: ExtendedPage) {
    this.page = page;
    this.loginUi = new LoginPageUi(page.page);
  }

  async goto(){
    await this.page.page.goto(env.uiBaseUrl);
  }

  async clickOnLoginButton(){
    await this.loginUi.loginButton.click();
  }

  async login(email: string, password: string) {
    await this.loginUi.emailInput.fill(email);
    await this.loginUi.passwordInput.fill(password);
    await this.loginUi.signInButton.click();
  }

  async assertWelcomeMessage(){
    await this.page.expectVisible(this.loginUi.flashMessage);
  }
}
