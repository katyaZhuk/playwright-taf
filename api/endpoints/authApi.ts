import { POST } from "../methods/post";
import { env } from "../../utils/env";

export class AuthApi {
  static async authenticate() {
    return POST(`${env.authUrl}/auth/createTokenByUser`, {
      email: process.env.USER_LOGIN,
      password: process.env.USER_PASSWORD,
    });
  }
}
