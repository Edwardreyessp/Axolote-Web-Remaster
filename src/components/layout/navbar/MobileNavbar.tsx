import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { MenuNavbar } from "./MenuNavbar";

export const MobileNavbar = () => {
  const t = useTranslations("Navbar");

  return (
    <nav className="flex lg:hidden flex-col justify-around p-5 items-center bg-background sticky top-0">
      <MenuNavbar>
        <ul className="flex-1 w-full gap-3 justify-center text-content-foreground">
          <li>
            <Link href="/">{t("features")}</Link>
          </li>
          <li>
            <Link href="/about">{t("pricing")}</Link>
          </li>
          <li>
            <Link href="/about">{t("about")}</Link>
          </li>
          <li>
            <Link href="/about">{t("blog")}</Link>
          </li>
          <li>
            <Link href="/about">{t("contact")}</Link>
          </li>
        </ul>

        <ul className="flex w-full gap-3 items-center flex-1 justify-center">
          <li className="flex-1">
            <Link href="/login">
              <Button variant="secondary" className="w-full">
                {t("login")}
              </Button>
            </Link>
          </li>
          <li className="flex-1">
            <Link href="/signup">
              <Button className="w-full">
                {t("signup")}
                <ChevronRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </li>
        </ul>
      </MenuNavbar>
    </nav>
  );
};
