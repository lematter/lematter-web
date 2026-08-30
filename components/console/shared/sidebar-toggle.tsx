"use client";

import { FlaskConical, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

export type SidebarMode = "chat" | "lab";

const modes = [
  { key: "chat" as const, icon: MessageSquare },
  { key: "lab" as const, icon: FlaskConical },
];

// Segmented Chat | Lab toggle. Purely switches the active mode in place
// (no navigation) via the onChange callback.
export function SidebarToggle({
  mode,
  onChange,
}: {
  mode: SidebarMode;
  onChange: (mode: SidebarMode) => void;
}) {
  const t = useTranslations("Console.mode");

  return (
    <div className="flex gap-1 border border-border p-1">
      {modes.map(({ key, icon: Icon }) => {
        const active = key === mode;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            aria-pressed={active}
            className={cn(
              "flex flex-1 items-center justify-center gap-1.5 px-2 py-1.5 text-sm font-medium transition-colors outline-none",
              active
                ? "bg-primary text-white"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            )}
          >
            <Icon className="size-4" />
            {t(key)}
          </button>
        );
      })}
    </div>
  );
}
