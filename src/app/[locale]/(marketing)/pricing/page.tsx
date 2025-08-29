import { Card } from "@/components/ui/card";

export default function Pricing() {
  const plans = [
    { name: "Starter", price: "$—", features: ["Essentials", "Email support"] },
    { name: "Pro", price: "$—", features: ["Advanced features", "Priority support"] },
    { name: "Enterprise", price: "Contact", features: ["Custom", "SLA"] }
  ];
  return (
    <div className="container-narrow py-16">
      <h1 className="font-display text-4xl">Pricing</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {plans.map(p => (
          <Card key={p.name}>
            <h3 className="font-display text-2xl">{p.name}</h3>
            <p className="mt-2 text-2xl">{p.price}</p>
            <ul className="mt-4 space-y-1">{p.features.map(f => <li key={f}>• {f}</li>)}</ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
