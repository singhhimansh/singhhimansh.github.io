'use client'

import React from 'react'
import Tilt from 'react-parallax-tilt'
import { skills } from '@/lib/constants'
import { Section } from './ui/Section'
import { SectionHeader } from './ui/SectionHeader'

interface SkillCardProps {
  skill: string
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <Tilt scale={1.4} tiltMaxAngleX={50} tiltMaxAngleY={50} transitionSpeed={2500}>
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
      <SectionHeader title="Technologies I know" />

      <div className="lg:w-3/5 mt-20 md:mt-28 flex flex-row flex-wrap gap-x-2 gap-y-3 md:gap-x-6 md:gap-y-8">
        {skills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </div>
    </Section>
  )
}
