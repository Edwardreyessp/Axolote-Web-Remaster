import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-primary-600">{t("title")}</h1>
      <h2 className="text-4xl text-secondary-600">{t("description")}</h2>
      <p>{t("description")}</p>
      <Image src="/vercel.svg" alt="Next.js Logo" width={200} height={200} />
    </main>
  );
}
