import { redirect } from "@/i18n/navigation";

export default async function ChatIndexPage({
  params,
}: PageProps<"/[locale]/console/chat">) {
  const { locale } = await params;
  redirect({ href: "/console/chat/new", locale });
}
