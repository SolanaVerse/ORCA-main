'use client'
import React, { useState } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[color:var(--bg)]/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo size="sm" />
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-orca-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-orca-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-orca-400 transition-colors">Contact</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-orca-600 hover:bg-orca-700 transition-colors">
              Get Quote
            </a>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neutral-800">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-orca-400 transition-colors">Services</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-orca-400 transition-colors">About</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-orca-400 transition-colors">Contact</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-lg bg-orca-600 hover:bg-orca-700 transition-colors text-center">
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}