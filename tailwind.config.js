/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-red': 'var(--neon-red)',
        'accent-red': 'var(--accent-red)',
        'dark-bg': 'var(--dark-background)',
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle, rgba(255,0,0,0.2) 0%, rgba(0,0,0,0) 70%)',
      },
      boxShadow: {
        'neon': '0 0 10px var(--neon-red), 0 0 20px var(--neon-red)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slideIn 1s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-in forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
    },
  },
  plugins: [],
};