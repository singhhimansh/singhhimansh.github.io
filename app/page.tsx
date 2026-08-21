'use client'

import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Introduction } from '@/components/Introduction'
import { Skills } from '@/components/Skills'
import { WorkExperience } from '@/components/WorkExperience'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { SocialSidebar } from '@/components/SocialSidebar'
import { EmailSidebar } from '@/components/EmailSidebar'

export default function Home() {
  return (
    <div className="Home relative">
      <Navbar />

      {/* Left sidebar: social media links */}
      <SocialSidebar />

      {/* Right sidebar: email */}
      <EmailSidebar />

      <main className="flex justify-center border-0 border-cyan-400">
        <div className="w-11/12 md:w-8/12 md:px-2 border-0 border-purple-600 flex flex-col">
          {/* Introduction */}
          <Introduction />

          {/* Technologies and Skills */}
          <Skills />

          {/* Work experiences */}
          <WorkExperience />

          {/* Projects */}
          <Projects />

          {/* Contact details */}
          <Contact />

          {/* Copyright */}
          <Footer />
        </div>
      </main>
    </div>
  )
}
