import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Footer, Navbar } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axolote Web",
  description: "Crea sitios web personalizados",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <main className="min-h-svh flex flex-col">
            <Navbar />
            <div className="flex-1 px-5 xl:px-24">{children}</div>
            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
