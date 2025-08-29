export function Footer({ locale, t }: { locale: string; t: (k: string) => string }) {
  return (
    <footer className="mt-24 border-t border-white/15">
      <div className="container-narrow py-10 text-sm flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} StitchOS. {t("footer.rights")}</p>
        <nav aria-label="Footer">
          <a className="mr-6 underline" href={`/${locale}/privacy`}>{t("footer.privacy")}</a>
          <a className="underline" href={`/${locale}/terms`}>{t("footer.terms")}</a>
        </nav>
      </div>
    </footer>
  );
}
