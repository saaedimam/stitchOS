import { type DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  titleTemplate: "%s | StitchOS",
  defaultTitle: "StitchOS — The Connected Loom",
  description: "StitchOS is a secure, modular RFID platform for textile production. Track WIP, reduce loss, speed onboarding, and make better decisions with live dashboards and alerts.",
  openGraph: {
    type: "website",
    url: "https://stitchos.app",
    siteName: "StitchOS",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "StitchOS" }]
  },
  twitter: {
    cardType: "summary_large_image"
  },
  additionalMetaTags: [
    { name: "theme-color", content: "#0B1F3A" }
  ]
};

export default config;
