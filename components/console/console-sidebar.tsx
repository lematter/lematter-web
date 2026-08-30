"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  BarChart3,
  Brain,
  LayoutDashboard,
  MessagesSquare,
  PanelLeftClose,
  PanelLeftOpen,
  Plug,
  Plus,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ProfileBar, SidebarToggle, type SidebarMode } from "./shared";

type NavItem = {
  href: string;
  key: string;
  icon: LucideIcon;
};

// Default landing page for each mode.
const modeHome: Record<SidebarMode, string> = {
  chat: "/console/chat/new",
  lab: "/console/lab/overview",
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
];

export function ConsoleSidebar() {
  const tApp = useTranslations("App");
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  // Which mode a path belongs to. Shared pages (settings, help, etc.) return
  // null so the sidebar keeps whatever mode was already active.
  const routeMode = (path: string): SidebarMode | null => {
    if (path === "/console/lab" || path.startsWith("/console/lab/")) return "lab";
    if (path === "/console/chat" || path.startsWith("/console/chat/")) return "chat";
    return null;
  };

  // Mode is remembered; it only changes when navigating to a chat or lab page.
  const [mode, setMode] = useState<SidebarMode>(
    () => routeMode(pathname) ?? "chat"
  );

  useEffect(() => {
    const next = routeMode(pathname);
    if (next && next !== mode) {
      setMode(next);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const items = mode === "lab" ? labItems : chatItems;
  const t = useTranslations(
    mode === "lab" ? "Console.lab.nav" : "Console.chat.nav"
  );

  // Switching mode navigates to that mode's default page.
  const handleModeChange = (next: SidebarMode) => {
    if (next !== mode) {
      router.push(modeHome[next]);
    }
  };

  return (
    <aside
      className={cn(
        "hidden shrink-0 flex-col border-r bg-background transition-[width] md:flex",
        collapsed ? "w-16" : "w-56"
      )}
    >
      <div
        className={cn(
          "flex h-14 shrink-0 items-center border-b",
          collapsed ? "justify-center px-2" : "justify-between px-4"
        )}
      >
        {!collapsed && (
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
        )}
        <button
          type="button"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!collapsed}
          className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors outline-none hover:bg-muted/60 hover:text-foreground"
        >
          {collapsed ? (
            <PanelLeftOpen className="size-5" />
          ) : (
            <PanelLeftClose className="size-5" />
          )}
        </button>
      </div>

      {!collapsed && (
        <div className="p-3 pb-0">
          <SidebarToggle mode={mode} onChange={handleModeChange} />
        </div>
      )}

      <nav className="flex flex-col gap-1 p-3">
        {items.map(({ href, key, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              title={collapsed ? t(key) : undefined}
              className={cn(
                "flex items-center rounded-lg text-base font-medium transition-colors",
                collapsed
                  ? "justify-center px-2 py-2.5"
                  : "gap-3 px-3 py-2.5",
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              )}
            >
              <Icon className="size-5" />
              {!collapsed && t(key)}
            </Link>
          );
        })}
      </nav>

      <ProfileBar collapsed={collapsed} />
    </aside>
  );
}
