import React from 'react'
import { Github, ExternalLink, Code2, Zap } from 'lucide-react'
import ScrollAnimated from './ScrollAnimated'

const ProjectCard = ({ title, description, technologies, github, live, featured = false }) => {
  return (
    <ScrollAnimated>
      <div className={`group relative ${featured ? 'md:col-span-2' : ''}`}>
        {/* Animated background glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue/20 to-neon-cyan/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className={`glass-effect border border-neon-blue/40 rounded-2xl overflow-hidden hover-scale transition-all duration-300 relative card-shine ${
          featured ? 'p-8 md:p-10 border-neon-blue/60' : 'p-6'
        }`}>
          {/* Content */}
          <div className="relative z-10">
            {/* Header with icon */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-lg bg-neon-blue/20 group-hover:bg-neon-blue/30 transition-colors duration-300">
                    <Code2 className="w-5 h-5 text-neon-blue" />
                  </div>
                  <span className="text-xs font-bold text-neon-cyan uppercase tracking-widest">
                    {featured ? '⭐ Featured Project' : '📌 Project'}
                  </span>
                </div>
                <h3 className={`font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-cyan transition-all duration-300 ${
                  featured ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
                }`}>
                  {title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className={`text-gray-300 mb-6 leading-relaxed font-light ${featured ? 'text-base' : 'text-sm'}`}>
              {description}
            </p>

            {/* Tech Stack with premium styling */}
            <div className="mb-8">
              <p className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest flex items-center gap-2">
                <Zap className="w-4 h-4 text-neon-blue" /> Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-2 rounded-full bg-gradient-to-r from-neon-blue/15 to-neon-cyan/10 border border-neon-blue/50 text-neon-cyan text-xs font-bold hover:from-neon-blue/25 hover:to-neon-cyan/15 hover:border-neon-blue/80 hover:shadow-glow transition-all duration-300 transform hover:scale-110"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-6 border-t border-neon-blue/20">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-effect border border-neon-blue/50 text-gray-300 hover:text-neon-blue hover:border-neon-blue/80 hover:shadow-glow transition-all duration-300 group/link font-semibold text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity group-hover/link:translate-x-1 transform" />
                </a>
              )}
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-effect border border-neon-cyan/50 text-gray-300 hover:text-neon-cyan hover:border-neon-cyan/80 hover:shadow-glow transition-all duration-300 group/link font-semibold text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimated>
  )
}

export default function Projects() {
  const projects = [
    {
      title: 'CTI-MAF',
      description: 'An AI-based Cyber Threat Intelligence System that analyzes and predicts emerging cyber threats. Uses machine learning algorithms to detect anomalies and provide actionable intelligence for security teams. Integrates with threat databases and provides real-time threat assessments.',
      technologies: ['Python', 'Machine Learning', 'TensorFlow', 'MongoDB', 'REST API', 'Cybersecurity'],
      github: 'https://github.com/ishwari',
      live: null,
      featured: true
    },
    {
      title: 'Job Portal Appliaction',
      description: 'A modern full-stack Job Portal Web Application built with Spring Boot + React, designed to connect job seekers and employers with advanced features, clean UI, and real-world functionality.',
      technologies: ['Java 21', 'SpringBoot', 'JWT Authentication', 'MongoDB', 'React', 'Axios'],
      github: 'https://github.com/Satpute-Ishwari/Job-portal.git',
      live: null,
      featured: false
    },
    {
      title: 'Port Scan Anlyzer',
      description: 'The AI Port Scan Risk Intelligence Engine transforms raw Nmap scan results into structured, explainable, and actionable security intelligence.',
      technologies: ['Python', 'Machine Learning', 'TensorFlow', 'MongoDB', 'REST API', 'Cybersecurity'],
      github: 'https://github.com/Vaibhav-Sandbhor/AI_PortScan_Analyzer.git',
      live: null,
      featured: false
    },
  ]

  return (
    <section className="py-20 px-4 md:py-32 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title with premium styling */}
        <ScrollAnimated>
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-neon-blue to-neon- rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-black mb-6">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-neon-blue to-neon- rounded-full"></div>
            <p className="text-gray-400 text-lg max-w-2xl mt-4">Showcasing my expertise in full-stack development, scalable systems, and innovative solutions.</p>
          </div>
        </ScrollAnimated>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              {...project}
            />
          ))}
        </div>

        {/* View More with premium button */}
        <ScrollAnimated delay={400}>
          <div className="mt-20 text-center">
            <a
              href="https://github.com/satpute-ishwari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg glass-effect border border-neon-blue/60 text-neon-blue font-bold hover:shadow-glow-lg transition-all duration-300 hover:scale-110 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/10 to-neon-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Github className="w-5 h-5" />
              <span className="relative">Explore More Projects</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </ScrollAnimated>
      </div>
    </section>
  )
}
