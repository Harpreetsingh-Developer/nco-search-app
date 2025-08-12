"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"
import { languageNames, type Language } from "@/lib/translations"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="w-10 h-10 p-0 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Select language"
        >
          <Globe className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {Object.entries(languageNames).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code as Language)}
            className={`cursor-pointer ${
              language === code ? "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400" : ""
            }`}
          >
            <span className="flex items-center justify-between w-full">
              {name}
              {language === code && <span className="text-orange-500">✓</span>}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
