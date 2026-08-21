'use client'

import React from 'react'
import Tilt from 'react-parallax-tilt'
import { skills } from '@/lib/constants'
import { Section } from './ui/Section'

interface SkillCardProps {
  skill: string
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <Tilt scale="1.4" tiltMaxAngleX={50} tiltMaxAngleY={50} transitionSpeed={2500}>
      <img
        className="w-12 shrink m-3 object-scale-down grayscale hover:grayscale-0 hover:scale-105 transition"
        title={skill}
        src={`/data/img/skills/${skill}.png`}
        alt={skill}
      />
    </Tilt>
  )
}

export const Skills: React.FC = () => {
  return (
    <Section className="my-28 self-start justify-center">
      <div className="my-5 flex items-center gap-4">
        <h1 className="capitalize text-lightestslate font-calibre text-3xl md:text-4xl font-semibold tracking-wide whitespace-nowrap">
          Technologies I know
        </h1>
        <hr className="whitespace-nowrap w-1/6 h-px bg-lightestslate opacity-50" />
      </div>

      <div className="lg:w-3/5 mt-20 md:mt-28 flex flex-row flex-wrap gap-x-2 gap-y-3 md:gap-x-6 md:gap-y-8">
        {skills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </div>
    </Section>
  )
}
