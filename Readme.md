# Tangerine Bank UI Test Automation Framework

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![CI Status](https://github.com/your-username/sloth-javascript/actions/workflows/ci.yml/badge.svg)

A professional, scalable **UI test automation framework** built with **Cypress** and **TypeScript**. Designed to validate critical customer-facing flows on the Tangerine Bank website using the **Page Object Model (POM)** design pattern.

---

## 🎯 Purpose

This repository serves as a reference implementation for modern test automation engineering, demonstrating:

- **Maintainability**: Clear separation of concerns (Test Logic vs. UI Interaction).
- **Scalability**: Structured to support hundreds of tests and multiple environments.
- **Type Safety**: Leveraging TypeScript for compile-time checks and better IDE autocompletion.
- **CI/CD Readiness**: Integrated with GitHub Actions for automated regression testing.

## 🧰 Tech Stack

| Tool | Usage |
|------|-------|
| **Cypress** | End-to-End test runner and assertion library |
| **TypeScript** | Static typing for robust and readable code |
| **Node.js** | Runtime environment |
| **GitHub Actions** | CI/CD pipeline for automated execution |

## 🏗 Architecture

The framework adheres to the **Page Object Model (POM)** to decouple test scripts from page details.

**Workflow:**
`Spec File` (Business Logic) ➡️ `Page Object` (Selectors & Actions) ➡️ `Cypress Commands` ➡️ `Browser`

### Key Benefits
1.  **Readability**: Tests read like plain English user stories.
2.  **Reusability**: UI actions are defined once and reused across multiple tests.
3.  **Resilience**: UI changes only require updates in the Page Object, not the tests.

## 📁 Project Structure

```text
sloth-javascript/
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions pipeline definition
├── cypress/
│   ├── integration/           # Test specifications (e.g., login.spec.ts)
│   ├── support/               # Global commands and configuration
│   └── tsconfig.json          # Cypress-specific TS config
├── src/
│   ├── config.ts              # Environment configuration/credentials
│   └── pages/                 # Page Object Models
│       ├── TangerineHomePage.ts
│       └── TangerineLoginPage.ts
├── cypress.config.ts          # Main Cypress configuration
├── package.json               # Dependencies and scripts
└── tsconfig.json              # Global TypeScript config
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/sloth-javascript.git
    cd sloth-javascript
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## ▶️ Running Tests

### Interactive Mode (Test Runner)
Opens the Cypress Test Runner for debugging and visual execution.
```bash
npx cypress open
```

### Headless Mode (CI Style)
Runs all tests in the terminal using the default browser.
```bash
npx cypress run
```

### Specific Options
**Run a specific spec file:**
```bash
npx cypress run --spec "cypress/integration/homepage.spec.ts"
```

**Run against a specific environment:**
```bash
BASE_URL=https://www.tangerine.ca/en/personal npx cypress run
```

## 🧩 Code Examples

### Page Object (`src/pages/TangerineHomePage.ts`)
Encapsulates selectors and actions.
```typescript
export class TangerineHomePage {
  visit() {
    cy.visit("/");
  }

  getLogo() {
    return cy.get('img[alt="Tangerine"]');
  }

  clickLogin() {
    cy.contains(/Log In|Log Me In/i).click();
  }
}
```

### Test Spec (`cypress/integration/homepage.spec.ts`)
Focuses on business logic and assertions.
```typescript
import { TangerineHomePage } from "../../src/pages/TangerineHomePage";

describe("Tangerine Homepage", () => {
  const home = new TangerineHomePage();

  it("should load the homepage and show the logo", () => {
    home.visit();
    home.getLogo().should("be.visible");
  });
});
```

## 🔄 CI/CD Pipeline

This project is configured with **GitHub Actions** to run tests automatically on:
- Push to `main` / `master` branches
- Daily schedule (Midnight UTC)
- Manual trigger (`workflow_dispatch`)

The workflow file is located at `.github/workflows/ci.yml`.

## Allure Reports Setup for Cypress + TypeScript

1. Install dependencies
npm install --save-dev @shelex/cypress-allure-plugin allure-commandline

2. Configure Cypress

In cypress.config.ts:
import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer';
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'spec, @shelex/cypress-allure-plugin',
    allureReporterOptions: {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
    },
  },
});

In cypress/support/e2e.ts:
import '@shelex/cypress-allure-plugin';

3. Run tests
npx cypress run
Results are saved in allure-results/.

4. Generate & view report
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report

5. Optional
Add labels in tests: cy.allure().feature('Feature Name')
Use VS Code extension “Allure Test Reports” to view reports in editor.

## ⚠️ Limitations & Notes

- **Bot Protection**: Banking sites often employ CAPTCHA and anti-bot measures. Some end-to-end flows (like full registration) may be restricted in a public automation environment.
- **Demo Purpose**: This repository focuses on **framework architecture** rather than 100% test coverage of the Tangerine application.

## 👤 Author

**Weipeng Zheng**
*Senior QA Automation Engineer / SDET*

Specializing in UI Automation (Cypress, Playwright, Selenium) and Test Architecture.

## 📄 License

This project is provided for demonstration and educational purposes.