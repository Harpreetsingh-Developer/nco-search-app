"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Heart,
  FileText,
  Settings,
  TrendingUp,
  MapPin,
  Clock,
  Building,
  Eye,
  Trash2,
  Edit,
  Bell,
  Download,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const mockSavedJobs = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "TechCorp India",
    location: "Bangalore",
    type: "Full-time",
    salary: "₹15-25 LPA",
    savedDate: "2024-01-15",
    status: "active",
  },
  {
    id: "2",
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Mumbai",
    type: "Remote",
    salary: "₹12-20 LPA",
    savedDate: "2024-01-10",
    status: "active",
  },
  {
    id: "3",
    title: "Product Manager",
    company: "StartupXYZ",
    location: "Delhi",
    type: "Full-time",
    salary: "₹18-30 LPA",
    savedDate: "2024-01-08",
    status: "expired",
  },
]

const mockApplications = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "WebTech Solutions",
    appliedDate: "2024-01-12",
    status: "under_review",
    location: "Pune",
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "InnovateLabs",
    appliedDate: "2024-01-05",
    status: "interview_scheduled",
    location: "Bangalore",
  },
  {
    id: "3",
    title: "Software Engineer",
    company: "TechStart",
    appliedDate: "2023-12-28",
    status: "rejected",
    location: "Mumbai",
  },
]

const mockRecommendations = [
  {
    id: "1",
    title: "Senior React Developer",
    company: "ModernTech",
    location: "Bangalore",
    match: 95,
    type: "Full-time",
  },
  {
    id: "2",
    title: "JavaScript Engineer",
    company: "CodeCraft",
    location: "Remote",
    match: 88,
    type: "Contract",
  },
  {
    id: "3",
    title: "Frontend Architect",
    company: "DesignTech",
    location: "Mumbai",
    match: 82,
    type: "Full-time",
  },
]

export default function DashboardPage() {
  const { user, isAuthenticated, logout } = useAuth()
  const router = useRouter()
  const [profileCompletion, setProfileCompletion] = useState(65)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated || !user) {
    return null
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "under_review":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      case "interview_scheduled":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      case "accepted":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "under_review":
        return "Under Review"
      case "interview_scheduled":
        return "Interview Scheduled"
      case "rejected":
        return "Not Selected"
      case "accepted":
        return "Accepted"
      default:
        return "Applied"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-navy-900 dark:text-white">
              IntelliNCO
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>
              <ThemeToggle />
              <Button variant="outline" onClick={logout} size="sm">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-lg">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold text-navy-900 dark:text-white">{user.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{user.email || user.phone || "Job Seeker"}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Profile Completion</span>
                      <span className="text-sm font-medium">{profileCompletion}%</span>
                    </div>
                    <Progress value={profileCompletion} className="h-2" />
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-2 text-red-500" />
                    <span className="text-sm">Saved Jobs</span>
                  </div>
                  <span className="font-semibold">{mockSavedJobs.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-sm">Applications</span>
                  </div>
                  <span className="font-semibold">{mockApplications.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-sm">Profile Views</span>
                  </div>
                  <span className="font-semibold">24</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Recommended for You
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockRecommendations.map((job) => (
                        <div
                          key={job.id}
                          className="flex items-center justify-between p-4 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <div className="flex-1">
                            <h3 className="font-semibold text-navy-900 dark:text-white">{job.title}</h3>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                              <Building className="w-4 h-4 mr-1" />
                              {job.company}
                              <MapPin className="w-4 h-4 ml-3 mr-1" />
                              {job.location}
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Badge variant="secondary">{job.match}% match</Badge>
                            <Button size="sm">View</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Applied to Frontend Developer at WebTech Solutions</span>
                        <span className="text-xs text-gray-500">2 days ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Saved Data Scientist position at Analytics Pro</span>
                        <span className="text-xs text-gray-500">5 days ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm">Updated profile information</span>
                        <span className="text-xs text-gray-500">1 week ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="saved" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Heart className="w-5 h-5 mr-2" />
                        Saved Jobs ({mockSavedJobs.length})
                      </span>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockSavedJobs.map((job) => (
                        <div
                          key={job.id}
                          className="flex items-center justify-between p-4 border dark:border-gray-700 rounded-lg"
                        >
                          <div className="flex-1">
                            <h3 className="font-semibold text-navy-900 dark:text-white">{job.title}</h3>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                              <Building className="w-4 h-4 mr-1" />
                              {job.company}
                              <MapPin className="w-4 h-4 ml-3 mr-1" />
                              {job.location}
                              <Clock className="w-4 h-4 ml-3 mr-1" />
                              {job.type}
                            </div>
                            <div className="flex items-center mt-2">
                              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                                {job.salary}
                              </span>
                              <span className="text-xs text-gray-500 ml-3">
                                Saved on {new Date(job.savedDate).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {job.status === "expired" && (
                              <Badge variant="secondary" className="text-xs">
                                Expired
                              </Badge>
                            )}
                            <Button size="sm" variant="outline">
                              View
                            </Button>
                            <Button size="sm">Apply</Button>
                            <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-700">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="applications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      My Applications ({mockApplications.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockApplications.map((application) => (
                        <div
                          key={application.id}
                          className="flex items-center justify-between p-4 border dark:border-gray-700 rounded-lg"
                        >
                          <div className="flex-1">
                            <h3 className="font-semibold text-navy-900 dark:text-white">{application.title}</h3>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                              <Building className="w-4 h-4 mr-1" />
                              {application.company}
                              <MapPin className="w-4 h-4 ml-3 mr-1" />
                              {application.location}
                            </div>
                            <span className="text-xs text-gray-500">
                              Applied on {new Date(application.appliedDate).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Badge className={getStatusColor(application.status)}>
                              {getStatusText(application.status)}
                            </Badge>
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Account Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Name</label>
                          <p className="text-gray-600 dark:text-gray-400">{user.name}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Contact</label>
                          <p className="text-gray-600 dark:text-gray-400">{user.email || user.phone}</p>
                        </div>
                        <Button variant="outline">Edit Profile</Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Preferences</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>Email Notifications</span>
                          <Button variant="outline" size="sm">
                            Configure
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Job Alerts</span>
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Privacy Settings</span>
                          <Button variant="outline" size="sm">
                            Update
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-red-600 dark:text-red-400">Danger Zone</h3>
                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
                        >
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
