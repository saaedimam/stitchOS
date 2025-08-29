'use client';
import { JsonLd } from "@/components/seo/JsonLd";

export default function JsonLdHome() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "StitchOS",
    "url": "https://stitchos.app",
    "logo": "/favicon.svg",
    "sameAs": []
  };
  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "StitchOS RFID Platform",
    "description": "Real-time RFID tracking for textiles with modules: Edge Ingest, Core API, Ledger, Trace, Control.",
    "brand": "StitchOS"
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Does StitchOS track WIP in real time?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, WIP is tracked live across cutting, sewing, finishing, and laundry." } },
      { "@type": "Question", "name": "How does StitchOS reduce loss?", "acceptedAnswer": { "@type": "Answer", "text": "By enforcing WIP caps, alerting on bottlenecks, and maintaining immutable audit trails." } },
      { "@type": "Question", "name": "Which integrations are supported?", "acceptedAnswer": { "@type": "Answer", "text": "We ingest from fixed portals and handheld readers; ERP integrations are roadmap-dependent." } },
      { "@type": "Question", "name": "How is pricing structured?", "acceptedAnswer": { "@type": "Answer", "text": "Starter and Pro tiers; Enterprise is custom — contact us." } }
    ]
  };
  return (<>
    <JsonLd data={org} />
    <JsonLd data={product} />
    <JsonLd data={faq} />
  </>);
}
