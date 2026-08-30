import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function ConsoleHeader() {
  const t = useTranslations("Console");

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b bg-background px-4">
      <Link href="/console" className="font-heading text-base font-semibold">
        {t("title")}
      </Link>
      <Button variant="outline" size="sm" render={<Link href="/auth/login" />}>
        {t("signOut")}
      </Button>
    </header>
  );
}
