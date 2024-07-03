import { Content, H1 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Header = () => {
  const t = useTranslations("Home Header");

  return (
    <section className="flex flex-col xl:flex-row justify-between items-center">
      <div className="max-w-sm xl:max-w-max flex flex-col gap-6 text-center xl:text-left">
        <H1>{t("title")}</H1>

        <Content variant="large">{t("description")}</Content>

        <div className="flex gap-3 flex-col xl:flex-row">
          <Button>
            {t("buttonPrimary")}
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </Button>

          <Button variant="secondary">{t("buttonSecondary")}</Button>
        </div>
      </div>

      <div>
        <Image
          src="/images/img1.avif"
          alt="Next.js Logo"
          width={1183}
          height={787}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          priority
        />
      </div>
    </section>
  );
};
