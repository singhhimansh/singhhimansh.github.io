import React from 'react'

interface SectionHeaderProps {
  title: string
  position?: 'left' | 'center' | 'right'
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  position = 'left',
  className = '' 
}) => {
  const alignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  }

  const hrOrder = position === 'center' ? 'both' : position === 'left' ? 'after' : 'before'

  return (
    <div className={`my-5 flex items-center gap-4 ${alignmentClasses[position]} ${className}`}>
      {hrOrder === 'before' || hrOrder === 'both' ? (
        <hr className="whitespace-nowrap w-1/6 h-px bg-lightestslate opacity-60" />
      ) : null}
      <h1 className="capitalize text-lightestslate font-calibre text-3xl md:text-4xl font-semibold tracking-wide whitespace-nowrap">
        {title}
      </h1>
      {hrOrder === 'after' || hrOrder === 'both' ? (
        <hr className="whitespace-nowrap w-1/6 h-px bg-lightestslate opacity-60" />
      ) : null}
    </div>
  )
}
