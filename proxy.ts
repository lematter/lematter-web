import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

// In Next.js 16 the middleware file convention was renamed to `proxy`.
// The next-intl import path stays `next-intl/middleware`.
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes (/api, /trpc)
  // - Next.js internals (/_next, /_vercel)
  // - files with an extension (e.g. favicon.ico)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
