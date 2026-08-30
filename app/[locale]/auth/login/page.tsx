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
import { Checkbox } from "@/components/ui/checkbox";
import { PasswordInput } from "@/components/ui/password-input";

export default function LoginPage() {
  const t = useTranslations("Auth.login");
  const tc = useTranslations("Auth.common");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">{t("email")}</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">{t("password")}</Label>
              <Link
                href="/auth/forgot"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                {t("forgotLink")}
              </Link>
            </div>
            <PasswordInput
              id="password"
              autoComplete="current-password"
              required
              showLabel={tc("showPassword")}
              hideLabel={tc("hidePassword")}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" name="remember" />
            <Label htmlFor="remember" className="font-normal text-muted-foreground">
              {t("rememberMe")}
            </Label>
          </div>
          <Button type="submit" size="lg" className="w-full">
            {t("submit")}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center text-sm text-muted-foreground">
        {t("noAccount")}&nbsp;
        <Link href="/auth/signup" className="font-medium text-foreground hover:underline">
          {t("signupLink")}
        </Link>
      </CardFooter>
    </Card>
  );
}
