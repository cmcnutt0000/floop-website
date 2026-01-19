"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations, Language, TranslationKeys } from "./translations";
import { usePathname, useRouter } from "next/navigation";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
  getLocalizedPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
  getLocalizedPath: (path) => path,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // Determine language from URL path
  const getLanguageFromPath = useCallback((): Language => {
    if (pathname.startsWith("/es")) return "es";
    if (pathname.startsWith("/fr")) return "fr";
    return "en";
  }, [pathname]);

  const [language, setLanguageState] = useState<Language>(getLanguageFromPath());

  useEffect(() => {
    setLanguageState(getLanguageFromPath());
  }, [pathname, getLanguageFromPath]);

  const setLanguage = (lang: Language) => {
    // Remove current language prefix if exists
    let newPath = pathname;
    if (pathname.startsWith("/es") || pathname.startsWith("/fr")) {
      newPath = pathname.slice(3) || "/";
    }

    // Add new language prefix (English has no prefix)
    if (lang !== "en") {
      newPath = `/${lang}${newPath === "/" ? "" : newPath}`;
    }

    router.push(newPath);
  };

  const getLocalizedPath = (path: string): string => {
    // Don't add language prefix to external links or app.floopedu.com
    if (path.startsWith("http") || path.startsWith("https://app.floopedu.com")) {
      return path;
    }

    if (language === "en") {
      return path;
    }

    // Add language prefix
    if (path === "/") {
      return `/${language}`;
    }
    return `/${language}${path}`;
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLocalizedPath }}>
      {children}
    </LanguageContext.Provider>
  );
}
