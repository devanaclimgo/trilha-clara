'use client'

import type React from 'react'
import InfoButton from '@/components/InfoButton'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
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

      <div className="relative z-10 min-h-screen px-4 py-12 grid grid-rows-[auto,1fr,auto] gap-8">
        <header className="flex items-center justify-center">
          <Hero />
        </header>

        <main className="w-full max-w-5xl mx-auto grid grid-cols-1 gap-6 sm:gap-8 lg:gap-12 md:grid-cols-2 items-start">
          <section className="flex flex-col items-center space-y-6 sm:space-y-8">
            <AboutSection />
            <DonationSection />
          </section>

          <section className="flex justify-center md:justify-end">
            <div className="w-full max-w-md mx-4 sm:mx-0">
              <FormCard />
            </div>
          </section>
        </main>

        <footer className="flex items-center justify-center mt-4">
          <Footer />
        </footer>
      </div>
    </div>
  )
}
