import { defineConfig } from "cypress";

const baseUrl = process.env.BASE_URL || "https://www.tangerine.ca/en/personal";

export default defineConfig({
  e2e: {
    baseUrl,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewportWidth: 1280,
    viewportHeight: 720,
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
    specPattern: "cypress/integration/**/*.spec.ts",
    supportFile: "cypress/support/index.ts",
    video: false,
    allowCypressEnv: false,
    chromeWebSecurity: false,
  },
});
