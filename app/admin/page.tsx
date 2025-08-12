"use client"

import { useState } from "react"
import {
  BarChart3,
  Users,
  Database,
  Settings,
  Download,
  Upload,
  Search,
  TrendingUp,
  Activity,
  Shield,
  AlertTriangle,
  CheckCircle,
  Edit,
  Trash2,
  Plus,
  ArrowLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

interface AnalyticsData {
  totalSearches: number
  uniqueUsers: number
  avgConfidence: number
  topQueries: { query: string; count: number; avgConfidence: number }[]
  searchTrends: { date: string; searches: number }[]
  sectorDistribution: { sector: string; percentage: number }[]
}

interface NCOCode {
  id: string
  code: string
  title: string
  description: string
  sector: string
  division: string
  status: "active" | "inactive" | "pending"
  lastUpdated: string
  synonyms: string[]
}

interface User {
  id: string
  name: string
  email: string
  role: "admin" | "moderator" | "user"
  department: string
  lastActive: string
  searchCount: number
  status: "active" | "inactive"
}

const mockAnalytics: AnalyticsData = {
  totalSearches: 45678,
  uniqueUsers: 3421,
  avgConfidence: 87.3,
  topQueries: [
    { query: "Software Developer", count: 1250, avgConfidence: 92.1 },
    { query: "Data Analyst", count: 890, avgConfidence: 88.5 },
    { query: "Project Manager", count: 756, avgConfidence: 85.2 },
    { query: "Web Developer", count: 634, avgConfidence: 90.8 },
    { query: "Database Administrator", count: 523, avgConfidence: 86.7 },
  ],
  searchTrends: [
    { date: "2024-01-01", searches: 1200 },
    { date: "2024-01-02", searches: 1350 },
    { date: "2024-01-03", searches: 1180 },
    { date: "2024-01-04", searches: 1420 },
    { date: "2024-01-05", searches: 1380 },
  ],
  sectorDistribution: [
    { sector: "Information Technology", percentage: 35 },
    { sector: "Healthcare", percentage: 22 },
    { sector: "Education", percentage: 18 },
    { sector: "Manufacturing", percentage: 15 },
    { sector: "Finance", percentage: 10 },
  ],
}

const mockNCOCodes: NCOCode[] = [
  {
    id: "1",
    code: "25120101",
    title: "Software Developer",
    description: "Design, develop, test, and maintain software applications and systems.",
    sector: "Information Technology",
    division: "Professionals",
    status: "active",
    lastUpdated: "2024-01-15",
    synonyms: ["Programmer", "Software Engineer", "Application Developer"],
  },
  {
    id: "2",
    code: "25120201",
    title: "Web Developer",
    description: "Create and maintain websites and web applications.",
    sector: "Information Technology",
    division: "Professionals",
    status: "active",
    lastUpdated: "2024-01-12",
    synonyms: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
  },
  {
    id: "3",
    code: "25120301",
    title: "Database Developer",
    description: "Design, implement, and maintain database systems.",
    sector: "Information Technology",
    division: "Professionals",
    status: "pending",
    lastUpdated: "2024-01-10",
    synonyms: ["Database Administrator", "SQL Developer", "Data Engineer"],
  },
]

const mockUsers: User[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@gov.in",
    role: "admin",
    department: "Statistics Division",
    lastActive: "2024-01-15T10:30:00Z",
    searchCount: 245,
    status: "active",
  },
  {
    id: "2",
    name: "Priya Sharma",
    email: "priya.sharma@gov.in",
    role: "moderator",
    department: "Employment Office",
    lastActive: "2024-01-14T16:45:00Z",
    searchCount: 189,
    status: "active",
  },
  {
    id: "3",
    name: "Amit Patel",
    email: "amit.patel@gov.in",
    role: "user",
    department: "Survey Operations",
    lastActive: "2024-01-13T09:15:00Z",
    searchCount: 67,
    status: "inactive",
  },
]

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [isAddingCode, setIsAddingCode] = useState(false)
  const [isAddingUser, setIsAddingUser] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800"
      case "moderator":
        return "bg-blue-100 text-blue-800"
      case "user":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Search
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-blue-600" />
                <div>
                  <h1 className="text-lg font-bold text-gray-900">NCO Admin Panel</h1>
                  <p className="text-xs text-gray-600">System Management Dashboard</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <Activity className="w-3 h-3 mr-1" />
                System Online
              </Badge>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="nco-codes" className="flex items-center space-x-2">
              <Database className="w-4 h-4" />
              <span>NCO Codes</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Users</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Searches</CardTitle>
                  <Search className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockAnalytics.totalSearches.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+12.5% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockAnalytics.uniqueUsers.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+8.2% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Confidence</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockAnalytics.avgConfidence}%</div>
                  <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">System Status</CardTitle>
                  <Activity className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">Online</div>
                  <p className="text-xs text-muted-foreground">99.9% uptime</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity & Top Searches */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Search Queries</CardTitle>
                  <CardDescription>Most searched occupations this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockAnalytics.topQueries.slice(0, 5).map((query, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{query.query}</p>
                          <p className="text-xs text-gray-500">{query.count} searches</p>
                        </div>
                        <Badge variant="secondary" className="ml-2">
                          {query.avgConfidence}% avg
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sector Distribution</CardTitle>
                  <CardDescription>Search queries by sector</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockAnalytics.sectorDistribution.map((sector, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{sector.sector}</span>
                          <span className="text-gray-500">{sector.percentage}%</span>
                        </div>
                        <Progress value={sector.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* System Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
                <CardDescription>Recent system notifications and alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-medium text-yellow-800">Database Maintenance Scheduled</p>
                      <p className="text-sm text-yellow-700">Maintenance window: Jan 20, 2024 02:00-04:00 IST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-medium text-green-800">Search Index Updated</p>
                      <p className="text-sm text-green-700">Successfully updated 1,247 NCO codes with new synonyms</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <Activity className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-medium text-blue-800">New User Registrations</p>
                      <p className="text-sm text-blue-700">15 new users registered in the last 24 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Search Analytics</h2>
                <p className="text-gray-600">Detailed insights into search patterns and performance</p>
              </div>
              <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Search Volume Trends</CardTitle>
                  <CardDescription>Daily search volume over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Chart visualization would be rendered here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Key performance indicators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Average Response Time</span>
                      <span className="font-medium">1.2s</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Search Success Rate</span>
                      <span className="font-medium">94.3%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>User Satisfaction</span>
                      <span className="font-medium">4.6/5</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Detailed Query Analysis</CardTitle>
                <CardDescription>Comprehensive breakdown of search queries and results</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Query</TableHead>
                      <TableHead>Searches</TableHead>
                      <TableHead>Avg Confidence</TableHead>
                      <TableHead>Success Rate</TableHead>
                      <TableHead>Top Result</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockAnalytics.topQueries.map((query, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{query.query}</TableCell>
                        <TableCell>{query.count}</TableCell>
                        <TableCell>{query.avgConfidence}%</TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            96%
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-gray-600">25120101</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* NCO Codes Tab */}
          <TabsContent value="nco-codes" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">NCO Code Management</h2>
                <p className="text-gray-600">Manage occupation codes and classifications</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline">
                  <Upload className="w-4 h-4 mr-2" />
                  Import Codes
                </Button>
                <Dialog open={isAddingCode} onOpenChange={setIsAddingCode}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add NCO Code
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Add New NCO Code</DialogTitle>
                      <DialogDescription>Create a new occupation classification code</DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="code">NCO Code</Label>
                        <Input id="code" placeholder="e.g., 25120101" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="title">Occupation Title</Label>
                        <Input id="title" placeholder="e.g., Software Developer" />
                      </div>
                      <div className="space-y-2 col-span-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Detailed description of the occupation..." />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sector">Sector</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select sector" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="it">Information Technology</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="division">Division</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select division" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="professionals">Professionals</SelectItem>
                            <SelectItem value="managers">Managers</SelectItem>
                            <SelectItem value="technicians">Technicians</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2 col-span-2">
                        <Label htmlFor="synonyms">Synonyms (comma-separated)</Label>
                        <Input id="synonyms" placeholder="e.g., Programmer, Software Engineer, Developer" />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setIsAddingCode(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsAddingCode(false)}>Create Code</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <Input
                  placeholder="Search NCO codes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="max-w-sm"
                />
              </div>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Code</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Sector</TableHead>
                      <TableHead>Division</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockNCOCodes.map((code) => (
                      <TableRow key={code.id}>
                        <TableCell className="font-mono">{code.code}</TableCell>
                        <TableCell className="font-medium">{code.title}</TableCell>
                        <TableCell>{code.sector}</TableCell>
                        <TableCell>{code.division}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(code.status)}>{code.status}</Badge>
                        </TableCell>
                        <TableCell>{code.lastUpdated}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
                <p className="text-gray-600">Manage system users and permissions</p>
              </div>
              <Dialog open={isAddingUser} onOpenChange={setIsAddingUser}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add User
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogDescription>Create a new system user account</DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="user@gov.in" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="user">User</SelectItem>
                          <SelectItem value="moderator">Moderator</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Input id="department" placeholder="e.g., Statistics Division" />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsAddingUser(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setIsAddingUser(false)}>Create User</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Searches</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                        </TableCell>
                        <TableCell>{user.department}</TableCell>
                        <TableCell>{user.searchCount}</TableCell>
                        <TableCell>{new Date(user.lastActive).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">System Settings</h2>
              <p className="text-gray-600">Configure system parameters and preferences</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Search Configuration</CardTitle>
                  <CardDescription>Configure search behavior and parameters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Enable Auto-complete</Label>
                      <p className="text-sm text-gray-500">Show search suggestions as users type</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Voice Search</Label>
                      <p className="text-sm text-gray-500">Enable voice input functionality</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label>Default Confidence Threshold</Label>
                    <Input type="number" defaultValue="75" min="0" max="100" />
                  </div>

                  <div className="space-y-2">
                    <Label>Max Search Results</Label>
                    <Input type="number" defaultValue="50" min="1" max="100" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Preferences</CardTitle>
                  <CardDescription>General system configuration options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Maintenance Mode</Label>
                      <p className="text-sm text-gray-500">Enable system maintenance mode</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Analytics Tracking</Label>
                      <p className="text-sm text-gray-500">Collect usage analytics and metrics</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label>Session Timeout (minutes)</Label>
                    <Input type="number" defaultValue="30" min="5" max="120" />
                  </div>

                  <div className="space-y-2">
                    <Label>Default Language</Label>
                    <Select defaultValue="english">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="hindi">हिंदी</SelectItem>
                        <SelectItem value="bengali">বাংলা</SelectItem>
                        <SelectItem value="tamil">தமிழ்</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Management</CardTitle>
                  <CardDescription>Backup and data management options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Export All Data
                  </Button>

                  <Button variant="outline" className="w-full bg-transparent">
                    <Upload className="w-4 h-4 mr-2" />
                    Import Data
                  </Button>

                  <Button variant="outline" className="w-full bg-transparent">
                    <Database className="w-4 h-4 mr-2" />
                    Backup Database
                  </Button>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 mb-2">Last Backup:</p>
                    <p className="text-sm font-medium">January 15, 2024 at 2:30 AM</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Configure security and access controls</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-gray-500">Require 2FA for admin accounts</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>IP Restrictions</Label>
                      <p className="text-sm text-gray-500">Restrict access by IP address</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="space-y-2">
                    <Label>Password Policy</Label>
                    <Select defaultValue="strong">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic</SelectItem>
                        <SelectItem value="strong">Strong</SelectItem>
                        <SelectItem value="enterprise">Enterprise</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    <Shield className="w-4 h-4 mr-2" />
                    Security Audit Log
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
