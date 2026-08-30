import type { ReactNode } from "react";

import { ConsoleHeader } from "./console-header";
import { ConsoleSidebarSwitch } from "./shared";

export function ConsoleLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <ConsoleSidebarSwitch />
      <div className="flex min-w-0 flex-1 flex-col">
        <ConsoleHeader />
        <main className="flex-1 p-6">
          <div className="mx-auto w-full max-w-3xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
