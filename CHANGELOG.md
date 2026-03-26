# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### Planned
- Cross-browser testing (Firefox, Edge)
- Visual regression testing
- API mocking for isolated component tests
- Performance baseline assertions

---

## [0.1.0] - 2024-01-01

### Added
- Initial framework setup with Cypress and TypeScript
- Page Object Model (POM) architecture
- `HomePage`, `LoginPage`, and `RegisterPage` page objects
- Test specs for homepage, login, and registration flows
- Allure Reports integration (`@shelex/cypress-allure-plugin`)
- `cy-grep` support for tag-based test filtering (`@smoke`, etc.)
- `cypress-multi-reporters` for flexible reporting output
- GitHub Actions CI workflow with nightly scheduled runs
- Configurable `BASE_URL` via environment variable
- Auto-retry logic (2 retries in headless `cypress run` mode)
- TypeScript strict mode configuration
- `.gitignore` excluding test artifacts, credentials, and build output
- `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`
- GitHub Issue templates (bug report, feature request)
- GitHub Pull Request template

[Unreleased]: https://github.com/466725/sloth-javascript/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/466725/sloth-javascript/releases/tag/v0.1.0
