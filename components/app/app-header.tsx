import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function AppHeader() {
  const t = useTranslations("App");

  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-base font-semibold"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/app/dark.png"
            alt={t("brand")}
            className="size-6 object-contain"
          />
          {t("brand")}
        </Link>
        <nav className="flex items-center gap-2">
          <Button variant="ghost" size="sm" render={<Link href="/auth/login" />}>
            {t("nav.login")}
          </Button>
          <Button size="sm" render={<Link href="/auth/signup" />}>
            {t("nav.signup")}
          </Button>
        </nav>
      </div>
    </header>
  );
}
