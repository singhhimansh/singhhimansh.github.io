'use client'

import React from 'react'
import { SocialLinks } from './ui/SocialLinks'

export const Footer: React.FC = () => {
  return (
    <section id="copyright" className="copyright m-10 mb-5 flex justify-center text-slate-400">
      <div className="flex flex-col items-center">
        <SocialLinks variant="footer" className="md:invisible" />

        <div className="mt-3 w-full flex flex-nowrap gap-4 items-center opacity-50">
          <hr className="w-8 md:w-28 h-px" />
          <h1 className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Himanshu Singh
          </h1>
          <hr className="w-8 md:w-28 h-px" />
        </div>
      </div>
    </section>
  )
}
