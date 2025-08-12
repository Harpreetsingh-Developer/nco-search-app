"use client"

import { useState, useRef, useEffect } from "react"
import {
  Search,
  Mic,
  Settings,
  HelpCircle,
  ExternalLink,
  X,
  Accessibility,
  Type,
  Contrast,
  Play,
  SkipForward,
  Keyboard,
  MousePointer,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"

// ... existing interfaces ...
interface NCOResult {
  code: string
  title: string
  sector: string
  confidence: number
  division: string
  group: string
  subGroup: string
  keyTasks: string[]
  isFavorited: boolean
}

interface SearchSuggestion {
  text: string
  type: "occupation" | "skill" | "industry"
  count?: number
}

interface AdvancedFilters {
  exactPhrase: string
  excludeWords: string
  selectedDivision: string
  selectedSkillLevel: string
  selectedSectors: string[]
  confidenceThreshold: number
}

interface AccessibilitySettings {
  highContrast: boolean
  fontSize: number
  reducedMotion: boolean
  screenReader: boolean
  keyboardNavigation: boolean
}

const tourSteps = [
  {
    target: "#search-input",
    title: "Search Bar",
    content: "Enter job titles, skills, or descriptions here. Use natural language for best results.",
  },
  {
    target: "#voice-search",
    title: "Voice Search",
    content: "Click the microphone to search using voice input in multiple languages.",
  },
  {
    target: "#advanced-search",
    title: "Advanced Search",
    content: "Use advanced filters to refine your search with specific criteria.",
  },
  {
    target: "#filters-panel",
    title: "Filter Panel",
    content: "Apply filters by sector, skill level, and confidence threshold.",
  },
  {
    target: "#results-area",
    title: "Search Results",
    content: "View detailed NCO codes with confidence scores and hierarchical information.",
  },
]

export default function NCOSearchPage() {
  // ... existing state variables ...
  const [searchQuery, setSearchQuery] = useState("")
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("english")
  const [isListening, setIsListening] = useState(false)
  const [searchResults, setSearchResults] = useState<NCOResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([])
  const [searchHistory, setSearchHistory] = useState<string[]>([
    "Software Engineer",
    "Data Analyst",
    "Teacher",
    "Nurse",
  ])
  const [synonymSuggestions, setSynonymSuggestions] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<"relevance" | "confidence" | "alphabetical">("relevance")
  const [advancedFilters, setAdvancedFilters] = useState<AdvancedFilters>({
    exactPhrase: "",
    excludeWords: "",
    selectedDivision: "All Divisions",
    selectedSkillLevel: "All Skill Levels",
    selectedSectors: [],
    confidenceThreshold: 75,
  })

  // Help and Accessibility State
  const [showHelpModal, setShowHelpModal] = useState(false)
  const [showTour, setShowTour] = useState(false)
  const [currentTourStep, setCurrentTourStep] = useState(0)
  const [accessibilitySettings, setAccessibilitySettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 16,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: true,
  })
  const [showAccessibilityPanel, setShowAccessibilityPanel] = useState(false)

  const searchInputRef = useRef<HTMLInputElement>(null)

  const sectors = ["Information Technology", "Healthcare", "Education", "Manufacturing", "Agriculture", "Finance"]

  // Added complete accessibility settings effect
  useEffect(() => {
    const root = document.documentElement
    if (accessibilitySettings.highContrast) {
      root.classList.add("high-contrast")
    } else {
      root.classList.remove("high-contrast")
    }

    root.style.fontSize = `${accessibilitySettings.fontSize}px`

    if (accessibilitySettings.reducedMotion) {
      root.style.setProperty("--animation-duration", "0s")
    } else {
      root.style.removeProperty("--animation-duration")
    }
  }, [accessibilitySettings])

  // Added keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey) {
        switch (e.key) {
          case "h":
            e.preventDefault()
            setShowHelpModal(true)
            break
          case "a":
            e.preventDefault()
            setShowAccessibilityPanel(true)
            break
          case "s":
            e.preventDefault()
            searchInputRef.current?.focus()
            break
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Added mock search functionality
  const handleSearch = async () => {
    if (!searchQuery.trim()) return

    setIsSearching(true)
    setHasSearched(true)

    // Add to search history
    if (!searchHistory.includes(searchQuery)) {
      setSearchHistory((prev) => [searchQuery, ...prev.slice(0, 9)])
    }

    // Mock search results
    setTimeout(() => {
      const mockResults: NCOResult[] = [
        {
          code: "25120001",
          title: "Software Developer",
          sector: "Information Technology",
          confidence: 95,
          division: "Professionals",
          group: "Information and Communications Technology Professionals",
          subGroup: "Software and Applications Developers and Analysts",
          keyTasks: ["Design software applications", "Write and test code", "Debug programs"],
          isFavorited: false,
        },
        {
          code: "25120002",
          title: "Systems Analyst",
          sector: "Information Technology",
          confidence: 88,
          division: "Professionals",
          group: "Information and Communications Technology Professionals",
          subGroup: "Software and Applications Developers and Analysts",
          keyTasks: ["Analyze system requirements", "Design system solutions", "Test implementations"],
          isFavorited: false,
        },
      ]
      setSearchResults(mockResults)
      setIsSearching(false)
    }, 1500)
  }

  const startTour = () => {
    setShowTour(true)
    setCurrentTourStep(0)
  }

  const nextTourStep = () => {
    if (currentTourStep < tourSteps.length - 1) {
      setCurrentTourStep(currentTourStep + 1)
    } else {
      setShowTour(false)
      setCurrentTourStep(0)
    }
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b-4 border-orange-500 shadow-sm" role="banner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                  <div
                    className="w-8 h-8 bg-gradient-to-b from-orange-500 via-white to-green-600 rounded-full border-2 border-gray-300"
                    aria-hidden="true"
                  ></div>
                  <div>
                    <h1 className="text-lg font-bold text-navy-900">IntelliNCO</h1>
                    <p className="text-xs text-gray-600">AI-Powered NCO Search</p>
                  </div>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowAccessibilityPanel(true)}
                      aria-label="Open accessibility settings"
                    >
                      <Accessibility className="w-4 h-4 mr-2" />
                      <span className="sr-only">Accessibility</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Accessibility Settings (Alt+A)</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowHelpModal(true)}
                      aria-label="Open help and documentation"
                    >
                      <HelpCircle className="w-4 h-4 mr-2" />
                      Help
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Help & Documentation (Alt+H)</p>
                  </TooltipContent>
                </Tooltip>

                <Link href="/admin">
                  <Button variant="ghost" size="sm" aria-label="Access admin panel">
                    <Settings className="w-4 h-4 mr-2" />
                    Admin
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <nav className="bg-gray-100 border-t" aria-label="Breadcrumb">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
              <ol className="text-sm text-gray-600 flex items-center space-x-2">
                <li>
                  <Link href="/" className="hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" className="text-blue-600 font-medium">
                  NCO Search
                </li>
              </ol>
            </div>
          </nav>
        </header>

        <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" role="main">
          {/* Added search interface */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Search NCO Occupation Codes</h2>
            <p className="text-gray-600 mb-6">Find the right occupation code using AI-powered semantic search</p>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="search-input"
                  ref={searchInputRef}
                  placeholder="Search by job title, skills, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  className="pl-10 pr-12 py-3 text-lg rounded-full border-2 border-gray-200 focus:border-orange-500 transition-colors"
                />
                <Button
                  id="voice-search"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setIsListening(!isListening)}
                >
                  <Mic className={`w-5 h-5 ${isListening ? "text-red-500" : "text-gray-400"}`} />
                </Button>
              </div>

              <div className="flex justify-center mt-4 space-x-4">
                <Button onClick={handleSearch} disabled={isSearching} className="bg-navy-900 hover:bg-navy-800">
                  {isSearching ? "Searching..." : "Search"}
                </Button>
                <Button variant="outline" onClick={() => setIsAdvancedSearch(!isAdvancedSearch)}>
                  Advanced Search
                </Button>
              </div>
            </div>
          </div>

          {/* Added results area */}
          <div id="results-area" className="mt-8">
            {isSearching && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy-900 mx-auto"></div>
                <p className="mt-2 text-gray-600">Searching NCO database...</p>
              </div>
            )}

            {hasSearched && !isSearching && searchResults.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-navy-900">Search Results</h3>
                {searchResults.map((result) => (
                  <Card key={result.code} className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-navy-900">{result.title}</h4>
                        <p className="text-sm text-gray-600">Code: {result.code}</p>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {result.confidence}% match
                      </Badge>
                    </div>
                    <p className="text-gray-700 mb-2">Sector: {result.sector}</p>
                    <div className="text-sm text-gray-600">
                      <p>
                        {result.division} › {result.group} › {result.subGroup}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {hasSearched && !isSearching && searchResults.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600">No results found. Try different keywords or use advanced search.</p>
              </div>
            )}
          </div>
        </main>

        {/* Added Help Modal */}
        <Dialog open={showHelpModal} onOpenChange={setShowHelpModal}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5" />
                Help & Documentation
              </DialogTitle>
              <DialogDescription>Learn how to use the IntelliNCO search system effectively</DialogDescription>
            </DialogHeader>

            <Tabs defaultValue="getting-started" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="search-tips">Search Tips</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>

              <TabsContent value="getting-started" className="space-y-4">
                <h3 className="text-lg font-semibold">Welcome to IntelliNCO</h3>
                <p>IntelliNCO is an AI-powered search system for finding NCO-2015 occupation codes.</p>

                <div className="space-y-2">
                  <Button onClick={startTour} className="w-full">
                    <Play className="w-4 h-4 mr-2" />
                    Start Interactive Tour
                  </Button>
                  <Link href="/help">
                    <Button variant="outline" className="w-full bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Full Documentation
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="search-tips" className="space-y-4">
                <h3 className="text-lg font-semibold">Search Tips</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Use natural language: "software developer" instead of just "developer"</li>
                  <li>Include key skills: "teacher mathematics secondary school"</li>
                  <li>Try synonyms if you don't find results</li>
                  <li>Use voice search for complex queries</li>
                </ul>
              </TabsContent>

              <TabsContent value="features" className="space-y-4">
                <h3 className="text-lg font-semibold">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">🎯 Semantic Search</h4>
                    <p className="text-sm text-gray-600">AI understands context and meaning</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">🎤 Voice Input</h4>
                    <p className="text-sm text-gray-600">Search using voice commands</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">📊 Confidence Scores</h4>
                    <p className="text-sm text-gray-600">See how well results match your query</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">🔍 Advanced Filters</h4>
                    <p className="text-sm text-gray-600">Refine results by sector and skill level</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faq" className="space-y-4">
                <h3 className="text-lg font-semibold">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">What is NCO-2015?</h4>
                    <p className="text-sm text-gray-600">
                      National Classification of Occupations 2015 is India's standard for classifying occupations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">How accurate are the search results?</h4>
                    <p className="text-sm text-gray-600">
                      Our AI system achieves 90%+ accuracy in top-3 results with confidence scoring.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Can I search in regional languages?</h4>
                    <p className="text-sm text-gray-600">
                      Yes, the system supports multiple Indian languages through voice and text input.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>

        {/* Added Accessibility Panel */}
        <Dialog open={showAccessibilityPanel} onOpenChange={setShowAccessibilityPanel}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Accessibility className="w-5 h-5" />
                Accessibility Settings
              </DialogTitle>
              <DialogDescription>Customize the interface for your needs</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Contrast className="w-4 h-4" />
                  <span>High Contrast</span>
                </div>
                <Switch
                  checked={accessibilitySettings.highContrast}
                  onCheckedChange={(checked) =>
                    setAccessibilitySettings((prev) => ({ ...prev, highContrast: checked }))
                  }
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  <span>Font Size: {accessibilitySettings.fontSize}px</span>
                </div>
                <Slider
                  value={[accessibilitySettings.fontSize]}
                  onValueChange={([value]) => setAccessibilitySettings((prev) => ({ ...prev, fontSize: value }))}
                  min={12}
                  max={24}
                  step={1}
                  className="w-full"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MousePointer className="w-4 h-4" />
                  <span>Reduced Motion</span>
                </div>
                <Switch
                  checked={accessibilitySettings.reducedMotion}
                  onCheckedChange={(checked) =>
                    setAccessibilitySettings((prev) => ({ ...prev, reducedMotion: checked }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Keyboard className="w-4 h-4" />
                  <span>Keyboard Navigation</span>
                </div>
                <Switch
                  checked={accessibilitySettings.keyboardNavigation}
                  onCheckedChange={(checked) =>
                    setAccessibilitySettings((prev) => ({ ...prev, keyboardNavigation: checked }))
                  }
                />
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-medium mb-2">Keyboard Shortcuts</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <kbd className="px-1 py-0.5 bg-gray-100 rounded">Alt + H</kbd> - Help
                  </p>
                  <p>
                    <kbd className="px-1 py-0.5 bg-gray-100 rounded">Alt + A</kbd> - Accessibility
                  </p>
                  <p>
                    <kbd className="px-1 py-0.5 bg-gray-100 rounded">Alt + S</kbd> - Focus Search
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Added Guided Tour */}
        {showTour && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-md mx-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">{tourSteps[currentTourStep].title}</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowTour(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-gray-600 mb-6">{tourSteps[currentTourStep].content}</p>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Step {currentTourStep + 1} of {tourSteps.length}
                </span>
                <Button onClick={nextTourStep}>
                  {currentTourStep === tourSteps.length - 1 ? "Finish" : "Next"}
                  <SkipForward className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  )
}
