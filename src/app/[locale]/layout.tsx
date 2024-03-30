import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "~/lib/utils";
import { siteConfig } from "~/lib/constants";
import { NavBar } from "~/components/nav-bar";
import { SocialMedia } from "~/components/social-media";
import { Footer } from "~/components/footer";
import { locales } from "~/i18n-config";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          {children}
          <Footer />
          <SocialMedia />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
