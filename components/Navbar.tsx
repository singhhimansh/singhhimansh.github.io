'use client'

import React, { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import { NavLink } from './ui/NavLink'
import { resume } from '@/lib/constants'
import 'animate.css'

const navItems = [
  { label: 'home', href: '#intro' },
  { label: 'work', href: '#work' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
]

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const NavButton = ({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) => (
    <NavLink href={href} onClick={onClick} className="p-2 hover:text-emerald-300 moveup cursor-pointer">
      <span className="text-emerald-300">h. </span>
      {label}()
    </NavLink>
  )

  return (
    <nav className="navbar p-6 animate__animated animate__fadeInDown">
      <div className="flex flex-1 justify-between">
        {/* Logo */}
        <NavLink href="/" className="ml-6">
          <img src="/data/img/logo/HSc15.png" alt="HS" className="w-12" />
        </NavLink>

        <div className="menuContent">
          {/* Desktop Menu */}
          <div className="hidden font-calibre text-lightslate md:flex gap-3 justify-center items-center">
            {navItems.map((item) => (
              <NavButton key={item.label} label={item.label} href={item.href} />
            ))}
            <NavLink href={resume()} target="_blank" className="mx-2 text-center hover:text-emerald-300 moveup duration-300 px-4 py-2 hover:bg-emerald-100/5 rounded border border-emerald-300/90 cursor-pointer">
              <span className="text-emerald-300">h. </span>
              resume()
            </NavLink>
          </div>

          {/* Mobile Menu */}
          <div className="mr-4 align-middle md:flex md:items-center transition-all ease-in-out duration-500">
            <button
              title="menu"
              className={`relative text-3xl cursor-pointer mx-2 md:hidden block ${isOpen ? 'z-20' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <CgMenuRight
                className={`w-9 h-9 stroke-1 ${isOpen ? 'hidden' : 'stroke-defslate'}`}
              />
              <IoClose
                className={`w-9 h-9 stroke-1 ${isOpen ? 'fill-emerald-600/70 animate__animated animate__rotateIn animate__faster' : 'hidden'}`}
              />
            </button>

            <div
              className={`h-screen md:hidden fixed z-10 font-calibre text-lightslate bg-zinc-800 flex flex-col justify-center items-center gap-10 ${
                isOpen ? 'w-2/3 top-0 right-0 touch-none duration-200 ease-in-out transition-all' : 'hidden top-0 right-0'
              }`}
            >
              {navItems.map((item) => (
                <NavButton key={item.label} label={item.label} href={item.href} onClick={closeMenu} />
              ))}
              <NavLink href={resume()} target="_blank" onClick={closeMenu} className="mx-2 text-center hover:text-emerald-300 moveup duration-300 px-4 py-2 hover:bg-emerald-100/5 rounded border border-emerald-300/90 cursor-pointer">
                <span className="text-emerald-300">h. </span>
                resume()
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
