# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Internationalization with next-intl v4 (`i18n/` config, `messages/`, `proxy.ts`).
  English is the default locale, served at the root path.
- shadcn/ui (base-nova style) with Tailwind CSS v4 and lucide-react icons.
- Project documentation: README, LICENSE, SECURITY, CODE_OF_CONDUCT,
  CONTRIBUTING, ROADMAP, CHANGELOG.
- Environment variable scaffolding (`.env.example`, `.env.local`).

### Changed

- Moved app routes under `app/[locale]/` for locale-aware routing.
- Updated `.gitignore` to ignore local env files and editor folders while
  committing `.env.example`.

## [0.1.0] - 2026-08-30

### Added

- Initial project scaffold with Next.js 16 (App Router) and TypeScript.
