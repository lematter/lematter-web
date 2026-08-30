"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BarChart3,
  Brain,
  LayoutDashboard,
  LifeBuoy,
  MessagesSquare,
  Plug,
  Plus,
  Puzzle,
  Settings,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { SidebarToggle, type SidebarMode } from "./shared/sidebar-toggle";

type NavItem = {
  href: string;
  key: string;
  icon: LucideIcon;
};

const chatItems: NavItem[] = [
  { href: "/console/chat/new", key: "new", icon: Plus },
  { href: "/console/chat/chats", key: "chats", icon: MessagesSquare },
  { href: "/console/chat/connectors", key: "connectors", icon: Plug },
  { href: "/console/chat/skills", key: "skills", icon: Sparkles },
  { href: "/console/chat/memory", key: "memory", icon: Brain },
  { href: "/console/chat/plugins", key: "plugins", icon: Puzzle },
];

const labItems: NavItem[] = [
  { href: "/console/lab/overview", key: "overview", icon: LayoutDashboard },
  { href: "/console/lab/compliance", key: "compliance", icon: ShieldCheck },
  { href: "/console/lab/workflows", key: "workflows", icon: Workflow },
  { href: "/console/lab/reports", key: "reports", icon: BarChart3 },
  { href: "/console/help", key: "help", icon: LifeBuoy },
  { href: "/console/settings", key: "settings", icon: Settings },
];

export function ConsoleSidebar() {
  const tApp = useTranslations("App");
  const pathname = usePathname();

  // Initialize mode from the current route, then let the toggle control it
  // locally (switching in place, no navigation).
  const initialMode: SidebarMode =
    pathname === "/console/lab" || pathname.startsWith("/console/lab/")
      ? "lab"
      : "chat";
  const [mode, setMode] = useState<SidebarMode>(initialMode);

  const items = mode === "lab" ? labItems : chatItems;
  const t = useTranslations(
    mode === "lab" ? "Console.lab.nav" : "Console.chat.nav"
  );

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
        <SidebarToggle mode={mode} onChange={setMode} />
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
