import { Card } from "@/components/ui/card";
import { getDictionary, type Locale } from "@/lib/i18n";

export default async function PlatformPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  const t = (k: string) => k.split(".").reduce((o: any, i: string) => (o ? o[i] : null), dict) ?? k;

  const rows = [
    { k: "modules.edgeIngest", b: "modules.edgeIngestBlurb" },
    { k: "modules.coreApi", b: "modules.coreApiBlurb" },
    { k: "modules.ledger", b: "modules.ledgerBlurb" },
    { k: "modules.trace", b: "modules.traceBlurb" },
    { k: "modules.control", b: "modules.controlBlurb" }
  ];

  return (
    <div className="container-narrow py-16">
      <h1 className="font-display text-4xl">Platform</h1>
      <p className="mt-2 opacity-90">{t("content.oneLine")}</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {rows.map((r) => (
          <Card key={r.k}>
            <h3 className="font-display text-2xl">{t(r.k)}</h3>
            <p className="mt-2">{t(r.b)}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
