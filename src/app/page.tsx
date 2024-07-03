import { Header } from "@/components/features/home/header";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="flex flex-col items-center justify-center flex-1 h-full">
      <Header />
    </main>
  );
}
