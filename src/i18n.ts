export type Language = "en" | "es";

export const languageNames: Record<Language, string> = {
  en: "English",
  es: "Español",
};

const englishToSpanish: Record<string, string> = {
  "/": "/es/",
  "/about": "/es/about",
  "/blog": "/es/blog",
  "/portfolio": "/es/portfolio",
  "/contact": "/es/contact",
};

function normalizePath(path: string): string {
  return path.length > 1 ? path.replace(/\/+$/, "") : "/";
}

export function localizePath(path: string, language: Language): string {
  if (language === "en") return path;
  return englishToSpanish[path] ?? `/es${path}`;
}

export function alternateLanguagePath(path: string, language: Language): string {
  const normalizedPath = normalizePath(path);

  if (language === "es") {
    return normalizedPath.replace(/^\/es(?=\/|$)/, "") || "/";
  }

  if (normalizedPath.startsWith("/blog/")) return "/es/blog";
  return englishToSpanish[normalizedPath] ?? "/es/";
}
