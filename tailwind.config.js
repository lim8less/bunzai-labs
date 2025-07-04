/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'futura': ['Futura', 'Century Gothic', 'sans-serif'],
      },
      colors: {
        'buns-primary': '#D2691E',
        'buns-light': '#F4A460',
        'buns-dark': '#8B4513',
        'buns-cream': '#FFF8DC',
        'buns-accent': '#CD853F',
        'background-dark': '#111827',
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.2)',
        'glass-brown': 'rgba(210, 105, 30, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '16px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glow': '0 0 10px rgba(210, 105, 30, 0.3)',
        'glow-strong': '0 0 36px rgba(210, 105, 30, 0.65)',
        'wireframe': '0 0 1px rgba(210, 105, 30, 0.8)',
        'glass-glow': '0 2px 8px rgba(210, 105, 30, 0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 8px rgba(210, 105, 30, 0.2)' },
          '100%': { boxShadow: '0 0 15px rgba(210, 105, 30, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
