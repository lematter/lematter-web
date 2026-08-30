"use client";

import { LifeBuoy, LogOut, Settings } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Placeholder user; wire to real session data later.
const user = {
  name: "Jane Doe",
  email: "jane@example.com",
  avatar: "",
};

const menu = [
  { href: "/console/settings", key: "settings", icon: Settings },
  { href: "/console/help", key: "help", icon: LifeBuoy },
] as const;

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function ProfileBar({ collapsed = false }: { collapsed?: boolean }) {
  const t = useTranslations("Console.profile");

  return (
    <div className="mt-auto border-t p-3">
      <Popover>
        <PopoverTrigger
          className={cn(
            "flex w-full items-center rounded-lg text-left outline-none transition-colors hover:bg-muted/60",
            collapsed ? "justify-center p-1.5" : "gap-3 p-2"
          )}
        >
          <Avatar size="sm">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{initials(user.name)}</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-medium text-foreground">
                {user.name}
              </span>
              <span className="truncate text-xs text-muted-foreground">
                {user.email}
              </span>
            </div>
          )}
        </PopoverTrigger>
        <PopoverContent
          side={collapsed ? "right" : "top"}
          align="start"
          className="w-56 p-1"
        >
          <div className="flex items-center gap-3 p-2">
            <Avatar size="sm">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{initials(user.name)}</AvatarFallback>
            </Avatar>
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-medium text-foreground">
                {user.name}
              </span>
              <span className="truncate text-xs text-muted-foreground">
                {user.email}
              </span>
            </div>
          </div>
          <div className="my-1 h-px bg-border" />
          {menu.map(({ href, key, icon: Icon }) => (
            <Link
              key={key}
              href={href}
              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
            >
              <Icon className="size-4" />
              {t(key)}
            </Link>
          ))}
          <div className="my-1 h-px bg-border" />
          <Link
            href="/auth/login"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
          >
            <LogOut className="size-4" />
            {t("signOut")}
          </Link>
        </PopoverContent>
      </Popover>
    </div>
  );
}
