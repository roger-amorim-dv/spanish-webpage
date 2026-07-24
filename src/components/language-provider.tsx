"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Locale, locales, messages } from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof messages)["es"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    const saved = window.localStorage.getItem("habla-locale");
    if (locales.includes(saved as Locale)) {
      const timer = window.setTimeout(() => setLocaleState(saved as Locale), 0);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem("habla-locale", next);
    document.documentElement.lang = next === "pt" ? "pt-BR" : next;
  };

  const value = useMemo(() => ({ locale, setLocale, t: messages[locale] }), [locale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
