'use client'

import type React from 'react'
import InfoButton from '@/components/InfoButton'
import Hero from '@/components/Hero'
import FormCard from '@/components/FormCard'
import Footer from '@/components/Footer'
import DonationSection from '@/components/DonationSection'

export default function Home() {
  return (
    <div className="min-h-screen gradient-trilha-soft relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-secondary/20 to-primary/20 blur-3xl"></div>
      </div>

      <InfoButton />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <Hero />

        <div className="w-full max-w-md mx-auto mb-6">
          <FormCard />

          <DonationSection />
        </div>

        <Footer />
      </div>
    </div>
  )
}
