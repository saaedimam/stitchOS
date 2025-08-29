import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header({ locale, t }: { locale: string; t: (k: string) => string }) {
  const nav = [
    { href: `/${locale}`, label: t("nav.home") },
    { href: `/${locale}/platform`, label: t("nav.platform") },
    { href: `/${locale}/solutions/factory`, label: t("nav.solutions") },
    { href: `/${locale}/pricing`, label: t("nav.pricing") },
    { href: `/${locale}/docs/overview`, label: t("nav.docs") },
    { href: `/${locale}/about`, label: t("nav.about") },
    { href: `/${locale}/contact`, label: t("nav.contact") }
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-charcoal/60">
      <div className="container-narrow flex items-center justify-between py-3">
        <Link href={`/${locale}`} aria-label="StitchOS Home">
          <Logo />
        </Link>
        <nav aria-label="Primary">
          <ul className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <li key={n.href}>
                <Link className="hover:opacity-80" href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link href={locale === "en" ? "/bn" : "/en"} className="text-sm underline">
            {locale === "en" ? "বাংলা" : "EN"}
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
