# Tangerine Bank UI Test Automation Framework

[![CI](https://github.com/466725/sloth-javascript/actions/workflows/ci.yml/badge.svg)](https://github.com/466725/sloth-javascript/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

UI test automation project for https://www.tangerine.ca/ using TypeScript. The primary runner is Cypress with Page Object Model classes and Allure reporting. The repository also includes Playwright specs and a separate SQLite query utility package.

## What Is In This Repository

- Cypress end-to-end tests for homepage, login, and registration flows.
- POM classes in `src/cypress_tests` used by Cypress tests.
- Allure integration for local reports and CI artifacts.
- Playwright specs in `src/playwright_tests`.
- A standalone `queries` package for SQLite-related utilities.

## Tech Stack

- Node.js 18+
- npm 9+
- TypeScript 5
- Cypress 15
- Playwright Test 1.61
- Allure via `@shelex/cypress-allure-plugin` and `allure-commandline`

## Project Structure

```text
sloth-javascript/
|-- cypress/
|   |-- e2e/
|   |-- support/
|   |-- downloads/
|   |-- screenshots/
|   |-- allure-results/   # generated test result files
|   `-- allure-report/    # generated report output
|-- src/
|   |-- config.ts
|   |-- cypress_tests/
|   `-- playwright_tests/
|-- queries/              # separate package with its own package.json
|-- cypress.config.ts
|-- tsconfig.json
|-- package.json
`-- Readme.md
```

## Setup

Install root dependencies:

```bash
npm install
```

## Configuration

### Base URL

Tests use `BASE_URL` when provided; otherwise they default to:

`https://www.tangerine.ca/en/personal`

PowerShell:

```powershell
$env:BASE_URL="https://www.tangerine.ca/en/personal"
npm test
```

bash:

```bash
BASE_URL="https://www.tangerine.ca/en/personal" npm test
```

### Test Credentials

Sample credentials are defined in `src/config.ts` as:

- `testCredentials.user`
- `testCredentials.invalidUser`

Do not use real secrets in source code for production-like environments.

## Running Cypress Tests

### NPM Scripts (root package)

- `npm run cypress:open` - open Cypress app.
- `npm run cypress:run` - run all Cypress specs headlessly.
- `npm test` - alias for `npm run cypress:run`.
- `npm run allure:generate` - build Allure report from `cypress/allure-results`.
- `npm run allure:open` - open generated report.

### Common Cypress Commands

```bash
# Run all Cypress tests
npm test

# Open Cypress UI
npm run cypress:open

# Run a single spec
npx cypress run --spec "cypress/e2e/login.cy.ts"
```

## Running And Debugging Playwright Specs

Playwright is installed in the root dev dependencies. There are currently no dedicated root npm scripts for Playwright, so run it directly with `npx`.

If Playwright browsers are not installed yet:

```bash
npx playwright install
```

Run all Playwright specs in this project:

```bash
npx playwright test src/playwright_tests/*.spec.ts
```

Run one Playwright spec:

```bash
npx playwright test src/playwright_tests/login.spec.ts
```

Debug one TypeScript Playwright spec in Inspector (slow-motion step-through):

```powershell
$env:PWDEBUG="1"; npx playwright test src/playwright_tests/login.spec.ts
```

Debug all TypeScript Playwright specs:

```powershell
$env:PWDEBUG="1"; npx playwright test src/playwright_tests/*.spec.ts
```

## Current Test Coverage

### Cypress

- `cypress/e2e/homepage.cy.ts`
  - homepage/logo visibility
  - app download links visibility
  - hover behavior for Save menu
  - analytics request capture check
- `cypress/e2e/login.cy.ts`
  - login flow entry and login input interaction
- `cypress/e2e/register.cy.ts`
  - visible Sign Up or Become a Client link check

### Playwright

Equivalent checks exist in:

- `src/playwright_tests/homepage.spec.ts`
- `src/playwright_tests/login.spec.ts`
- `src/playwright_tests/register.spec.ts`

## Allure Reporting

After running Cypress tests:

```bash
npm run allure:generate
npm run allure:open
```

Paths used by this project:

- Results: `cypress/allure-results`
- Report: `cypress/allure-report`

## CI Pipeline

GitHub Actions workflow: `.github/workflows/ci.yml`

Current pipeline behavior:

- Triggers on push, pull request, schedule, and manual dispatch.
- Runs on Ubuntu with Node.js 20.
- Executes Cypress tests on Chrome.
- Generates Allure report.
- Uploads Allure results and report artifacts.
- Uploads Cypress screenshots when failures occur.

## Queries Subproject

The `queries` folder is a standalone package with its own dependencies and scripts.

Install dependencies for that package:

```bash
npm --prefix queries install
```

Run its SDK entry:

```bash
npm --prefix queries run sdk
```

Run its setup script:

```bash
npm --prefix queries run setup
```

## Contributing And Policies

- Contribution guide: `CONTRIBUTING.md`
- Code of conduct: `CODE_OF_CONDUCT.md`
- Security policy: `SECURITY.md`
- Changelog: `CHANGELOG.md`

## License

MIT. See `LICENSE`.
