"use client"

import { ArrowLeft, Book, Video, FileText, MessageCircle, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              <div>
                <h1 className="text-lg font-bold text-gray-900">Help Center</h1>
                <p className="text-xs text-gray-600">NCO Search System Documentation</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers, learn about features, and get the most out of the NCO Search System
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Book className="w-5 h-5 text-blue-600" />
                <span>User Guide</span>
              </CardTitle>
              <CardDescription>Complete guide to using the NCO Search System</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Getting started with NCO search</li>
                <li>• Understanding search results</li>
                <li>• Using advanced search features</li>
                <li>• Managing favorites and history</li>
              </ul>
              <Button className="w-full mt-4 bg-transparent" variant="outline">
                <Book className="w-4 h-4 mr-2" />
                Read Guide
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Video className="w-5 h-5 text-green-600" />
                <span>Video Tutorials</span>
              </CardTitle>
              <CardDescription>Step-by-step video guides and demonstrations</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Basic search techniques</li>
                <li>• Voice search tutorial</li>
                <li>• Advanced filtering options</li>
                <li>• Accessibility features overview</li>
              </ul>
              <Button className="w-full mt-4 bg-transparent" variant="outline">
                <Video className="w-4 h-4 mr-2" />
                Watch Videos
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-purple-600" />
                <span>Documentation</span>
              </CardTitle>
              <CardDescription>Technical documentation and API references</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• NCO-2015 classification system</li>
                <li>• Search algorithm details</li>
                <li>• Data export formats</li>
                <li>• Integration guidelines</li>
              </ul>
              <Button className="w-full mt-4 bg-transparent" variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                View Docs
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">How do I find the right occupation code?</h4>
                <p className="text-sm text-gray-600">
                  Start with specific job titles or descriptions. Use the confidence score to gauge accuracy.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Can I search in regional languages?</h4>
                <p className="text-sm text-gray-600">
                  Yes, the system supports Hindi, Bengali, Tamil, and other regional languages.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">What does the confidence score mean?</h4>
                <p className="text-sm text-gray-600">
                  It indicates how well the search result matches your query, with higher scores being more accurate.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">How do I use voice search?</h4>
                <p className="text-sm text-gray-600">
                  Click the microphone icon and speak clearly. The system will convert your speech to text.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources & Downloads</CardTitle>
              <CardDescription>Helpful resources and downloadable materials</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-sm">NCO-2015 Complete Classification</h4>
                  <p className="text-xs text-gray-600">PDF • 2.4 MB</p>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-sm">Search Quick Reference</h4>
                  <p className="text-xs text-gray-600">PDF • 0.8 MB</p>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-sm">Keyboard Shortcuts Guide</h4>
                  <p className="text-xs text-gray-600">PDF • 0.3 MB</p>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5 text-blue-600" />
                <span>Need More Help?</span>
              </CardTitle>
              <CardDescription>Can't find what you're looking for? Get in touch with our support team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center space-x-4">
                <Button>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
                <Button variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Report Issue
                </Button>
              </div>
              <p className="text-sm text-gray-600">Response time: Usually within 24 hours</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
