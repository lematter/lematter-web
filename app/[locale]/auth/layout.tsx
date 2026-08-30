import type { ReactNode } from "react";

import { AppLayout } from "@/components/app";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <AppLayout>
      <div className="flex flex-1 items-center justify-center bg-muted/30 px-4 py-12">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </AppLayout>
  );
}
