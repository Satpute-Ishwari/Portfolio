import React from 'react'

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Premium animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-neon-blue/15 to-transparent rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-bl from-neon-cyan/10 to-transparent rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-tr from-neon-blue/8 to-transparent rounded-full blur-3xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-tl from-neon-cyan/5 to-transparent rounded-full blur-2xl opacity-25" style={{ animationDelay: '3s' }}></div>
      
      {/* Premium grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(0, 191, 255, 0.4) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 191, 255, 0.4) 1px, transparent 1px)`,
        backgroundSize: '4rem 4rem'
      }}></div>
      
      {/* Diagonal lines for premium feel */}
      <div className="absolute inset-0 opacity-[0.008] pointer-events-none" style={{
        backgroundImage: `linear-gradient(45deg, rgba(0, 191, 255, 0.2) 1px, transparent 1px),
                          linear-gradient(-45deg, rgba(0, 212, 255, 0.2) 1px, transparent 1px)`,
        backgroundSize: '5rem 5rem'
      }}></div>
      
      {/* Subtle radial gradient vignette */}
      <div className="absolute inset-0 bg-radial-gradient opacity-20 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 14, 39, 0.3) 100%)'
      }}></div>
    </div>
  )
}
