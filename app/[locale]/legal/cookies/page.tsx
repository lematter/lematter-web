import { useTranslations } from "next-intl";

export default function CookiesPage() {
  const t = useTranslations("Legal.cookies");

  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("updated")}</p>
      <p>{t("intro")}</p>

      <h2>{t("s1Title")}</h2>
      <p>{t("s1Body")}</p>

      <h2>{t("s2Title")}</h2>
      <p>{t("s2Body")}</p>

      <h2>{t("s3Title")}</h2>
      <p>{t("s3Body")}</p>
    </>
  );
}
