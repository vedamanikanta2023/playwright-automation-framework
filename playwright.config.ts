import { defineConfig, devices } from "@playwright/test";
import config from "./config/environment";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  timeout: config.timeout,

  reporter: [
    ["list"],
    ["html", {
      outputFolder: "playwright-reports",
      open: "never"
    }]
  ],

  globalSetup: "./utils/global-setup.ts",

  use: {
    baseURL: config.uiBaseUrl,
    headless: true,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    actionTimeout: 10000
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ],

  outputDir: "tests-results"
});
