"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface BirthdayFormProps {
  onSubmit: () => void
}

export function BirthdayForm({ onSubmit }: BirthdayFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    month: "",
    day: "",
    partySize: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-6">
        {/* Form Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Birthday Perks @Focus</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Share your info below and join our birthday list! We&apos;ll text and email you exciting birthday deals,
            help you plan your special day at Focus, and invite you to your own birthday celebration. Let us make your
            big day unforgettable!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 md:p-10 shadow-lg border border-gray-200">
          {/* Full Name */}
          <div className="mb-8">
            <label className="block text-sm font-bold mb-3">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="fullName"
              placeholder="Your name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-8">
            <label className="block text-sm font-bold mb-3">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <Input
              type="tel"
              name="phone"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Email */}
          <div className="mb-8">
            <label className="block text-sm font-bold mb-3">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Birthday */}
          <div className="mb-8">
            <label className="block text-sm font-bold mb-3">
              Your Birthday <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <select
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Month</option>
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((month, i) => (
                    <option key={i} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Day</option>
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Party Size */}
          <div className="mb-8">
            <label className="block text-sm font-bold mb-3">
              How many people do you usually celebrate with? <span className="text-gray-500">(Optional)</span>
            </label>
            <select
              name="partySize"
              value={formData.partySize}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select party size</option>
              <option value="1">Just Me</option>
              <option value="2-5">2-5 People</option>
              <option value="6-10">6-10 People</option>
              <option value="10+">10+ People</option>
            </select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition mb-6"
          >
            Save My Birthday
          </Button>

          {/* Footer Text */}
          <p className="text-xs text-center text-gray-600">
            We&apos;ll only use this to send you birthday perks and reminders. No spam.
          </p>
        </form>
      </div>
    </section>
  )
}
