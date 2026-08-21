'use client'

import React from 'react'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { HiOutlinePhone } from 'react-icons/hi'
import { SiWhatsapp } from 'react-icons/si'
import { Button } from './ui/Button'
import { Section } from './ui/Section'
import { contactInfo } from '@/lib/constants'

export const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      className="my-36 md:w-2/3 font-calibre gap-10 flex flex-col items-center self-center"
    >
      <div className="my-5 w-full flex items-center justify-center gap-4">
        <hr className="whitespace-nowrap w-1/6 h-px bg-lightestslate opacity-60" />
        <h1 className="text-lightestslate font-calibre text-3xl md:text-4xl font-semibold capitalize tracking-wide whitespace-nowrap">
          Get in touch
        </h1>
        <hr className="whitespace-nowrap w-1/6 h-px bg-lightestslate opacity-60" />
      </div>

      <p className="mb-4 w-5/6 md:w-full text-lg text-defslate text-center first-letter:text-xl first-letter:font-medium first-letter:text-emerald-400 first-line:text-emerald-400/80">
        Hey there. Since you have reached down here, implies you must have
        liked my work. I always look forward to work on new, exciting
        projects. So whether you want to discuss some project or just
        wanna say hi, I would love to get back to you.
      </p>

      <div className="flex flex-col gap-5 w-96 text-nowrap">
        <div className="flex gap-4 grow w-full">
          <a
            href={`mailto:${contactInfo.email}`}
            className="w-full px-4 py-2 text-slate-400 text-center border border-emerald-400/90 rounded-md hover:bg-emerald-100/5 hover:text-lightestslate transition-all duration-300 cursor-pointer"
          >
            <HiOutlineMailOpen className="inline-block pb-1" /> Drop a mail
          </a>
          <a
            href={`tel:${contactInfo.phone}`}
            className="w-full px-4 py-2 text-slate-400 text-center border border-emerald-400/90 rounded-md hover:bg-emerald-100/5 hover:text-lightestslate transition-all duration-300 cursor-pointer"
          >
            <HiOutlinePhone className="inline-block pb-1" /> Call Me
          </a>
        </div>
        <a
          href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%20Himanshu,%20Nice%20to%20meet%20you.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex grow w-full px-4 py-2 text-slate-400 text-center border border-emerald-400/90 rounded-md hover:bg-emerald-100/5 hover:text-lightestslate transition-all duration-300 cursor-pointer"
        >
          <SiWhatsapp className="inline-block pb-1" /> Let's talk on WhatsApp
        </a>
      </div>
    </Section>
  )
}
