Tangerine Bank UI Test Automation Framework

Cypress + TypeScript | Page Object Model | CI/CD Ready

A maintainable, scalable UI test automation framework built using Cypress and TypeScript to validate key customer-facing pages of the Tangerine Bank website.

This project demonstrates modern test automation architecture and engineering practices used in real-world QA environments.

🎯 Purpose

This project was created to demonstrate how to design and implement a production-quality UI automation framework with the following goals:

• Maintainable test architecture
• Clear separation between test logic and UI interactions
• Environment configuration support
• Reusable components and commands
• CI/CD pipeline compatibility

The framework validates several public Tangerine pages including:

Homepage

Sign-in page

Registration page

The focus of this repository is framework design and test engineering practices, rather than full application coverage.

🧰 Technology Stack
Tool	Purpose
Cypress	End-to-end browser automation
TypeScript	Type safety and maintainable code
Node.js	Runtime environment
npm	Dependency management
Page Object Model	Maintainable UI abstraction

Optional integrations supported:

CI/CD pipelines

Test reporting tools

Parallel execution

🏗 Framework Architecture

The framework follows several industry-standard automation design principles.

Page Object Model (POM)

UI interactions are encapsulated in page objects, separating test intent from UI implementation.

Benefits:

Reduced code duplication

Easier maintenance

Clear test readability

Example test flow:

Test Spec → Page Object → Cypress Commands → Browser
Separation of Responsibilities
Layer	Responsibility
Test Specs	Define behavior and assertions
Page Objects	Encapsulate UI interactions
Custom Commands	Provide reusable actions
Config Layer	Environment configuration
Environment Flexibility

The framework supports multiple environments via environment variables.

Example:

BASE_URL=https://www.tangerine.ca/en/personal

Tests can run against:

Production

Staging

QA environments

without code changes.

📁 Project Structure
├─ cypress.config.ts          # Cypress configuration
├─ package.json               # dependencies + scripts
├─ tsconfig.json              # TypeScript configuration
│
├─ cypress/
│  ├─ integration/            # test specifications
│  │  ├─ homepage.spec.ts
│  │  ├─ login.spec.ts
│  │  └─ register.spec.ts
│  │
│  └─ support/
│     ├─ index.ts             # global setup
│     └─ commands.ts          # custom Cypress commands
│
└─ src/
   ├─ config.ts               # environment helpers
   │
   └─ pages/                  # page object classes
      ├─ HomePage.ts
      ├─ LoginPage.ts
      └─ RegisterPage.ts
🚀 Quick Start

Clone the repository:

git clone https://github.com/your-username/sloth-javascript.git
cd sloth-javascript

Install dependencies:

npm install

Launch Cypress interactive runner:

npx cypress open
▶ Running Tests
Run in interactive mode
npx cypress open
Run all tests (headless)
npx cypress run
Run a specific spec
npx cypress run --spec "cypress/integration/homepage.spec.ts"
Run against a specific environment
BASE_URL=https://www.tangerine.ca/en/personal npx cypress run
🧩 Page Object Example
Homepage
import { HomePage } from "../../src/pages/HomePage";

const home = new HomePage();

home.visit();
home.searchFor("cypress");
Login Page
import { LoginPage } from "../../src/pages/LoginPage";

const login = new LoginPage();

login.login("user@example.com", "password");

Page objects contain selectors and actions, while test files focus on validation and assertions.

🔧 Configuration

The framework provides environment utilities in:

src/config.ts

Example usage:

import { getBaseUrl } from "../src/config";

const url = `${getBaseUrl()}/some-path`;

This allows tests to dynamically adapt to different deployment environments.

🔄 CI/CD Integration

This framework is designed to integrate easily with CI pipelines such as:

GitHub Actions

Jenkins

GitLab CI

Azure DevOps

Example CI command:

npx cypress run --browser chrome

Typical CI workflow:

Install Dependencies
       ↓
Run Cypress Tests
       ↓
Generate Reports
       ↓
Publish Results
📊 Test Reporting

Cypress provides built-in console reporting.

Optional integrations include:

Mochawesome

Allure Reports

Cypress Dashboard

Example integration:

npm install mochawesome
🧠 Automation Design Notes

Key engineering principles used in this framework:

Maintainability

Selectors and UI logic are isolated in page objects.

Readability

Tests describe user behavior, not UI implementation.

Reusability

Common actions are implemented as custom Cypress commands.

Scalability

The structure supports scaling to hundreds of tests without architectural changes.

⚠ Known Limitations

Banking websites often include advanced protections such as:

Bot detection

CAPTCHA

Multi-factor authentication

Because of these mechanisms, some flows (such as full account creation) may not be fully automatable in a public demo environment.

📈 Future Improvements

Potential enhancements:

Parallel execution

Visual regression testing

API test integration

Test reporting dashboards

Docker test execution

GitHub Actions pipeline

👤 Author

Weipeng Zheng
Senior QA Automation Engineer / SDET

Specializations:

UI Test Automation (Selenium, Cypress, Playwright)

API Testing (Postman, RestAssured)

Performance Testing (JMeter)

CI/CD Automation

Test Framework Architecture

📄 License

This project is provided for demonstration and educational purposes.