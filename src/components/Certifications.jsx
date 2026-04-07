import React from 'react'
import { Award } from 'lucide-react'
import ScrollAnimated from './ScrollAnimated'

const CertificationCard = ({ issuer, title, year }) => (
  <ScrollAnimated>
    <div className="group relative">
      <div className="glass-effect border border-neon-blue/20 rounded-xl p-5 hover:border-neon-blue/50 transition-all duration-300 hover-scale">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="p-2.5 rounded-lg bg-neon-blue/10 group-hover:bg-neon-blue/20 transition-colors duration-300 flex-shrink-0 mt-1">
            <Award className="w-5 h-5 text-neon-blue" />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-white text-sm md:text-base mb-1 group-hover:text-neon-blue transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-400 text-xs md:text-sm">
              {issuer}
            </p>
          </div>

          {/* Year Badge */}
          {year && (
            <div className="flex-shrink-0">
              <span className="inline-block px-3 py-1 rounded-full bg-neon-blue/15 border border-neon-blue/30 text-neon-cyan text-xs font-semibold">
                {year}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  </ScrollAnimated>
)

export default function Certifications() {
  const certifications = [
    {
      issuer: 'Google',
      title: 'Cybersecurity Specialization',
      year: '2024'
    },
    {
      issuer: 'Cisco',
      title: 'Network Technician Career Path',
      year: '2024'
    },
    {
      issuer: 'NPTEL',
      title: 'Programming in Java',
      year: '2023'
    },
    {
      issuer: 'Zscaler',
      title: 'Zero Trust Associate',
      year: '2024'
    }
  ]

  return (
    <section className="py-20 px-4 md:py-32 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <ScrollAnimated>
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-neon-blue to-neon- rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient">Certifications</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-neon-blue to-neon- rounded-full"></div>
            <p className="text-gray-400 text-lg max-w-2xl mt-4">
              Professional certifications validating expertise across cybersecurity, networking, and software development.
            </p>
          </div>
        </ScrollAnimated>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {certifications.map((cert, idx) => (
            <CertificationCard
              key={idx}
              issuer={cert.issuer}
              title={cert.title}
              year={cert.year}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
