# Contributing to lematter-web

Thanks for your interest in contributing. This guide covers how to set up the
project, the conventions we follow, and how to submit changes.

By participating, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Getting started

1. Fork and clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the environment template:
   ```bash
   cp .env.example .env.local
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

## Development workflow

- Create a branch off the default branch: `git checkout -b feat/short-description`.
- Keep changes focused. One logical change per pull request.
- Run the checks before pushing:
  ```bash
  npm run lint
  npm run build
  ```

## Important: Next.js 16 conventions

This project uses Next.js 16, which has breaking changes from earlier versions.
Before writing framework code, read the relevant guide in
`node_modules/next/dist/docs/`. Notable conventions:

- The routing middleware file is `proxy.ts` (renamed from `middleware.ts`).
- `params` in layouts and pages is a Promise and must be awaited.
- Localized routes live under `app/[locale]/`.

See [AGENTS.md](./AGENTS.md) for the full agent/contributor rules.

## Coding standards

- **TypeScript** for all source files.
- **ESLint**: code must pass `npm run lint`.
- **Styling**: Tailwind CSS v4 utility classes. Use the `cn()` helper from
  `lib/utils.ts` for conditional class names.
- **Components**: add shadcn/ui components via `npx shadcn@latest add <name>`
  rather than hand-writing them where a registry component exists.
- **Icons**: use `lucide-react`.

## Internationalization

- Do not hard-code user-facing strings. Add them to `messages/en.json` and
  reference them with `useTranslations` / `getTranslations`.
- When adding a key, add it to every locale file under `messages/`.
- To add a locale, update `locales` in `i18n/config.ts` and create a matching
  `messages/<code>.json`.

## Commit messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add language switcher
fix: correct locale fallback in request config
docs: expand contributing guide
chore: bump dependencies
```

## Pull requests

- Fill in a clear description of what changed and why.
- Reference any related issues.
- Update [CHANGELOG.md](./CHANGELOG.md) under `[Unreleased]`.
- Ensure lint and build pass.

## Reporting bugs and requesting features

Open an issue with a clear title, reproduction steps (for bugs), and the
expected vs. actual behavior. For security issues, follow
[SECURITY.md](./SECURITY.md) instead of opening a public issue.
