import React from 'react'
import Link from 'next/link'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  onClick?: () => void
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  children, 
  className = '',
  target = '_self',
  onClick
}) => {
  return (
    <Link 
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
