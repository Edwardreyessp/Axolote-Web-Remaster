import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="flex flex-col items-center justify-center flex-1 h-full">
      <h1 className="text-3xl xl:text-6xl font-bold">{t("title")}</h1>
      <h2 className="text-lg text-content-foreground">{t("description")}</h2>
      <Image src="/vercel.svg" alt="Next.js Logo" width={200} height={200} />
    </main>
  );
}
