# Security Policy

## Supported Versions

This is an open-source **test automation framework** for demonstration and educational purposes. The following table describes the support status for each version:

| Version | Supported |
|---------|-----------|
| latest (`main`) | :white_check_mark: |
| older branches | :x: |

## Reporting a Security Vulnerability

Although this project is a test framework and does not handle production data, we take security seriously.

**Do NOT open a public GitHub issue for security vulnerabilities.**

If you discover a security issue (e.g., exposed credentials, SSRF risk in configuration, dependency with a known CVE), please:

1. Go to the **Security** tab of this repository.
2. Click **"Report a vulnerability"** to open a private security advisory.
3. Provide as much detail as possible: affected file(s), reproduction steps, and potential impact.

We will acknowledge your report within **5 business days** and aim to address confirmed vulnerabilities within **30 days**.

## Security Considerations for This Project

- **Test credentials** in `src/config.ts` are demo values only. Never commit real credentials to source control.
- Use **environment variables** or [GitHub Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) for sensitive values in CI/CD pipelines.
- Regularly audit dependencies with `npm audit` and keep them up to date.
- `BASE_URL` is configurable via an environment variable — validate it before pointing at non-public environments.

## Dependency Security

Run the following to audit dependencies:

```bash
npm audit
npm audit fix
```

For known vulnerabilities in direct dependencies, please open a regular GitHub issue or pull request with an updated package version.
