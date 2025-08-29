import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA({ t, locale }: { t: (k: string)=>string, locale: string }) {
  return (
    <section className="container-narrow py-16 text-center">
      <h2 className="font-display text-3xl">{t("sections.ready")}</h2>
      <div className="mt-6 flex justify-center gap-4">
        <Button asChild><Link href="https://calendly.com/">{t("cta.demo")}</Link></Button>
        <Button variant="outline" asChild><Link href={`/${locale}/contact`}>{t("nav.contact")}</Link></Button>
      </div>
    </section>
  );
}
