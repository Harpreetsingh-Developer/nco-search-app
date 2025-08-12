"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { translations, type Language, type Translations } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved language preference or default to English
    const savedLanguage = localStorage.getItem("language") as Language
    const browserLanguage = navigator.language.split("-")[0] as Language
    const supportedLanguages: Language[] = ["en", "hi", "ta", "bn", "gu", "mr"]

    const initialLanguage = savedLanguage || (supportedLanguages.includes(browserLanguage) ? browserLanguage : "en")

    setLanguageState(initialLanguage)
  }, [])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    if (mounted) {
      localStorage.setItem("language", newLanguage)
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
