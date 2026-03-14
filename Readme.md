# Amazon Automation Framework (TypeScript + Cypress)

A demo automation framework that validates key Amazon pages (homepage, login, registration) using **Cypress + TypeScript**.

---

## ✅ Quick Start

```bash
git clone https://github.com/your-username/sloth-javascript.git
cd sloth-javascript
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
│  │  ├─ homepage.spec.ts
│  │  ├─ login.spec.ts
│  │  └─ register.spec.ts
│  └─ support/
│     ├─ index.ts             # global setup
│     └─ commands.ts          # custom commands
└─ src/
   ├─ config.ts               # env helpers + test creds
   └─ pages/                  # page objects
      ├─ AmazonHomePage.ts
      ├─ AmazonLoginPage.ts
      └─ AmazonRegisterPage.ts
```

---

## 🌍 Environment Configuration

### Base URL (overrideable)
Cypress uses a base URL configured in `cypress.config.ts`, and it can be overridden with `BASE_URL`:

```bash
BASE_URL=https://www.amazon.com npx cypress run
```

### Config helper
`src/config.ts` exposes:

- `getBaseUrl()` — returns the effective base URL (env override or config value)
- `testCredentials` — example test user credentials

Use this helper when you need the full URL, but prefer relative paths in tests:

```ts
import { getBaseUrl } from "../src/config";

const url = getBaseUrl();
```

---

## 🧩 Page Objects (Example)

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

### Open Cypress UI

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

- Keep test logic in page objects, and keep specs focused on behavior.
- Use `cypress/support/commands.ts` for reusable helper flows (e.g., login).

---

## 💡 Contributing

Pull requests and improvements are welcome — add new pages, add tests, or improve abstractions.

---

## 📄 License

This project is for demonstration purposes only.
