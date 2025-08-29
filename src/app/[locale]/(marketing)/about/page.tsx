import { getDictionary, type Locale } from "@/lib/i18n";

export default async function About({ params }: { params: { locale: Locale } }) {
  const d = await getDictionary(params.locale);
  return (
    <div className="container-narrow py-16 space-y-6">
      <h1 className="font-display text-4xl">About</h1>
      <p>{d.content.about}</p>
      <h2 className="font-display text-2xl mt-8">Mission</h2>
      <p>{d.content.mission}</p>
      <h2 className="font-display text-2xl mt-8">Vision</h2>
      <p>{d.content.vision}</p>
    </div>
  );
}
