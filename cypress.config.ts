import { defineConfig } from "cypress";
const baseUrl = process.env.BASE_URL || "https://www.tangerine.ca/en/personal";
export default defineConfig({
  // -------------------------
  // Global Cypress Settings
  // -------------------------
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 120000,
  chromeWebSecurity: false,
  video: false,

  // Retry failed tests (useful for CI)
  retries: {
    runMode: 2,   // retries when running `cypress run`
    openMode: 0   // retries when running `cypress open`
  },

  // -------------------------
  // Environment Variables
  // -------------------------
  env: {
    environment: "prod"
  },

  // -------------------------
  // End-to-End Test Settings
  // -------------------------
  e2e: {
    baseUrl,
    specPattern: "cypress/integration/**/*.spec.ts",
    supportFile: "cypress/support/index.ts",
    setupNodeEvents(on, config) {
      // Node event listeners can be implemented here
      // Example: reporting plugins, logging, etc.
      return config;
    }
  }
});