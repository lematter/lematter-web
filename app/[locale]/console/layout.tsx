import type { ReactNode } from "react";

import { ConsoleLayout } from "@/components/console";

export default function Layout({ children }: { children: ReactNode }) {
  return <ConsoleLayout>{children}</ConsoleLayout>;
}
