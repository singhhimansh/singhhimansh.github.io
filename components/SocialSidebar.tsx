'use client'

import React from 'react'
import { SocialLinks } from './ui/SocialLinks'
import 'animate.css'

export const SocialSidebar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-14 invisible md:visible animate__animated animate__fadeInUp">
      <SocialLinks variant="sidebar" />
    </div>
  )
}
