import type { ReactNode } from "react";

import { ConsoleHeader } from "./console-header";
import { ConsoleSidebar } from "./console-sidebar";

export function ConsoleLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <ConsoleHeader />
      <div className="flex flex-1">
        <ConsoleSidebar />
        <main className="flex-1 p-6">
          <div className="mx-auto w-full max-w-3xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
