"use client";

import Image from "next/image";
import {
  Brain,
  FlaskConical,
  MessagesSquare,
  Plug,
  Plus,
  Puzzle,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const items = [
  { href: "/console/chat/new", key: "new", icon: Plus },
  { href: "/console/chat/chats", key: "chats", icon: MessagesSquare },
  { href: "/console/chat/connectors", key: "connectors", icon: Plug },
  { href: "/console/chat/skills", key: "skills", icon: Sparkles },
  { href: "/console/chat/memory", key: "memory", icon: Brain },
  { href: "/console/chat/plugins", key: "plugins", icon: Puzzle },
] as const;

export function ChatSidebar() {
  const t = useTranslations("Console.chat.nav");
  const tMode = useTranslations("Console.mode");
  const tApp = useTranslations("App");
  const pathname = usePathname();

  return (
    <aside className="hidden w-56 shrink-0 flex-col border-r bg-background md:flex">
      <div className="flex h-14 shrink-0 items-center border-b px-4">
        <Link
          href="/console"
          className="flex items-center gap-2 font-heading text-base font-semibold"
        >
          <Image
            src="/icons/app/dark.png"
            alt={tApp("brand")}
            width={24}
            height={24}
            className="size-6"
            priority
          />
          {tApp("brand")}
        </Link>
      </div>
      <div className="p-3 pb-0">
        <Link
          href="/console/lab"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-primary px-3 py-2.5 text-base font-medium text-white transition-colors hover:bg-primary/90"
        >
          <FlaskConical className="size-5" />
          {tMode("lab")}
        </Link>
      </div>
      <nav className="flex flex-col gap-1 p-3">
        {items.map(({ href, key, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                active
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              )}
            >
              <Icon className="size-5" />
              {t(key)}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
