import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const DesktopNavbar = () => {
  const t = useTranslations("Navbar");

  return (
    <nav className="hidden lg:flex justify-around p-5 items-center bg-background sticky top-0">
      <ul className="flex-1 text-center justify-center">
        <li>
          <Link
            href="/"
            className="text-lg font-semibold text-content-foreground"
          >
            <span className="text-primary">Axolote</span>
            <span>Web</span>
          </Link>
        </li>
      </ul>

      <ul className="flex flex-1 gap-3 justify-center text-content-foreground">
        <li>
          <Link href="/">{t("features")}</Link>
        </li>
        <li>
          <Link href="/pricing">{t("pricing")}</Link>
        </li>
        <li>
          <Link href="/about">{t("about")}</Link>
        </li>
        <li>
          <Link href="/blog">{t("blog")}</Link>
        </li>
        <li>
          <Link href="/contact">{t("contact")}</Link>
        </li>
      </ul>

      <ul className="flex gap-3 items-center flex-1 justify-center">
        <li>
          <Link href="/login">
            <Button variant="ghost" className="text-content-foreground">
              {t("login")}
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <Button className="rounded-full">
              {t("signup")}
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
