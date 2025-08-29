export type Locale = "en" | "bn";

export async function getDictionary(locale: Locale) {
  switch (locale) {
    case "bn":
      return (await import("@/locales/bn/common.json")).default;
    case "en":
    default:
      return (await import("@/locales/en/common.json")).default;
  }
}
