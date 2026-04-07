import React from 'react'
import ScrollAnimated from './ScrollAnimated'
import { Code2, Zap, Shield } from 'lucide-react'

export default function About() {
  return (
    <section className="py-20 px-4 md:py-32 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <ScrollAnimated>
                  <div className="mb-20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-1 w-12 bg-gradient-to-r from-neon-blue to-neon rounded-full"></div>
                      {/* <span className="text-neon-blue text-sm font-bold uppercase tracking-widest"></span> */}
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-black mb-6">
                      <span className="text-gradient">About Me</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-neon-blue to-neon- rounded-full"></div>
                  </div>
                </ScrollAnimated>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Feature Cards */}
          <ScrollAnimated>
            <div className="space-y-5">
              {/* Card 1: Full Stack Development */}
              <div className="group glass-effect border border-neon-blue/30 rounded-2xl p-6 hover:border-neon-blue/70 transition-all duration-300 hover-scale hover:shadow-glow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-neon-blue/20 group-hover:bg-neon-blue/30 transition-colors duration-300 flex-shrink-0">
                    <Code2 className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white mb-2">Full Stack Development</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Expert in building end-to-end solutions with Java, Spring Boot, React, and MongoDB. From API design to responsive frontends.</p>
                  </div>
                </div>
              </div>

              {/* Card 2: Scalable Systems */}
              <div className="group glass-effect border border-neon-blue/30 rounded-2xl p-6 hover:border-neon-blue/70 transition-all duration-300 hover-scale hover:shadow-glow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-neon-cyan/20 group-hover:bg-neon-cyan/30 transition-colors duration-300 flex-shrink-0">
                    <Zap className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white mb-2">Scalable Systems</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Designing high-performance architectures with microservices, REST APIs, and optimized database solutions for enterprise-scale applications.</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Clean Code & Security */}
              <div className="group glass-effect border border-neon-blue/30 rounded-2xl p-6 hover:border-neon-blue/70 transition-all duration-300 hover-scale hover:shadow-glow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-neon-blue/20 group-hover:bg-neon-blue/30 transition-colors duration-300 flex-shrink-0">
                    <Shield className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white mb-2">Clean Code & Security</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Committed to writing maintainable, well-documented code with security best practices and threat intelligence integration.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimated>

          {/* Right side - Text */}
          <ScrollAnimated delay={200}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a developer who builds functional, reliable web applications with Java and modern full stack technologies. I focus on understanding user needs and translating them into efficient, maintainable code.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">What I Do</h3>
                <p className="text-gray-300 leading-relaxed">
                  I develop full-featured web applications using Java on the backend and React for the frontend. My work spans designing RESTful APIs, setting up databases, and creating responsive user interfaces that work smoothly together.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">My Approach</h3>
                <p className="text-gray-300 leading-relaxed">
                  I believe in writing code that works well and can be understood by other developers. I start by understanding the problem clearly, build incrementally, and test thoroughly. Quality and clarity matter more than shortcuts.
                </p>
              </div>

              <div className="pt-6 border-t border-neon-blue/20">
                <p className="text-gray-400 text-sm font-medium">
                  I'm actively seeking opportunities to grow as a developer and contribute to meaningful projects. Always ready to learn, collaborate, and deliver quality work.
                </p>
              </div>
            </div>
          </ScrollAnimated>
        </div>
      </div>
    </section>
  )
}
