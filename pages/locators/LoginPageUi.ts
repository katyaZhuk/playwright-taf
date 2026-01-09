import { Page } from "@playwright/test";
import { Input } from "../../elements/Input";
import { Button } from "../../elements/Button";

export class LoginPageUi {
  loginButton: Button;
  emailInput: Input;
  passwordInput: Input;
  signInButton: Button;
  flashMessage: string;

  constructor(page: Page) {
    this.loginButton = new Button(
      page,
      "button[data-testid='login-button'",
      "Login button"
    );
    this.emailInput = new Input(page, "#email", "Email address");
    this.passwordInput = new Input(page, "#password", "Password");
    this.signInButton = new Button(
      page,
      "button[data-testid='sign-in-button'",
      "Sign In button"
    );
    this.flashMessage = 'div[role="alert"]';
  };

}
