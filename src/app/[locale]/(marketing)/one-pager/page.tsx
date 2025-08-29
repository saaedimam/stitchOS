export const metadata = { title: "One‑Pager" };

export default function OnePager() {
  return (
    <div className="container-narrow py-16">
      <h1 className="font-display text-4xl">StitchOS – One‑Pager</h1>
      <p className="mt-4">Print this page to PDF for a shareable one‑pager.</p>
      <ul className="mt-6 list-disc pl-6 space-y-2">
        <li>Real-time RFID tracking for textiles</li>
        <li>Modules: Edge Ingest, Core API, Ledger, Trace, Control</li>
        <li>Outcomes: 30–40% loss reduction, faster flow, audit trails</li>
      </ul>
    </div>
  );
}
