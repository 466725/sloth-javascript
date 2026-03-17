# Tangerine Bank UI Test Automation Framework

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

A professional, scalable **UI test automation framework** built with **Cypress** and **TypeScript**. This project demonstrates modern test automation best practices for validating critical user-facing flows on the [Tangerine Bank](https://www.tangerine.ca/) website using the **Page Object Model (POM)** design pattern.

> **Note:** This is a demo/reference implementation showcasing framework architecture and automation strategies.

---

## 🎯 Purpose

This repository serves as a **reference implementation for enterprise-grade test automation engineering**, demonstrating:

- **Maintainability**: Clear separation of concerns (Test Logic vs. UI Interaction) using Page Object Model
- **Scalability**: Structured architecture to support multiple test streams and environments
- **Type Safety**: Leveraging TypeScript for compile-time checks, self-documenting code, and IDE autocompletion
- **Reporting**: Integrated Allure Reports for comprehensive test execution insights
- **Real-World Patterns**: Demonstrates actual patterns used in production SDET teams

## 🧰 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| **Cypress** | ^15.12.0 | End-to-End test runner with built-in debugging |
| **TypeScript** | ^5.3.0 | Static typing for robust code and better IDE support |
| **Node.js** | v14+ | JavaScript runtime environment |
| **Allure Reports** | ^2.38.0 | Comprehensive test reporting and analytics |

## 🏗️ Architecture

The framework adheres to the **Page Object Model (POM)** pattern, decoupling test logic from page UI interactions.

```
┌─────────────────────────────────────────────────────────┐
│  Test Specification (.cy.ts)                            │
│  "When user logs in, dashboard loads"                   │
└──────────────┬──────────────────────────────────────────┘
               │ (imports & uses)
               ▼
┌─────────────────────────────────────────────────────────┐
│  Page Object (TangerineLoginPage.ts)                     │
│  - CSS Selectors                                         │
│  - Action Methods (clickLogin, fillUsername, etc.)      │
└──────────────┬──────────────────────────────────────────┘
               │ (wraps)
               ▼
┌─────────────────────────────────────────────────────────┐
│  Cypress Commands (cy.click(), cy.type(), etc.)          │
└──────────────┬──────────────────────────────────────────┘
               │ (interacts with)
               ▼
┌─────────────────────────────────────────────────────────┐
│  Browser / Application Under Test                        │
└─────────────────────────────────────────────────────────┘
```

### Key Benefits of POM

1. **Readability**: Tests read like business requirements, not technical scripts
2. **Reusability**: UI interactions defined once, reused across all tests
3. **Resilience**: UI changes isolated to Page Objects—tests remain stable
4. **Maintainability**: Clear responsibility boundaries reduce test maintenance burden

## 📁 Project Structure

```text
sloth-javascript/
├── cypress/
│   ├── e2e/                           # Test specifications
│   │   ├── homepage.cy.ts             # Homepage tests
│   │   ├── login.cy.ts                # Login flow tests
│   │   └── register.cy.ts             # Registration tests
│   ├── support/                       # Global configuration
│   │   ├── commands.ts                # Custom Cypress commands
│   │   └── e2e.ts                     # Test setup/teardown
│   └── downloads/                     # Downloaded files (test artifacts)
│
├── src/
│   ├── config.ts                      # Test credentials & environment config
│   └── pages/                         # Page Object Models
│       ├── TangerineHomePage.ts       # Homepage interactions
│       ├── TangerineLoginPage.ts      # Login page interactions
│       └── TangerineRegisterPage.ts   # Registration page interactions
│
├── allure-report/                     # Generated test reports
├── cypress.config.ts                  # Cypress configuration
├── tsconfig.json                      # TypeScript configuration
├── package.json                       # Dependencies & scripts
└── README.md                          # This file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** v14 or higher ([Download](https://nodejs.org/))
- **npm** v6 or higher (comes with Node.js)
- Modern browser (Chrome/Edge/Firefox)

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/sloth-javascript.git
   cd sloth-javascript
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run tests in interactive mode:**
   ```bash
   npm run cypress:open
   ```
   This opens the Cypress Test Runner where you can:
   - Select individual test files to run
   - Watch tests execute in real-time
   - Debug with DevTools
   - View detailed failure messages

### Configuration

**Environment Variables:**
```bash
# Run tests against a specific environment
BASE_URL=https://www.tangerine.ca/en/personal npm test
```

**Test Credentials:**
Edit [src/config.ts](src/config.ts) to update test user credentials (currently set to demo values):
```typescript
export const testCredentials = {
  user: {
    clientId: "12345678",
    pin: "123456",
  },
  invalidUser: {
    clientId: "87654321", 
    pin: "654321",
  },
};
```

> ⚠️ **Security Note**: Store sensitive credentials in environment variables (`.env`), not in source code for production setups.

## ▶️ Running Tests

### Using npm Scripts (Recommended)

**Interactive Mode—open Cypress Test Runner:**
```bash
npm run cypress:open
```

**Headless Mode—run all tests in terminal:**
```bash
npm test
# or
npm run cypress:run
```

### Advanced Options

**Run specific test file:**
```bash
npx cypress run --spec "cypress/e2e/login.cy.ts"
```

**Run tests with specific grep tags:**
```bash
npx cypress run --env grep="@smoke"
```

**Run against different environments:**
```bash
BASE_URL=https://staging.tangerine.ca npm test
```

**Retry failed tests (configured to 2 retries in headless mode):**
Tests automatically retry on failure in `cypress run` mode—see [cypress.config.ts](cypress.config.ts) for retry settings.

## 💡 Code Examples

### Page Object Example: Login Page

**File:** [src/pages/TangerineLoginPage.ts](src/pages/TangerineLoginPage.ts)

Encapsulates all selectors and interactions for the login page:
```typescript
export class TangerineLoginPage {
  private clientIdInput = 'input[data-testid="clientId"]';
  private pinInput = 'input[data-testid="pin"]';
  private loginButton = 'button[type="submit"]';
  private errorMessage = '[role="alert"]';

  visit() {
    cy.visit("/login");
  }

  fillClientId(clientId: string) {
    cy.get(this.clientIdInput).type(clientId);
  }

  fillPin(pin: string) {
    cy.get(this.pinInput).type(pin);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }
}
```

### Test Spec Example: Login Flow

**File:** [cypress/e2e/login.cy.ts](cypress/e2e/login.cy.ts)

Tests business logic using the page object:
```typescript
import { TangerineLoginPage } from "../../src/pages/TangerineLoginPage";
import { testCredentials } from "../../src/config";

describe("Tangerine Login", () => {
  const login = new TangerineLoginPage();

  beforeEach(() => {
    login.visit();
  });

  it("should successfully login with valid credentials", () => {
    login.fillClientId(testCredentials.user.clientId);
    login.fillPin(testCredentials.user.pin);
    login.clickLogin();
    
    cy.url().should("include", "/dashboard");
    cy.contains("Welcome").should("be.visible");
  });

  it("should show error with invalid credentials", () => {
    login.fillClientId(testCredentials.invalidUser.clientId);
    login.fillPin(testCredentials.invalidUser.pin);
    login.clickLogin();
    
    login.getErrorMessage()
      .should("be.visible")
      .and("contain", "Invalid credentials");
  });
});
```

## 📋 Test Coverage

| Test Suite | Status | Purpose |
|-----------|--------|---------|
| [Homepage](cypress/e2e/homepage.cy.ts) | ✅ | Validates homepage loads, logo visible, navigation works |
| [Login](cypress/e2e/login.cy.ts) | ✅ | Tests valid/invalid login flows, error handling |
| [Registration](cypress/e2e/register.cy.ts) | ✅ | Validates user registration with form validation |

## 📊 Allure Test Reports

This project includes **Allure Reports** integration for comprehensive test execution analytics.

### Generating Reports

**After running tests, generate and view the Allure report:**

```bash
# Generate the report
npm run allure:generate

# Open the report in browser
npm run allure:open
```

**Or run tests and generate report in one command:**
```bash
npm test && npm run allure:generate && npm run allure:open
```

### What's Included in Reports
- 📈 Test execution timeline and trends
- ✅/❌ Pass/fail statistics and breakdown
- 🔄 Test retry information
- 📷 Screenshots and logs for failed tests
- ⏱️ Performance metrics (test duration)
- 📂 Test categorization (Behaviors, Suites, Severity)

**Report Location:** `allure-report/index.html` (generated locally after running `allure:generate`)

---

## 🔧 Troubleshooting

### Tests won't run

**Issue:** `Command not found: npx`
- **Solution:** Ensure Node.js and npm are installed: `node --version && npm --version`

**Issue:** Tests timeout or hang
- **Solution:** Check `cypress.config.ts` timeout settings (currently 10s for commands, 120s for page load)
- Try increasing values if target site is slow

### Selectors not finding elements

**Common causes:**
1. Elements changed on target website (Tangerine may update the site)
2. Dynamic content not fully loaded before assertions
3. **Solution:** Update selectors in [src/pages/](src/pages/) Page Objects, add waits if needed

### Allure report won't generate

**Issue:** `allure: command not found`
- **Solution:** Run `npm install` to install allure-commandline dependency

**Issue:** Empty report
- **Solution:** Ensure tests ran with `npm test` (not just opening in GUI). Check `allure-results/` directory exists with JSON files.

---

## 🔐 Security & Limitations

### Important Notes

⚠️ **CAPTCHA & Bot Protection**: Tangerine Bank employs anti-bot measures (CAPTCHA). Some advanced flows like registration may be restricted in automated testing.

⚠️ **Demo Purpose**: This repository focuses on **framework architecture and pattern demonstration** rather than 100% coverage of Tangerine's actual application.

⚠️ **Test Credentials**: The demo credentials in `src/config.ts` are hardcoded for reference. In production, use environment variables or secure secret management (e.g., GitHub Secrets, HashiCorp Vault).

---

## 📚 Best Practices Demonstrated

- ✅ **Page Object Model (POM)** for maintainable tests
- ✅ **TypeScript** for type-safe test code
- ✅ **Separation of Concerns** (tests vs. page interactions vs. config)
- ✅ **Retry Logic** for flaky test resilience
- ✅ **Comprehensive Reporting** with Allure
- ✅ **Custom Commands** in Cypress for reusable actions
- ✅ **Viewport Configuration** for consistent rendering

---

## 🚦 Roadmap / To-Do

- [ ] CI/CD Pipeline (GitHub Actions)
- [ ] Cross-browser testing (Firefox, Safari)
- [ ] Performance baseline testing
- [ ] Visual regression testing
- [ ] API mocking for isolated component tests

---

## 👤 Author

**Weipeng Zheng**  
*Senior QA Automation Engineer / SDET*

Specializing in UI Automation (Cypress, Playwright, Selenium), Test Architecture, and Framework Design.

**GitHub:** [https://github.com/466725]

---

## 📄 License

This project is provided for **demonstration and educational purposes only**. Feel free to use it as a reference for your own test automation frameworks.

---

## ✨ Contributing

Interested in improving this framework? Consider:
1. Adding new test cases to expand coverage
2. Implementing additional Page Objects
3. Optimizing selectors for better stability
4. Adding visual regression testing
5. Expanding Allure report customizations

Please submit pull requests with clear descriptions of changes.