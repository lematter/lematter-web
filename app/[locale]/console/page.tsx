import { redirect } from "@/i18n/navigation";

export default async function ConsoleIndexPage({
  params,
}: PageProps<"/[locale]/console">) {
  const { locale } = await params;
  redirect({ href: "/console/help", locale });
}
