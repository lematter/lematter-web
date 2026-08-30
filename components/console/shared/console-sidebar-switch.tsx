"use client";

import { usePathname } from "@/i18n/navigation";

import { ChatSidebar } from "./chat-sidebar";
import { LabSidebar } from "./lab-sidebar";

// Renders the Lab sidebar in lab mode (/console/lab), the Chat sidebar
// everywhere else in the console.
export function ConsoleSidebarSwitch() {
  const pathname = usePathname();
  const isLab =
    pathname === "/console/lab" || pathname.startsWith("/console/lab/");

  return isLab ? <LabSidebar /> : <ChatSidebar />;
}
