"use client";

import { LifeBuoy, Settings } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const items = [
  { href: "/console/help", key: "help", icon: LifeBuoy },
  { href: "/console/settings", key: "settings", icon: Settings },
] as const;

export function ConsoleSidebar() {
  const t = useTranslations("Console.nav");
  const pathname = usePathname();

  return (
    <aside className="hidden w-56 shrink-0 border-r bg-background md:block">
      <nav className="flex flex-col gap-1 p-3">
        {items.map(({ href, key, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              )}
            >
              <Icon className="size-4" />
              {t(key)}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
