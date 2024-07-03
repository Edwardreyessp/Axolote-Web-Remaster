import Link from "next/link";
import { Banner } from "./footer/Banner";
import { LinkSection } from "./footer/LinkSection";
import { SocialMedia } from "./footer/SocialMedia";

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-slate-100">
      <Banner />

      <section className="flex flex-col xl:flex-row gap-8 xl:gap-36 px-5 xl:px-24 py-14">
        <SocialMedia />

        <section className="flex-1 flex flex-col xl:flex-row justify-between gap-5">
          <LinkSection title="Company">
            <Link href="/about" className="text-sm">
              About
            </Link>
            <Link href="/about" className="text-sm">
              Careers
            </Link>
            <Link href="/about" className="text-sm">
              Blog
            </Link>
            <Link href="/about" className="text-sm">
              Contact
            </Link>
          </LinkSection>

          <LinkSection title="Company">
            <Link href="/about" className="text-sm">
              About
            </Link>
            <Link href="/about" className="text-sm">
              Careers
            </Link>
            <Link href="/about" className="text-sm">
              Blog
            </Link>
            <Link href="/about" className="text-sm">
              Contact
            </Link>
          </LinkSection>

          <LinkSection title="Company">
            <Link href="/about" className="text-sm">
              About
            </Link>
            <Link href="/about" className="text-sm">
              Careers
            </Link>
            <Link href="/about" className="text-sm">
              Blog
            </Link>
            <Link href="/about" className="text-sm">
              Contact
            </Link>
          </LinkSection>
        </section>
      </section>

      <hr />

      <div className="flex flex-col gap-2 items-center pt-9 pb-14 text-sm">
        <p>Copyright © 2024 Astroship. All rights reserved.</p>
        <div className="text-xs">
          <span>
            <Link href="/terms">Terms</Link>
          </span>
          <span> ・ </span>
          <span>
            <Link href="/privacy">Privacy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};
