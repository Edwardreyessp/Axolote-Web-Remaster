import Link from "next/link";
import { Banner } from "./footer/Banner";
import { LinkSection } from "./footer/LinkSection";
import { SocialMedia } from "./footer/SocialMedia";
import { useTranslations } from "next-intl";

type Props = {
  hasBanner?: boolean;
};

export const Footer = ({ hasBanner = true }: Props) => {
  const t = useTranslations("Footer");
  const t1 = useTranslations("Footer S1");
  const t2 = useTranslations("Footer S2");
  const t3 = useTranslations("Footer S3");

  return (
    <footer className="flex flex-col bg-slate-100">
      {hasBanner && <Banner />}

      <section className="flex flex-col xl:flex-row gap-8 xl:gap-36 px-5 xl:px-24 py-14">
        <SocialMedia />

        <section className="flex-1 flex flex-col xl:flex-row justify-between gap-5">
          <LinkSection title={t1("title")}>
            <Link href="/about" className="text-sm">
              {t1("about")}
            </Link>
            <Link href="/about" className="text-sm">
              {t1("careers")}
            </Link>
            <Link href="/about" className="text-sm">
              {t1("blog")}
            </Link>
            <Link href="/about" className="text-sm">
              {t1("contact")}
            </Link>
          </LinkSection>

          <LinkSection title={t2("title")}>
            <Link href="/about" className="text-sm">
              {t2("about")}
            </Link>
            <Link href="/about" className="text-sm">
              {t2("careers")}
            </Link>
            <Link href="/about" className="text-sm">
              {t2("blog")}
            </Link>
            <Link href="/about" className="text-sm">
              {t2("contact")}
            </Link>
          </LinkSection>

          <LinkSection title={t3("title")}>
            <Link href="/about" className="text-sm">
              {t3("about")}
            </Link>
            <Link href="/about" className="text-sm">
              {t3("careers")}
            </Link>
            <Link href="/about" className="text-sm">
              {t3("blog")}
            </Link>
            <Link href="/about" className="text-sm">
              {t3("contact")}
            </Link>
          </LinkSection>
        </section>
      </section>

      <hr />

      <div className="flex flex-col gap-2 items-center pt-9 pb-14 text-sm">
        <p>{t("rights")}</p>
        <div className="text-xs">
          <span>
            <Link href="/terms">{t("terms")}</Link>
          </span>
          <span> ・ </span>
          <span>
            <Link href="/privacy">{t("privacy")}</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};
