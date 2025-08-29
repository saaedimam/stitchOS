import { Card } from "@/components/ui/card";

const modules = [
  { key: "modules.edgeIngest", blurbKey: "modules.edgeIngestBlurb" },
  { key: "modules.coreApi", blurbKey: "modules.coreApiBlurb" },
  { key: "modules.ledger", blurbKey: "modules.ledgerBlurb" },
  { key: "modules.trace", blurbKey: "modules.traceBlurb" },
  { key: "modules.control", blurbKey: "modules.controlBlurb" }
];

export function ModulesGrid({ t }: { t: (k: string)=>string }) {
  return (
    <section className="container-narrow py-16">
      <h2 className="font-display text-3xl">{t("sections.howItWorks")}</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {modules.map(m => (
          <Card key={m.key}>
            <h3 className="font-display text-2xl">{t(m.key)}</h3>
            <p className="mt-2 opacity-90">{t(m.blurbKey)}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
