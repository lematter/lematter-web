import type { ReactNode } from "react";

import { AppHeader } from "./app-header";
import { AppFooter } from "./app-footer";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <AppHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <AppFooter />
    </div>
  );
}
