import * as dotenv from "dotenv";
const path = require("node:path");

const envFile = path.resolve(
  process.cwd(),
  `.env.${process.env.ENV || "local"}`,
);
dotenv.config({ path: envFile });

export const env = {
  environment: process.env.ENV || "local",
  uiBaseUrl: process.env.UI_BASE_URL || "http://localhost:3000",
  baseUrl: process.env.BASE_URL || "http://localhost:5000",
  authUrl: process.env.AUTH_URL || "http://localhost:5002",
};

export const getToken = () => process.env.TOKEN || "";
