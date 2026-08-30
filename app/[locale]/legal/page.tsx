import { redirect } from "@/i18n/navigation";

export default async function LegalIndexPage({
  params,
}: PageProps<"/[locale]/legal">) {
  const { locale } = await params;
  redirect({ href: "/legal/terms", locale });
}
