# Contributing to sloth-javascript

Thank you for your interest in contributing! Whether you are fixing a bug, adding new test coverage, or improving documentation — all contributions are welcome.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Making Changes](#making-changes)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)

---

## Code of Conduct

This project follows our [Code of Conduct](CODE_OF_CONDUCT.md). By participating you agree to abide by its terms. Please report unacceptable behaviour to the maintainers.

---

## Getting Started

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/sloth-javascript.git
   cd sloth-javascript
   ```
3. Add the upstream remote:
   ```bash
   git remote add upstream https://github.com/466725/sloth-javascript.git
   ```

---

## Development Setup

### Prerequisites

| Tool | Version |
|------|---------|
| Node.js | v18 or higher |
| npm | v9 or higher |

### Install dependencies

```bash
npm install
```

### Run tests interactively

```bash
npm run cypress:open
```

### Run tests headlessly

```bash
npm test
```

### Generate the Allure report

```bash
npm run allure:generate
npm run allure:open
```

---

## Project Structure

```
sloth-javascript/
├── cypress/
│   ├── e2e/          # Test specifications — add new tests here
│   └── support/      # Global Cypress setup and custom commands
├── src/
│   ├── config.ts     # Test configuration and credentials
│   └── pages/        # Page Object Models — add new page objects here
└── .github/
    └── workflows/    # CI pipeline
```

---

## Making Changes

### Branching

Create a descriptive branch from `main`:

```bash
git checkout -b feat/add-account-page-tests
# or
git checkout -b fix/login-selector-update
# or
git checkout -b docs/update-readme
```

Common branch prefixes:

| Prefix | Use for |
|--------|---------|
| `feat/` | New tests or page objects |
| `fix/` | Bug fixes |
| `refactor/` | Code improvements without functional change |
| `docs/` | Documentation only |
| `ci/` | CI/CD pipeline changes |

### Adding a New Test

1. Create a Page Object in `src/pages/` if the page does not already have one.
2. Add the test spec in `cypress/e2e/`.
3. Follow the existing naming convention (`<feature>.cy.ts`).
4. Annotate with Allure decorators:
   ```typescript
   cy.allure().feature('FeatureName');
   cy.allure().story('StoryDescription');
   ```

### Adding a New Page Object

1. Create `src/pages/<PageName>Page.ts`.
2. Export a class with clearly named action methods.
3. Keep selectors as `private readonly` class properties.
4. Import and use in your test spec.

---

## Commit Message Guidelines

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(optional scope): short description

[optional body]
[optional footer]
```

**Types:**

| Type | Description |
|------|-------------|
| `feat` | New test, page object, or feature |
| `fix` | Bug fix |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `docs` | Documentation changes |
| `ci` | CI/CD configuration changes |
| `chore` | Build process or tooling changes |
| `test` | Adding or updating tests |

**Examples:**

```
feat(login): add invalid credentials error message assertion
fix(homepage): update logo selector after site redesign
docs: improve getting started section in README
ci: add Allure report upload step to workflow
```

---

## Pull Request Process

1. Ensure your branch is up to date with `main`:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```
2. Run the full test suite and confirm it passes:
   ```bash
   npm test
   ```
3. Push your branch and open a Pull Request against `main`.
4. Fill in the [PR template](.github/pull_request_template.md) completely.
5. A maintainer will review your PR. Address any feedback promptly.
6. Once approved, a maintainer will merge your PR.

---

## Coding Standards

- **Language**: TypeScript — use strict types, avoid `any`.
- **Selectors**: Prefer `data-testid` attributes over CSS classes when available.
- **Page Objects**: One class per page, methods should clearly describe the action performed.
- **Tests**: Each `it()` block should test one behaviour, with a clear description.
- **No hardcoded credentials**: Use `src/config.ts` or environment variables.
- **Formatting**: Use consistent 2-space indentation (matches existing code style).

---

## Questions?

Open a [GitHub Discussion](https://github.com/466725/sloth-javascript/discussions) or file an issue. We're happy to help.
