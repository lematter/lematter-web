import { useTranslations } from "next-intl";

export default function FilesPage() {
  const t = useTranslations("Console.files");

  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-heading text-2xl font-semibold tracking-tight">
        {t("title")}
      </h1>
    </div>
  );
}
