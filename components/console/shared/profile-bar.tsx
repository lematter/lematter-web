"use client";

import { useState } from "react";
import { BookOpen, LifeBuoy, LogOut, Settings, User } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const menu = [
  { href: "/console/settings", key: "settings", icon: Settings },
  { href: "/console/help", key: "help", icon: LifeBuoy },
] as const;

export function ProfileBar({ collapsed = false }: { collapsed?: boolean }) {
  const t = useTranslations("Console.profile");
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="mt-auto border-t">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          className={cn(
            "flex h-14 w-full items-center text-left text-muted-foreground outline-none transition-colors hover:bg-muted/60 hover:text-foreground",
            collapsed ? "justify-center px-2" : "gap-3 px-4"
          )}
        >
          <User className="size-5 shrink-0" />
          {!collapsed && (
            <span className="truncate text-sm font-medium">{t("title")}</span>
          )}
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="center"
          sideOffset={12}
          className="w-52 p-1"
        >
          {/* Profile header (username + email later; text for now) */}
          <div className="px-2 py-1.5">
            <span className="text-sm font-medium text-foreground">
              {t("title")}
            </span>
          </div>
          <div className="my-1 h-px bg-border" />
          {menu.map(({ href, key, icon: Icon }) => (
            <Link
              key={key}
              href={href}
              onClick={close}
              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
            >
              <Icon className="size-4" />
              {t(key)}
            </Link>
          ))}
          <a
            href="http://docs.lematter.in/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
          >
            <BookOpen className="size-4" />
            {t("documentation")}
          </a>
          <div className="my-1 h-px bg-border" />
          <Link
            href="/auth/login"
            onClick={close}
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
          >
            <LogOut className="size-4" />
            {t("logout")}
          </Link>
        </PopoverContent>
      </Popover>
    </div>
  );
}
