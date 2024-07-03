import { Content } from "@/components/ui/Typography";
import { MdiFacebook, MdiInstagram, MdiTwitter } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";
import { SocialIcon } from "@/components/ui/social-icon";
import { useTranslations } from "next-intl";

export const SocialMedia = () => {
  const t = useTranslations("Footer");

  return (
    <section className="flex flex-col gap-4">
      <Logo />
      <Content className="max-w-xs">{t("socialMediaDescription")}</Content>
      <div className="flex gap-3">
        <SocialIcon href="/">
          <MdiFacebook className="w-4 h-4" />
        </SocialIcon>
        <SocialIcon href="/">
          <MdiInstagram className="w-4 h-4" />
        </SocialIcon>
        <SocialIcon href="/">
          <MdiTwitter className="w-4 h-4" />
        </SocialIcon>
      </div>
    </section>
  );
};
