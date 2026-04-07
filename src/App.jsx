import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import FloatingElements from './components/FloatingElements'

export default function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative gradient-bg min-h-screen text-white">
      <FloatingElements />
      <Navbar scrollY={scrollY} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="certifications">
          <Certifications />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-dark-border/30 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4">
          <p className="text-gray-400 text-sm">
            Crafted with <span className="text-neon-blue">❤️</span> by Ishwari
          </p>
          <p className="text-gray-500 text-xs">
            © 2026 All rights reserved
          </p>
        </div>
      </footer>
    </div>
  )
}
