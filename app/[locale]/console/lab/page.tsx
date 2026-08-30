import { redirect } from "@/i18n/navigation";

export default async function LabIndexPage({
  params,
}: PageProps<"/[locale]/console/lab">) {
  const { locale } = await params;
  redirect({ href: "/console/lab/overview", locale });
}
