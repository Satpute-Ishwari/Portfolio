import React, { useState } from 'react'
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react'
import ScrollAnimated from './ScrollAnimated'

export default function Contact() {

 
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ishwarisatpute451@gmail.com',
      href: 'mailto:ishwarisatpute451@gmail.com'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/satpute-ishwari'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ishwari-satpute'
    }
  ]

  return (
    <section className="py-20 px-4 md:py-32 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <ScrollAnimated>
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full"></div>
              <span className="text-neon-blue text-sm font-bold uppercase tracking-widest">Get In Touch</span>
              <div className="h-1 w-12 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Let's Build Something Great</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Have an exciting opportunity or want to collaborate? I'm always interested in hearing about new projects and challenges. Let's connect and create something impactful together.
            </p>
          </div>
        </ScrollAnimated>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Contact Info & Social */}
          <ScrollAnimated>
            <div className="space-y-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-neon-blue/20 border border-neon-blue/40">
                    <Mail className="w-5 h-5 text-neon-blue" />
                  </div>
                  Contact Info
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((contact, idx) => {
                    const Icon = contact.icon
                    return (
                      <a
                        key={idx}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block"
                      >
                        <div className="glass-effect border border-neon-blue/30 rounded-xl p-5 hover:border-neon-blue/70 transition-all duration-300 hover-scale hover:shadow-glow">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-neon-blue/15 group-hover:bg-neon-blue/25 transition-colors duration-300">
                              <Icon className="w-5 h-5 text-neon-blue" />
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-400 text-sm font-medium">{contact.label}</p>
                              <p className="text-white font-medium group-hover:text-neon-blue transition-colors">
                                {contact.value}
                              </p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-neon-blue transition-all opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-neon-cyan/20 border border-neon-cyan/40">
                    <Linkedin className="w-5 h-5 text-neon-cyan" />
                  </div>
                  Social Links
                </h3>

                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => {
                    const SocialIcon = social.icon
                    return (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 rounded-xl glass-effect border border-neon-blue/30 hover:border-neon-blue/70 text-gray-300 hover:text-neon-blue transition-all duration-300 hover-scale hover:shadow-glow"
                        title={social.label}
                      >
                        <SocialIcon className="w-6 h-6 transform group-hover:scale-125 transition-transform duration-300" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </ScrollAnimated>

          {/* Right side - Contact Form */}
          <ScrollAnimated delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue/15 to-neon-cyan/10 rounded-2xl blur-2xl opacity-50"></div>
              <form 
                action="https://formspree.io/f/mdapbrnk"
                method="POST" 
                className="glass-effect border border-neon-blue/40 rounded-2xl p-8 space-y-6 relative card-shine">
                
                <input type="hidden" name="_subject" value="New message from portfolio!" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"

                    required
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-neon-blue/30 bg-dark-card/50 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/70 focus:shadow-glow transition-all duration-300 font-light"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"

                    required
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-neon-blue/30 bg-dark-card/50 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/70 focus:shadow-glow transition-all duration-300 font-light"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"

                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-neon-blue/30 bg-dark-card/50 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/70 focus:shadow-glow transition-all duration-300 resize-none font-light"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                
                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg font-bold hover:shadow-glow transition-all duration-300 hover:scale-105 uppercase tracking-wider text-sm btn-glow"
                  >
                    Send Message
                  </button>
                
              </form>
            </div>
          </ScrollAnimated>
        </div>

        {/* Additional Info */}
        <ScrollAnimated delay={400}>
          <div className="mt-20 grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { icon: '💬', label: 'Average Response Time', value: '24 hours' },
              { icon: '🌍', label: 'Available For', value: 'Remote & Full-Time' },
            ].map((info, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue/15 to-neon-cyan/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="glass-effect border border-neon-blue/30 rounded-2xl p-8 text-center hover-scale card-shine relative hover:border-neon-blue/60 transition-all duration-300">
                  <span className="text-4xl inline-block mb-4 transform group-hover:scale-125 transition-transform duration-300">{info.icon}</span>
                  <p className="text-gray-400 mb-3 text-sm font-medium uppercase tracking-widest">{info.label}</p>
                  <p className="text-3xl font-bold text-gradient">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimated>
      </div>
    </section>
  )
}
