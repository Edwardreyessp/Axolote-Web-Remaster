import { Content } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export const Banner = () => {
  const t = useTranslations("Footer Banner");

  return (
    <section className="bg-gradient-to-tr from-primary to-indigo-800 text-primary-foreground px-5 py-8 xl:p-20 flex flex-col items-center gap-5 text-center">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-4xl xl:text-6xl font-bold">{t("title")}</h2>
        <Content className="text-primary-foreground">
          {t("description")}
        </Content>
      </div>
      <Button
        variant="outline"
        className="rounded-full text-primary hover:text-primary"
      >
        {t("button")}
      </Button>
    </section>
  );
};
