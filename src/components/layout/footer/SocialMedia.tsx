import { Content } from "@/components/ui/Typography";
import { MdiFacebook, MdiInstagram, MdiTwitter } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";
import { SocialIcon } from "@/components/ui/social-icon";

export const SocialMedia = () => {
  return (
    <section className="flex flex-col gap-4">
      <Logo />
      <Content className="max-w-xs">
        Astroship Pro is a premium astro website template made for saas &
        startups. Built with Astro and Tailwind CSS.
      </Content>
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
