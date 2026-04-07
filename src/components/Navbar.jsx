import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ scrollY }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrollY > 50 
        ? 'glass-effect border-b border-neon-blue/20' 
        : 'transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-cyan flex items-center justify-center group-hover:shadow-glow transition-all">
              <span className="font-bold text-dark-bg">I</span>
            </div>
            <span className="hidden md:block font-bold text-lg text-gradient">Ishwari Satpute</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-medium font-medium relative group hover:scale-105 "
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-cyan group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg font-semibold text-sm hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-neon-blue" />
            ) : (
              <Menu className="w-6 h-6 text-neon-blue" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden glass-effect border-t border-neon-blue/20 py-4 space-y-3 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-300 hover:text-neon-blue hover:bg-neon-blue/5 rounded transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg font-semibold transition-all duration-300 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
