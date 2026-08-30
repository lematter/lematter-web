# lematter-web

A modern web application built with Next.js 16 (App Router), internationalized with next-intl, and styled with Tailwind CSS v4 and shadcn/ui.

## Tech stack

| Concern            | Choice                                  |
| ------------------ | --------------------------------------- |
| Framework          | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Language           | TypeScript                              |
| Styling            | Tailwind CSS v4                         |
| UI components      | [shadcn/ui](https://ui.shadcn.com) (base-nova style) |
| Icons              | [lucide-react](https://lucide.dev)      |
| Internationalization | [next-intl](https://next-intl.dev) v4 |
| Runtime            | React 19                                |

## Requirements

- Node.js 20 or later
- npm (project ships with `package-lock.json`)

## Getting started

Install dependencies:

```bash
npm install
```

Set up environment variables:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Script          | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create a production build            |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Project structure

```
app/
  [locale]/          Localized routes (layout + pages)
  globals.css        Tailwind + shadcn theme tokens
components/
  ui/                shadcn/ui components
i18n/
  config.ts          locales + defaultLocale
  routing.ts         defineRouting (localePrefix: "as-needed")
  request.ts         per-request message loading
  navigation.ts      locale-aware Link / redirect / router
lib/
  utils.ts           cn() class-name helper
messages/
  en.json            English translations
proxy.ts             locale routing middleware (Next.js 16 convention)
```

## Internationalization

Locales are defined in `i18n/config.ts`. English (`en`) is the default and is served at the root path (`/`); the prefixed path (`/en`) also resolves.

To add a language:

1. Add its code to `locales` in `i18n/config.ts`.
2. Create a matching `messages/<code>.json` with the same keys as `messages/en.json`.

## UI components

Add shadcn/ui components with:

```bash
npx shadcn@latest add <component>
```

Components are generated into `components/ui/`.

## Deployment

The app builds to a standard Next.js production output and can be deployed to any platform that supports Next.js 16, including [Vercel](https://vercel.com/new).

```bash
npm run build
npm run start
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). By participating you agree to the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Security

To report a vulnerability, see [SECURITY.md](./SECURITY.md).

## License

Released under the [MIT License](./LICENSE).
