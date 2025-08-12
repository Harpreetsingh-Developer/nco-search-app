"use client"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Search, Mic, ArrowRight, ChevronUp, TrendingUp, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/lib/language-context"
import { LanguageSelector } from "@/components/language-selector"
// Added Footer component import
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useRef } from "react"

export default function LandingPage() {
  const { t } = useLanguage()

  const [showSearchBar, setShowSearchBar] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [typingText, setTypingText] = useState("")
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0)
  const [selectedSector, setSelectedSector] = useState("")
  const [personalizedSuggestions, setPersonalizedSuggestions] = useState([])

  const placeholders = [t.searchPlaceholder, "Software Engineer", "Data Analyst", "Teacher", "Nurse"]

  const jobSectors = [
    { id: "finance", name: t.finance, icon: "💰", count: "1,200+ jobs" },
    { id: "healthcare", name: t.healthcare, icon: "🏥", count: "850+ jobs" },
    { id: "edtech", name: t.edtech, icon: "📚", count: "650+ jobs" },
    { id: "technology", name: t.technology, icon: "💻", count: "2,100+ jobs" },
    { id: "manufacturing", name: t.manufacturing, icon: "🏭", count: "900+ jobs" },
    { id: "retail", name: t.retail, icon: "🛍️", count: "750+ jobs" },
  ]

  const mockSuggestions = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp India",
      location: "Bangalore",
      type: "Full-time",
      trending: true,
    },
    { title: "Data Scientist", company: "Analytics Pro", location: "Mumbai", type: "Remote", trending: false },
    { title: "Product Manager", company: "StartupXYZ", location: "Delhi", type: "Full-time", trending: true },
    { title: "UX Designer", company: "Design Studio", location: "Pune", type: "Contract", trending: false },
  ]

  const featuresRef = useRef(null)
  const howItWorksRef = useRef(null)
  const statsRef = useRef(null)
  const sectorsRef = useRef(null)
  const suggestionsRef = useRef(null)

  const featuresInView = useInView(featuresRef, { once: true })
  const howItWorksInView = useInView(howItWorksRef, { once: true })
  const statsInView = useInView(statsRef, { once: true })
  const sectorsInView = useInView(sectorsRef, { once: true })
  const suggestionsInView = useInView(suggestionsRef, { once: true })

  useEffect(() => {
    const loadPersonalizedSuggestions = () => {
      const userPreferences = localStorage.getItem("userJobPreferences")
      const recentSearches = localStorage.getItem("recentJobSearches")

      if (userPreferences || recentSearches) {
        setPersonalizedSuggestions(mockSuggestions)
      } else {
        setPersonalizedSuggestions(mockSuggestions.filter((job) => job.trending))
      }
    }

    loadPersonalizedSuggestions()
  }, [])

  // Typing animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSearchBar(true)

      let currentText = ""
      let charIndex = 0
      const currentPhrase = placeholders[currentPlaceholder]

      const typeInterval = setInterval(() => {
        if (charIndex < currentPhrase.length) {
          currentText += currentPhrase[charIndex]
          setTypingText(currentText)
          charIndex++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length)
            setTypingText("")
          }, 2000)
        }
      }, 100)

      return () => clearInterval(typeInterval)
    }, 1000)

    return () => clearTimeout(timer)
  }, [currentPlaceholder])

  // Scroll handler for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSectorClick = (sectorId) => {
    setSelectedSector(selectedSector === sectorId ? "" : sectorId)
    localStorage.setItem("preferredJobSector", sectorId)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="fixed top-6 right-6 z-50 flex items-center space-x-2">
        <LanguageSelector />
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full opacity-10 dark:opacity-20" viewBox="0 0 1200 800">
            <motion.path
              d="M300,200 Q400,150 500,200 Q600,180 700,220 Q800,200 900,250 Q850,350 800,400 Q750,450 700,500 Q600,520 500,480 Q400,500 300,450 Q250,350 300,200 Z"
              fill="none"
              stroke="#1e40af"
              className="dark:stroke-blue-400"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />

            {[...Array(8)].map((_, i) => (
              <motion.line
                key={i}
                x1={200 + i * 100}
                y1={300 + Math.sin(i) * 50}
                x2={400 + i * 80}
                y2={400 + Math.cos(i) * 60}
                stroke="#f97316"
                className="dark:stroke-orange-400"
                strokeWidth="1"
                opacity="0.6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 2, delay: i * 0.2 }}
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-navy-900 dark:text-white mb-6">{t.heroTitle}</h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">{t.heroSubtitle}</p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">{t.heroDescription}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <Link href="/search">
              <Button
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {t.findJobsNow}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showSearchBar ? 1 : 0, y: showSearchBar ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <Input
                placeholder={typingText || "Search by job title..."}
                className="pl-10 pr-12 py-3 rounded-full border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-orange-500 dark:focus:border-orange-400 transition-colors"
                readOnly
              />
              <Mic className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={sectorsRef} className="py-16 bg-white dark:bg-gray-900 border-b dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-center text-navy-900 dark:text-white mb-12"
          >
            {t.exploreSectors}
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {jobSectors.map((sector, index) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 30 }}
                animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleSectorClick(sector.id)}
                className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                  selectedSector === sector.id
                    ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-400"
                    : "border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-500 bg-white dark:bg-gray-800"
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">{sector.icon}</div>
                  <h3 className="font-semibold text-navy-900 dark:text-white mb-2">{sector.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{sector.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={suggestionsRef} className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={suggestionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center text-navy-900 dark:text-white mb-4">
              {t.recommendedForYou}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Based on your activity and preferences</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalizedSuggestions.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={suggestionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer border dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy-900 dark:text-white mb-2">{job.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{job.company}</p>
                  </div>
                  {job.trending && (
                    <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>

                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {job.type}
                  </div>
                </div>

                <Button
                  size="sm"
                  className="w-full mt-4 bg-navy-900 hover:bg-navy-800 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  {t.viewDetails}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={featuresRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-navy-900 dark:text-white mb-16"
          >
            {t.powerfulFeatures}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t.smartJobMatching,
                description: t.smartJobMatchingDesc,
                delay: 0.2,
              },
              {
                title: t.voiceEnabledSearch,
                description: t.voiceEnabledSearchDesc,
                delay: 0.4,
              },
              {
                title: t.personalizedRecommendations,
                description: t.personalizedRecommendationsDesc,
                delay: 0.6,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: feature.delay }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={howItWorksRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={howItWorksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-navy-900 dark:text-white mb-16"
          >
            {t.howItWorks}
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
            {[
              { title: t.searchJobs, subtitle: "AI-Powered Matching", step: 1 },
              { title: t.getRecommendations, subtitle: "Personalized Results", step: 2 },
              { title: t.applyConnect, subtitle: "Direct Applications", step: 3 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={howItWorksInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-orange-500 dark:bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.subtitle}</p>

                {index < 2 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={howItWorksInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1 + index * 0.3 }}
                    className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-orange-300 dark:bg-orange-500 origin-left"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={statsRef} className="py-20 bg-navy-900 dark:bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50,000+", label: t.activeJobListings },
              { number: "3,600+", label: t.occupationsIndexed },
              { number: "< 2s", label: t.searchResponseTime },
              { number: "95%+", label: t.matchAccuracy },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-orange-500 dark:text-orange-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-300 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Replaced simple footer with comprehensive Footer component */}
      <Footer />

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition-colors z-40"
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </div>
  )
}
