import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { DefaultSeo } from "next-seo";
import SEO from "../../../next-seo.config";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getDictionary, type Locale } from "@/lib/i18n";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const dynamic = "force-static";

export async function generateMetadata({
  params
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getDictionary(params.locale);
  return {
    title: t.content.brand,
    description: t.content.short,
    alternates: {
      languages: {
        en: "/en",
        bn: "/bn"
      }
    }
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  const t = (k: string) => k.split(".").reduce((o: any, i: string) => (o ? o[i] : null), dict) ?? k;

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <head>
        <DefaultSeo {...SEO} />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.className} ${outfit.className}`}>
        <a href="#main" className="skip-link">Skip to content</a>
        <ThemeProvider>
          <Providers>
            <Header locale={params.locale} t={t} />
            <main id="main">{children}</main>
            <Footer locale={params.locale} t={t} />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
