"use client"

import { useState } from "react"
import { JobCard } from "@/components/job-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

const mockJobs = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "TechCorp India",
    location: "Bangalore",
    type: "Full-time",
    trending: true,
    description:
      "We are looking for a senior software engineer to join our growing team. You will be responsible for developing scalable web applications using modern technologies.",
    salary: "₹15-25 LPA",
    posted: "2 days ago",
  },
  {
    id: "2",
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Mumbai",
    type: "Remote",
    description: "Join our data science team to build machine learning models and derive insights from large datasets.",
    salary: "₹12-20 LPA",
    posted: "1 week ago",
  },
  {
    id: "3",
    title: "Product Manager",
    company: "StartupXYZ",
    location: "Delhi",
    type: "Full-time",
    trending: true,
    description: "Lead product strategy and work with cross-functional teams to deliver innovative solutions.",
    salary: "₹18-30 LPA",
    posted: "3 days ago",
  },
  {
    id: "4",
    title: "UX Designer",
    company: "Design Studio",
    location: "Pune",
    type: "Contract",
    description: "Create beautiful and intuitive user experiences for our digital products.",
    salary: "₹8-15 LPA",
    posted: "5 days ago",
  },
]

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [typeFilter, setTypeFilter] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-navy-900 dark:text-white">
              IntelliNCO
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search jobs, companies, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-navy-900 dark:text-white">{mockJobs.length} Jobs Found</h1>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  )
}
