/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00bfff',
        'neon-cyan': '#00d4ff',
        'dark-bg': '#0a0e27',
        'dark-card': '#161b39',
        'dark-border': '#1f2749',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 191, 255, 0.3)',
        'glow-sm': '0 0 10px rgba(0, 191, 255, 0.2)',
        'glow-lg': '0 0 30px rgba(0, 191, 255, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      backdropFilter: {
        'glass': 'backdrop-filter blur(4px)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'typing': 'typing 3.5s steps(40, end), blink 0.75s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 191, 255, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 191, 255, 0.4)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: 'rgba(0, 191, 255, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
