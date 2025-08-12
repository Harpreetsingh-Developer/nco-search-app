"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Phone, ArrowLeft, CheckCircle } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  jobTitle?: string
}

type AuthStep = "method" | "phone" | "otp" | "google" | "success"

export function AuthModal({ isOpen, onClose, onSuccess, jobTitle }: AuthModalProps) {
  const [step, setStep] = useState<AuthStep>("method")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const { login } = useAuth()

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate OTP sending
    setTimeout(() => {
      setOtpSent(true)
      setStep("otp")
      setIsLoading(false)
    }, 1500)
  }

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate OTP verification
    setTimeout(() => {
      const user = {
        id: "user_" + Date.now(),
        name: "User",
        email: "",
        phone: phoneNumber,
        provider: "phone" as const,
      }
      login(user)
      setStep("success")
      setIsLoading(false)

      setTimeout(() => {
        onSuccess()
        onClose()
        resetModal()
      }, 2000)
    }, 1500)
  }

  const handleGoogleAuth = async () => {
    setIsLoading(true)

    // Simulate Google Auth
    setTimeout(() => {
      const user = {
        id: "google_" + Date.now(),
        name: "John Doe",
        email: "john.doe@gmail.com",
        phone: "",
        provider: "google" as const,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      }
      login(user)
      setStep("success")
      setIsLoading(false)

      setTimeout(() => {
        onSuccess()
        onClose()
        resetModal()
      }, 2000)
    }, 2000)
  }

  const resetModal = () => {
    setStep("method")
    setPhoneNumber("")
    setOtp("")
    setOtpSent(false)
    setIsLoading(false)
  }

  const handleClose = () => {
    onClose()
    resetModal()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {step === "success" ? "Welcome!" : `Apply for ${jobTitle || "this position"}`}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {step === "method" && (
            <div className="space-y-4">
              <p className="text-center text-gray-600 dark:text-gray-400">Sign in to apply for this job</p>

              <Button
                onClick={() => setStep("phone")}
                variant="outline"
                className="w-full h-12 text-left justify-start"
              >
                <Phone className="w-5 h-5 mr-3" />
                Continue with Phone Number
              </Button>

              <div className="relative">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 px-2 text-sm text-gray-500">
                  or
                </span>
              </div>

              <Button
                onClick={handleGoogleAuth}
                disabled={isLoading}
                variant="outline"
                className="w-full h-12 text-left justify-start bg-transparent"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                {isLoading ? "Signing in..." : "Continue with Google"}
              </Button>
            </div>
          )}

          {step === "phone" && (
            <div className="space-y-4">
              <Button variant="ghost" onClick={() => setStep("method")} className="p-0 h-auto font-normal">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              <form onSubmit={handlePhoneSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>

                <Button type="submit" disabled={isLoading || !phoneNumber} className="w-full">
                  {isLoading ? "Sending OTP..." : "Send OTP"}
                </Button>
              </form>
            </div>
          )}

          {step === "otp" && (
            <div className="space-y-4">
              <Button variant="ghost" onClick={() => setStep("phone")} className="p-0 h-auto font-normal">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">We've sent a 6-digit code to</p>
                <p className="font-medium">{phoneNumber}</p>
              </div>

              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="123456"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    required
                    className="mt-1 text-center text-lg tracking-widest"
                  />
                </div>

                <Button type="submit" disabled={isLoading || otp.length !== 6} className="w-full">
                  {isLoading ? "Verifying..." : "Verify OTP"}
                </Button>

                <Button type="button" variant="ghost" onClick={() => setStep("phone")} className="w-full text-sm">
                  Didn't receive code? Resend
                </Button>
              </form>
            </div>
          )}

          {step === "success" && (
            <div className="text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <div>
                <h3 className="text-lg font-semibold">Successfully signed in!</h3>
                <p className="text-gray-600 dark:text-gray-400">You can now apply for jobs and save your favorites.</p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
