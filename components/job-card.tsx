"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MapPin, Clock, Building, Heart, TrendingUp } from "lucide-react"
import { AuthModal } from "@/components/auth-modal"
import { useAuth } from "@/lib/auth-context"

interface JobCardProps {
  job: {
    id: string
    title: string
    company: string
    location: string
    type: string
    trending?: boolean
    description?: string
    salary?: string
    posted?: string
  }
}

export function JobCard({ job }: JobCardProps) {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const { isAuthenticated } = useAuth()

  const handleApply = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true)
    } else {
      // Handle authenticated application
      alert("Application submitted successfully!")
    }
  }

  const handleSave = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true)
    } else {
      setIsSaved(!isSaved)
      // Save to user's saved jobs
    }
  }

  const handleAuthSuccess = () => {
    // After successful auth, proceed with the original action
    alert("You can now apply for jobs!")
  }

  return (
    <>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-navy-900 dark:text-white mb-1">{job.title}</h3>
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                <Building className="w-4 h-4 mr-1" />
                {job.company}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {job.trending && (
                <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSave}
                className={`p-2 ${isSaved ? "text-red-500" : "text-gray-400"}`}
              >
                <Heart className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pb-3">
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {job.location}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {job.type}
            </div>
          </div>

          {job.description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">{job.description}</p>
          )}

          {job.salary && (
            <div className="text-sm font-medium text-green-600 dark:text-green-400 mb-2">{job.salary}</div>
          )}

          {job.posted && <div className="text-xs text-gray-500 dark:text-gray-500">Posted {job.posted}</div>}
        </CardContent>

        <CardFooter className="pt-3">
          <div className="flex space-x-2 w-full">
            <Button variant="outline" className="flex-1 bg-transparent">
              View Details
            </Button>
            <Button
              onClick={handleApply}
              className="flex-1 bg-navy-900 hover:bg-navy-800 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Apply Now
            </Button>
          </div>
        </CardFooter>
      </Card>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
        jobTitle={job.title}
      />
    </>
  )
}
