import React, { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'


export  function TypingEffect({ texts = [], speed = 50 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (!texts.length) return;

    const timeout = setTimeout(() => {
      if (forward) {
        if (subIndex < texts[index].length) {
          setSubIndex(subIndex + 1);
        } else {
          setForward(false);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex(subIndex - 1);
        } else {
          setForward(true);
          setIndex((index + 1) % texts.length);
        }
      }
    }, forward ? speed : speed / 2);

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward, texts, speed]);

  return (
    <span>
      {texts[index]?.substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative pt-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center animate-fade-in">
        {/* Greeting Badge */}
        <div className="mb-6 inline-block">
          <div className="glass-effect px-4 py-2 rounded-full border border-neon-blue/30">
            <p className="text-sm text-neon-cyan">👋 Welcome to my portfolio</p>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient">Hi, I'm Ishwari</span>
        </h1>

        {/* Typing effect title */}
        <div className="h-24 mb-8 flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-blue font-bold">
            <TypingEffect
              texts={[
                "Java Full Stack Developer",
                "Cybersecurity Explorer",
                "AI & ML Explorer",
                ""
              ]}
              speed={100}
            />
          </h2>
        </div>

        {/* Project Highlight
        <div className="mb-8 inline-block mx-auto">
          <div className="glass-effect px-6 py-3 rounded-lg border border-neon-blue/40 hover:border-neon-blue/70 transition-all duration-300 hover:shadow-glow">
            <p className="text-sm md:text-base text-neon-cyan font-semibold">
              🚀 Featured: CTI-MAF - AI-Powered Cyber Threat Intelligence System
            </p>
          </div>
        </div> */}

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Building scalable, high-performance web applications with Java and modern full stack technologies. Specializing in clean architecture, efficient backend systems, and secure solutions for real-world challenges.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 px-4">
          <a
            href="/ishwari_satpute_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-lg bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg font-bold text-lg btn-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-10 py-4 rounded-lg glass-effect border border-neon-blue/60 text-neon-blue font-bold text-lg hover:shadow-glow hover:border-neon-blue/100 transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            Let's Connect
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-neon-blue" />
        </div>
      </div>
    </div>
  )
}
