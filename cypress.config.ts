import { defineConfig } from "cypress";

const baseUrl = process.env.BASE_URL || "https://www.amazon.com";

export default defineConfig({
  e2e: {
    baseUrl,
    specPattern: "cypress/integration/**/*.spec.ts",
    supportFile: "cypress/support/index.ts",
    video: false,
    allowCypressEnv: false,
  },
});
