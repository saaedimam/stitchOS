import Link from "next/link";
import { WeaveBackdrop } from "@/components/WeaveBackdrop";
import { Button } from "@/components/ui/button";

export function Hero({ t, locale, variant }: { t: (k: string)=>string; locale: string; variant: string }) {
  return (
    <section className="relative overflow-hidden">
      <WeaveBackdrop />
      <div className="container-narrow relative py-28 text-center">
        <h1 className="font-display text-5xl md:text-6xl tracking-tight">
          {t("hero.title")}
        </h1>
        <p className="mt-6 text-lg opacity-90">{t("hero.tagline")}{variant === "variantA" ? " — built for real factories." : ""}</p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button asChild><Link href="https://calendly.com/" aria-label="Book a demo">{t("cta.demo")}</Link></Button>
          <Button variant="outline" asChild><Link href={`/${locale}/one-pager`}>{t("cta.onepager")}</Link></Button>
        </div>
      </div>
    </section>
  );
}
