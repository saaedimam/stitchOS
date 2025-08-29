import { Hero } from "@/components/sections/Hero";
import { ModulesGrid } from "@/components/sections/ModulesGrid";
import { Outcomes } from "@/components/sections/Outcomes";
import { FinalCTA } from "@/components/sections/CTA";
import { getDictionary, type Locale } from "@/lib/i18n";
import JsonLdHome from "./JsonLdHome";

export default async function Page({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  const t = (k: string) => k.split(".").reduce((o: any, i: string) => (o ? o[i] : null), dict) ?? k;
  const variant = process.env.NEXT_PUBLIC_EXPERIMENT_HERO ?? "control";
  return (
    <>
      <Hero t={t} locale={params.locale} variant={variant} />
      <ModulesGrid t={t} />
      <Outcomes t={t} />
      <FinalCTA t={t} locale={params.locale} />
      <JsonLdHome />
    </>
  );
}
