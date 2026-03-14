# Amazon Automation Framework (TypeScript + Cypress)

A demo automation framework that validates key Amazon pages (homepage, login, registration) using **Cypress + TypeScript**.

---

## ✅ Quick Start

If you're cloning the repo:

```bash
git clone https://github.com/your-username/sloth-javascript.git
cd sloth-javascript
npm install
npx cypress open
```

If you already have the code, just run:

```bash
npm install
npx cypress open
```

---

## 🔧 Prerequisites

- Node.js (v14+)
- npm or yarn
- Git

---

## 🧱 Project Layout

```
├─ cypress.config.ts          # Cypress configuration (baseUrl + env overrides)
├─ package.json               # scripts + dependencies
├─ tsconfig.json              # TypeScript settings
├─ cypress/
│  ├─ integration/            # test specs
│  │  ├─ homepage.spec.ts     # homepage tests
│  │  ├─ login.spec.ts        # login page tests
│  │  └─ register.spec.ts     # registration page tests
│  └─ support/
│     ├─ index.ts             # global setup
│     └─ commands.ts          # custom commands
└─ src/
   ├─ config.ts               # env helpers + test creds
   └─ pages/                  # page objects
      ├─ AmazonHomePage.ts    # homepage interactions
      ├─ AmazonLoginPage.ts   # login page interactions
      └─ AmazonRegisterPage.ts # registration page interactions
```

---

## 🌍 Environment Configuration

### Base URL (overrideable)
The base URL is set in `cypress.config.ts` and can be overridden via the `BASE_URL` environment variable:

```bash
BASE_URL=https://www.amazon.com npx cypress run
```

This allows running tests against different environments (e.g., staging).

### Config helper
`src/config.ts` provides utilities:

- `getBaseUrl()` — returns the current base URL (useful for building full URLs if needed)
- `testCredentials` — sample test user data

Example usage:

```ts
import { getBaseUrl } from "../src/config";

const fullUrl = `${getBaseUrl()}/some-path`;
```

---

## 🧩 Page Objects (Examples)

Page objects encapsulate page interactions. Import and use them in your tests:

### Homepage

```ts
import { AmazonHomePage } from "../../src/pages/AmazonHomePage";

const home = new AmazonHomePage();
home.visit();
home.searchFor("cypress");
```

### Login

```ts
import { AmazonLoginPage } from "../../src/pages/AmazonLoginPage";

const login = new AmazonLoginPage();
login.login("user@example.com", "password");
```

### Register

```ts
import { AmazonRegisterPage } from "../../src/pages/AmazonRegisterPage";

const register = new AmazonRegisterPage();
register.register({
  name: "Test User",
  email: "test@example.com",
  password: "Password123",
});
```

---

## ▶️ Running Tests

### Open Cypress UI (interactive)

```bash
npx cypress open
```

### Run all tests (headless)

```bash
npx cypress run
```

### Run a single spec

```bash
npx cypress run --spec "cypress/integration/homepage.spec.ts"
```

---

## 🧠 Notes

- **Test Logic**: Keep page-specific logic in page objects; specs should focus on behavior and assertions.
- **Custom Commands**: Use `cypress/support/commands.ts` for reusable actions (e.g., global login helpers).
- **Amazon Changes**: Amazon's UI updates frequently, so selectors may need adjustments. Tests are designed to be resilient but may require updates.
- **Known Issues**: Some tests (login/register) may fail due to Amazon's dynamic pages or bot detection. The homepage tests are stable.

---

## 💡 Contributing

Pull requests welcome! Add new pages, improve selectors, or enhance the framework.

---

## 📄 License

This project is for demonstration purposes only.
