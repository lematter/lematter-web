import type { ReactNode } from "react";

export default function LabLayout({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-6">{children}</div>;
}
