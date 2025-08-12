"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/lib/language-context"
import { LanguageSelector } from "@/components/language-selector"
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Shield,
  FileText,
  Users,
  Globe,
  Accessibility,
  Award,
  Building,
  Clock,
} from "lucide-react"

export function Footer() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Government Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-orange-400 mb-4">IntelliNCO</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                AI-powered job search and career portal by the Government of India, helping citizens find employment
                opportunities through advanced NCO-2015 classification.
              </p>
              <div className="flex items-center space-x-2 mb-2">
                <Building className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-gray-300">Ministry of Statistics & Programme Implementation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-gray-300">Government of India Initiative</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                {t.home}
              </Link>
              <Link href="/jobs" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                {t.jobs}
              </Link>
              <Link href="/dashboard" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                {t.dashboard}
              </Link>
              <Link href="/search" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                Advanced {t.search}
              </Link>
              <Link href="/help" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                {t.helpDocumentation}
              </Link>
              <Link href="/admin" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                {t.adminPanel}
              </Link>
            </div>
          </div>

          {/* Services & Resources */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Services & Resources</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center text-gray-300 hover:text-orange-400 transition-colors text-sm">
                <FileText className="w-4 h-4 mr-2" />
                NCO-2015 Classification
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-orange-400 transition-colors text-sm">
                <Globe className="w-4 h-4 mr-2" />
                {t.apiDocumentation}
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-orange-400 transition-colors text-sm">
                <Users className="w-4 h-4 mr-2" />
                Employer Portal
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-orange-400 transition-colors text-sm">
                <Accessibility className="w-4 h-4 mr-2" />
                Accessibility Features
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-orange-400 transition-colors text-sm">
                <Shield className="w-4 h-4 mr-2" />
                Data Privacy & Security
              </a>
            </div>
          </div>

          {/* Contact & Updates */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact & Updates</h4>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-2 text-orange-400" />
                <span>+91-11-2338-7000</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-2 text-orange-400" />
                <span>support@intellinco.gov.in</span>
              </div>
              <div className="flex items-start text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-orange-400 flex-shrink-0" />
                <span>
                  Sardar Patel Bhawan, Parliament Street,
                  <br />
                  New Delhi - 110001, India
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h5 className="text-sm font-medium text-white mb-3">Get Job Alerts</h5>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-400"
                  required
                />
                <Button type="submit" size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Language Selector */}
            <div>
              <h5 className="text-sm font-medium text-white mb-3">Language</h5>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Government Compliance Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <h5 className="text-sm font-medium text-white mb-1">Secure Platform</h5>
            <p className="text-xs text-gray-400">Government-grade security</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Accessibility className="w-6 h-6 text-blue-400" />
            </div>
            <h5 className="text-sm font-medium text-white mb-1">Accessible Design</h5>
            <p className="text-xs text-gray-400">WCAG 2.1 AA compliant</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Globe className="w-6 h-6 text-orange-400" />
            </div>
            <h5 className="text-sm font-medium text-white mb-1">Multi-Language</h5>
            <p className="text-xs text-gray-400">6+ Indian languages</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-6 h-6 text-purple-400" />
            </div>
            <h5 className="text-sm font-medium text-white mb-1">24/7 Available</h5>
            <p className="text-xs text-gray-400">Always accessible</p>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center items-center space-x-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center">
            Privacy Policy
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center">
            Terms of Service
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center">
            Accessibility Statement
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center">
            RTI Information
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center">
            Grievance Redressal
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>

        {/* Government Logos and Certifications */}
        <div className="flex flex-wrap justify-center items-center space-x-8 mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">🇮🇳</span>
            </div>
            <span className="text-gray-400 text-xs">Digital India</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <span className="text-gray-400 text-xs">ISO 27001 Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">♿</span>
            </div>
            <span className="text-gray-400 text-xs">Accessibility Compliant</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-2">{t.copyright}</p>
          <p className="text-gray-500 text-xs">
            This website is designed, developed and hosted by the National Informatics Centre (NIC),
            <br />
            Ministry of Electronics & Information Technology, Government of India.
          </p>
          <p className="text-gray-500 text-xs mt-2">Last updated: January 2024 | Version 2.1.0</p>
        </div>
      </div>
    </footer>
  )
}
