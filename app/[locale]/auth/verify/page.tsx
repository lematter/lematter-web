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

export default function VerifyPage() {
  const t = useTranslations("Auth.verify");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="code">{t("code")}</Label>
            <Input
              id="code"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              placeholder="000000"
              className="text-center tracking-[0.5em]"
              required
            />
          </div>
          <Button type="submit" size="lg" className="w-full">
            {t("submit")}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center text-sm text-muted-foreground">
        {t("noCode")}&nbsp;
        <Link href="/auth/verify" className="font-medium text-foreground hover:underline">
          {t("resend")}
        </Link>
      </CardFooter>
    </Card>
  );
}
