import React from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { GoLinkExternal } from 'react-icons/go'

interface ExternalLinkProps {
  href: string
  type: 'github' | 'website'
  title?: string
  className?: string
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ 
  href, 
  type, 
  title,
  className = '' 
}) => {
  const Icon = type === 'github' ? TbBrandGithub : GoLinkExternal
  
  return (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Icon className="inline hover:fill-emerald-300 duration-200 w-5 h-5" />
    </a>
  )
}
