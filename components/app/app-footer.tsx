import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export function AppFooter() {
  const t = useTranslations("App");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
        <p>{t("footer.copyright", { year })}</p>
        <nav className="flex items-center gap-4">
          <Link href="/legal/terms" className="hover:text-foreground">
            {t("footer.terms")}
          </Link>
          <Link href="/legal/privacy" className="hover:text-foreground">
            {t("footer.privacy")}
          </Link>
          <Link href="/legal/cookies" className="hover:text-foreground">
            {t("footer.cookies")}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
