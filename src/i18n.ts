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

export function localizePath(path: string, language: Language): string {
  if (language === "en") return path;
  return englishToSpanish[path] ?? `/es${path}`;
}

export function alternateLanguagePath(path: string, language: Language): string {
  if (language === "es") {
    const englishPath = path.replace(/^\/es(?=\/|$)/, "") || "/";
    return englishPath === "/blog" ? "/blog" : englishPath;
  }

  if (path.startsWith("/blog/")) return "/es/blog";
  return englishToSpanish[path] ?? "/es/";
}
