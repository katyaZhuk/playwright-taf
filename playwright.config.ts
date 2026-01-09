import { defineConfig, devices } from "playwright/test";
import "dotenv/config";

export default defineConfig({
  outputDir: "./playwright-results",
  fullyParallel: true,
  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    launchOptions: {
      args: ["--incognito"]
    }
  },
  reporter: [
    ["html", { outputFolder: "playwright-report", open: "never" }],
    ["list"],
  ],
  testDir: "./tests",
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
