import { defineConfig } from "@playwright/test";

const baseURL = process.env.BASE_URL || "https://www.tangerine.ca/en/personal";

export default defineConfig({
  testDir: "./playwright/tests",
  testMatch: "**/*.spec.ts",
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL,
    trace: "on-first-retry"
  }
});
