import { getDictionary, type Locale } from "@/lib/i18n";

export default async function DocsOverview({ params }: { params: { locale: Locale } }) {
  const d = await getDictionary(params.locale);
  const c = d.content;
  return (
    <div className="container-narrow py-16 prose prose-invert max-w-none">
      <h1>StitchOS — Overview</h1>
      <p>
        <strong>Brand:</strong> {c.brand}
      </p>
      <p>
        <strong>Tagline:</strong> {c.tagline}
      </p>
      <p>
        <strong>One-line pitch:</strong> {c.oneLine}
      </p>
      <p>
        <strong>About:</strong> {c.about}
      </p>
      <p>
        <strong>Mission:</strong> {c.mission}
      </p>
      <p>
        <strong>Vision:</strong> {c.vision}
      </p>
    </div>
  );
}
