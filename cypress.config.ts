import { defineConfig } from "cypress";
import allureWriter from '@shelex/cypress-allure-plugin/writer';
import { config } from "chai";
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
    supportFile: "cypress/support/index.ts",
    specPattern: 'cypress/e2e/**/*.ts',
    setupNodeEvents(on, config) {
      allureWriter(on, config); 
      return config;
    },
  },

  // -------------------------
  // Reporter Settings
  // -------------------------
  reporter: 'cypress-multi-reporters', // optional, if you want multiple reporters
  reporterOptions: {
    reporterEnabled: 'spec, @shelex/cypress-allure-plugin',
    allureReporterOptions: {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
    },
  }
});