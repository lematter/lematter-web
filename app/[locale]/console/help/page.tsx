import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HelpPage() {
  const t = useTranslations("Console.help");

  const topics = ["gettingStarted", "account", "billing"] as const;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          {t("title")}
        </h1>
        <p className="text-sm text-muted-foreground">{t("description")}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {topics.map((topic) => (
          <Card key={topic}>
            <CardHeader>
              <CardTitle>{t(`topics.${topic}.title`)}</CardTitle>
              <CardDescription>{t(`topics.${topic}.body`)}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="text-sm text-muted-foreground">
          {t("contact")}
        </CardContent>
      </Card>
    </div>
  );
}
