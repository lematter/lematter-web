import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
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

export default function ResetPasswordPage() {
  const t = useTranslations("Auth.reset");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">{t("password")}</Label>
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="confirm">{t("confirm")}</Label>
            <Input
              id="confirm"
              type="password"
              autoComplete="new-password"
              required
            />
          </div>
          <Button type="submit" size="lg" className="w-full">
            {t("submit")}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center text-sm text-muted-foreground">
        <Link href="/auth/login" className="font-medium text-foreground hover:underline">
          {t("backToLogin")}
        </Link>
      </CardFooter>
    </Card>
  );
}
