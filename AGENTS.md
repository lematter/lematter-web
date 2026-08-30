# AGENTS.md

Guidance for AI agents and human contributors working in this repository.

## Project overview

Lematter-web is a Next.js 16 (App Router) application using TypeScript,
Tailwind CSS v4, shadcn/ui, lucide-react, and next-intl for
internationalization.

## Commands

- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Start (prod): `npm run start`
- Lint: `npm run lint`

Always run `npm run lint` and `npm run build` before considering a change done.

## Conventions

- **Routing**: locale-aware routes live under `app/[locale]/`. `params` is a
  Promise and must be awaited.
- **Middleware**: the routing middleware file is `proxy.ts` (Next.js 16 renamed
  `middleware.ts` to `proxy.ts`). The next-intl import path is still
  `next-intl/middleware`.
- **i18n**: never hard-code user-facing strings. Add keys to `messages/en.json`
  and every other locale file, then use `useTranslations`. Locales are declared
  in `i18n/config.ts`.
- **Styling**: Tailwind v4 utilities; use `cn()` from `lib/utils.ts` for
  conditional classes.
- **UI**: prefer `npx shadcn@latest add <name>` over hand-writing components.
- **Icons**: use `lucide-react`.

## Environment

- Copy `.env.example` to `.env.local`. `.env.local` is gitignored; only
  `.env.example` is committed. Never commit secrets.

## Documentation

Keep docs current when behavior changes: `README.md`, `CHANGELOG.md`
(update `[Unreleased]`), and `ROADMAP.md`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
