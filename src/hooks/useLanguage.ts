import { useEffect, useMemo, useState } from "react";
import { type Language, translations } from "../data/translations";

const storageKey = "campus-event-studio-language";

const isLanguage = (value: string | null): value is Language => value === "en" || value === "zh";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const stored = window.localStorage.getItem(storageKey);
    return isLanguage(stored) ? stored : "en";
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, language);
    document.documentElement.lang = translations[language].meta.htmlLang;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return value;
}
