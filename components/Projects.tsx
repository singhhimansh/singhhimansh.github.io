'use client'

import React from 'react'
import Tilt from 'react-parallax-tilt'
import projects from '@/lib/projects.json'
import { Section } from './ui/Section'
import { SectionHeader } from './ui/SectionHeader'
import { ExternalLink } from './ui/ExternalLink'
import 'animate.css'

interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  img: string
  hide?: boolean
  tech: string[]
  url: string
  git: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0

  const handleCardClick = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Tilt tiltMaxAngleY={8} tiltMaxAngleX={8}>
      <div
        onClick={handleCardClick}
        className={`group items-center my-24 md:my-32 lg:mx-10 h-96 relative md:grid md:grid-cols-12 gap-3 select-none cursor-pointer ${
          isEven ? 'text-right' : 'text-left'
        }`}
        title={project.title}
      >
        <div
          className={`z-[1] p-5 md:p-0 h-[90%] bg-[#112240]/90 backdrop-blur-[3px] md:backdrop-blur-none md:bg-transparent absolute top-0 left-0 md:relative flex flex-col justify-center border md:border-none rounded-md border-emerald-200/40 w-full ${
            isEven
              ? 'md:col-span-8 lg:col-span-6 md:col-end-13 lg:col-end-13'
              : 'md:col-span-8 lg:col-span-6 md:col-start-1'
          }`}
        >
          <h1 className="group-hover:text-teal-400 font-bold tracking-wider text-2xl md:text-3xl text-lightestslate hover:text-teal-400 duration-200">
            {project.title}
          </h1>
          <h2 className="group-hover:text-amber-200 duration-200 mt-1 mb-4 text-base text-teal-400/80">
            {project.subtitle}
          </h2>
          <p className="z-[1] text-lg my-4 md:p-5 md:bg-[#112240]/90 rounded-md text-lightslate font-calibre md:backdrop-blur-sm">
            {project.description}
          </p>
          <div
            className={`text-sm flex flex-nowrap gap-3 md:gap-5 font-mono text-teal-400/80 ${
              isEven ? 'justify-end' : 'justify-start'
            }`}
          >
            {project.tech.map((tech) => (
              <h3 key={tech}>{tech}</h3>
            ))}
          </div>
          <div className="m-2" onClick={(e) => e.stopPropagation()}>
            <ExternalLink 
              href={project.git} 
              type="github" 
              title={`${project.title} git repository`}
              className="inline mr-4"
            />
            <ExternalLink 
              href={project.url} 
              type="website" 
              title={`${project.title} website`}
              className="inline"
            />
          </div>
        </div>

        <img
          className={`absolute md:h-4/5 lg:h-full top-0 md:top-10 lg:top-0 left-0 z-0 h-[90%] rounded-lg object-fill saturate-0 hover:saturate-100 duration-200 self-center ${
            isEven
              ? 'md:col-start-1 md:col-span-8'
              : 'md:col-start-5 md:col-span-8'
          }`}
          src={`/data/img/projects/${project.img}`}
          alt=""
        />
      </div>
    </Tilt>
  )
}

export const Projects: React.FC = () => {
  const visibleProjects = projects
    .filter((project) => !project.hide)
    .sort((a, b) => a.id - b.id)

  return (
    <Section id="projects" className="text-slate-400">
      <SectionHeader title="Projects I have built" />

      <div>
        {visibleProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </Section>
  )
}
