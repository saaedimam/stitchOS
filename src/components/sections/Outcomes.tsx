import { Card } from "@/components/ui/card";

export function Outcomes({ t }: { t: (k: string)=>string }) {
  const items = ["outcomes.loss", "outcomes.flow", "outcomes.accountability"];
  return (
    <section className="container-narrow py-16">
      <h2 className="font-display text-3xl">{t("sections.outcomes")}</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {items.map(k => (
          <Card key={k}><p className="text-lg">{t(k)}</p></Card>
        ))}
      </div>
    </section>
  );
}
