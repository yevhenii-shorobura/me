"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const detectLang = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const queryLang = params.get("lang");
        if (queryLang === "de" || queryLang === "en") {
          return queryLang;
        }

        const savedLang = localStorage.getItem("portfolio_lang");
        if (savedLang === "de" || savedLang === "en") {
          return savedLang;
        }

        if (
          typeof navigator !== "undefined" &&
          navigator.language &&
          navigator.language.toLowerCase().startsWith("de")
        ) {
          return "de";
        }
      } catch {
        // Ignore errors in sandboxed environments
      }
      return "en";
    };

    const targetLang = detectLang();
    if (targetLang !== "en") {
      queueMicrotask(() => {
        setLang(targetLang);
        if (typeof document !== "undefined") {
          document.documentElement.lang = targetLang;
        }
      });
    }
  }, []);

  const changeLang = (newLang) => {
    if (newLang !== "en" && newLang !== "de") return;
    setLang(newLang);
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("portfolio_lang", newLang);
        if (typeof document !== "undefined") {
          document.documentElement.lang = newLang;
        }

        const url = new URL(window.location.href);
        url.searchParams.set("lang", newLang);
        window.history.replaceState({}, "", url.toString());
      }
    } catch {
      // Ignore
    }
  };

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
