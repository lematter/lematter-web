# Security Policy

## Supported versions

This project is in active development. Security fixes are applied to the latest
release on the default branch.

| Version | Supported |
| ------- | --------- |
| latest  | Yes       |
| older   | No        |

## Reporting a vulnerability

Please **do not** open a public issue for security vulnerabilities.

Instead, report it privately:

- Use GitHub's [private vulnerability reporting](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability)
  ("Report a vulnerability" under the repository's Security tab), or
- Email the maintainers at **security@example.com**.

When reporting, please include:

- A description of the vulnerability and its impact
- Steps to reproduce (proof of concept if possible)
- Affected version(s) or commit hash
- Any suggested remediation

## What to expect

- We aim to acknowledge reports within **72 hours**.
- We will provide an assessment and expected timeline within **7 days**.
- We will keep you informed as we work on a fix and coordinate disclosure.

## Scope

Vulnerabilities in this application's own code are in scope. Issues in
third-party dependencies should be reported to the respective upstream project,
though we appreciate a heads-up so we can bump the affected package.

## Handling secrets

Never commit secrets. Local secrets belong in `.env.local`, which is
gitignored. Only `.env.example` (containing placeholder values) is committed.
If you discover a leaked secret, treat it as compromised and rotate it.
