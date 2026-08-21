'use client'

import React, { useState } from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { GoLinkExternal } from 'react-icons/go'
import { MdLocationOn, MdCalendarMonth } from 'react-icons/md'
import workData from '@/lib/experience'
import { Section } from './ui/Section'
import 'animate.css'

export const WorkExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(workData.length)

  const getExperienceDuration = (work: typeof workData[0]) => {
    const startDate = new Date(work.start)
    const endDate = work.end ? new Date(work.end) : new Date()
    const diff = endDate.getTime() - startDate.getTime()
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
    const months = Math.floor(
      (diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30),
    )
    return `${years > 0 ? `${years} years` : ''} ${
      months > 0 ? `${months} months` : ''
    }`
  }

  return (
    <Section id="work" className="WorkTabs my-40">
      <div className="my-5 flex items-center gap-4">
        <h1 className="text-lightestslate font-calibre text-3xl md:text-4xl font-semibold capitalize tracking-wide whitespace-nowrap">
          I have worked at
        </h1>
        <hr className="whitespace-nowrap w-1/6 h-1px bg-slate-400 opacity-60" />
      </div>

      <div className="md:w-3/4 lg:w-4/5 min-h-[420px] md:min-h-[385px] lg:min-h-[320px] my-20 md:m-16 flex gap-2 md:gap-3 text-slate-400 bg-emerald-100/5 rounded-md">
        {/* Tab buttons */}
        <div className="flex flex-col text-xs md:text-sm">
          {workData.map((work) => (
            <button
              key={work.id}
              onClick={() => setActiveTab(work.id)}
              className={`p-3 px-4 w-full text-left ${
                work.id === workData.length ? 'rounded-tl-md' : ''
              } whitespace-nowrap hover:text-emerald-300 hover:bg-emerald-100/10 duration-300 ${
                activeTab === work.id
                  ? 'text-emerald-300 border-l-2 border-emerald-400'
                  : 'border-l border-emerald-300/25'
              }`}
            >
              <img
                className="w-4 h-4 mr-1 inline rounded-md"
                src={work.favicon}
                alt=""
              />{' '}
              {work.company}
            </button>
          ))}

          <button
            onClick={() => setActiveTab(workData.length + 1)}
            className={`p-3 px-4 w-full text-left whitespace-nowrap hover:text-emerald-300 hover:bg-emerald-100/10 duration-300 ${
              activeTab === workData.length + 1
                ? 'text-emerald-300 border-l-2 border-emerald-400'
                : 'border-l border-emerald-300/25'
            }`}
          >
            <img
              className="w-4 h-4 mr-1 inline rounded-md"
              src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-next-icon-image_1197594.jpg"
              alt=""
            />{' '}
            Next
          </button>
        </div>

        {/* Content display */}
        <div className="w-full min-h-full relative">
          {workData.map((work) => (
            <div
              key={work.id}
              className={`m-2 pr-4 w-full ${
                activeTab === work.id
                  ? 'animate__animated animate__fadeIn'
                  : 'hidden'
              }`}
            >
              <h1 className="text-lightslate font-semibold text-lg md:text-xl tracking-wide">
                {work.title}
              </h1>
              <div className="grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:gap-1 lg:gap-2 mt-1 mb-2 text-nowrap md:mb-4 pr-2">
                <p className="text-sm col-span-1">{work.designation}</p>

                <p className="text-sm flex items-center gap-1 col-span-1">
                  <MdCalendarMonth className="inline-block w-4 h-4" />
                  {work.start} - {work.end === '' ? 'Present' : work.end}
                </p>
                <p className="text-sm flex items-center gap-1 col-span-1">
                  <MdLocationOn className="inline w-4 h-4" />
                  {work.location}
                </p>
                <p className="text-sm flex items-center gap-1 col-span-1">
                  <span className="bg-cyan-500/40 px-2 text-cyan-200 rounded">
                    {getExperienceDuration(work)}
                  </span>
                </p>
              </div>

              <ul className="text-sm ml-4 list-outside tracking-wide marker:text-cyan-300 list-disc">
                {work.discription.map((disc, idx) => (
                  <li key={idx}>{disc}</li>
                ))}
              </ul>
              <div className="m-3 px-2 gap-3 flex">
                {work.git && (
                  <a
                    href={work.git}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TbBrandGithub className="inline hover:fill-emerald-300 w-5 h-5" />
                  </a>
                )}
                {work.website && (
                  <a
                    href={work.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GoLinkExternal className="inline hover:fill-emerald-300 w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}

          <div
            className={`m-2 pr-3 ${
              activeTab === workData.length + 1
                ? 'visibile animate__animated animate__fadeIn'
                : 'invisible'
            }`}
          >
            <h1 className="mb-2 md:mb-4 text-lightslate font-semibold text-lg md:text-xl text-slate-300/90">
              Next at yours company
            </h1>
            <p className="text-sm">
              This section will show a glimpse of projects i would be doing at
              yours company. Wanna discuss the project? Tap on the below
              button.
            </p>
            <a
              href="mailto:s.himanshusingh56@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="m-5 inline-block px-4 py-2 text-sm border border-emerald-300 rounded-md hover:bg-emerald-100/10 hover:border-emerald-500 hover:text-lightslate cursor-pointer"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
