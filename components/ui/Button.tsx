import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = 'px-4 py-2 text-slate-400 text-center border border-emerald-400/90 rounded-md hover:bg-emerald-100/5 hover:text-lightestslate transition-all duration-300'
  
  const variantStyles = {
    primary: baseStyles,
    secondary: baseStyles
  }

  return (
    <button 
      className={`${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
