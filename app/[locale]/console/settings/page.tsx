import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  const t = useTranslations("Console.settings");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          {t("title")}
        </h1>
        <p className="text-sm text-muted-foreground">{t("description")}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("profile.title")}</CardTitle>
          <CardDescription>{t("profile.description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">{t("profile.name")}</Label>
              <Input id="name" type="text" autoComplete="name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">{t("profile.email")}</Label>
              <Input id="email" type="email" autoComplete="email" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="submit">{t("profile.save")}</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
