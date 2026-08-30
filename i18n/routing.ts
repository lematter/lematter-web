import { defineRouting } from "next-intl/routing";

import { defaultLocale, locales } from "./config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  // No prefix for the default locale, so "/" serves English.
  // "/en" also resolves (it redirects to "/"). Prefixes like "/hi"
  // start working automatically once more locales are added.
  localePrefix: "as-needed",
});
