import Image from "next/image";
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
          <Image
            src="/icons/app/dark.png"
            alt={t("brand")}
            width={24}
            height={24}
            className="size-6"
            priority
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
