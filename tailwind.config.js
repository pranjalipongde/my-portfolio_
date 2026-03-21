/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f0ede3',
        grid: '#d8d4c4',
        olive: '#6b7645',
        'olive-dark': '#4a5230',
        'olive-light': '#8a9a5b',
        bark: '#c8b89a',
        charcoal: '#2c2c2c',
        blush: '#e8a0a0',
        sky: '#7eb5d6',
        folder: '#f5c842',
      },
      fontFamily: {
        display: ['"Special Elite"', 'serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
        body: ['"Nunito"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(to right, #d8d4c4 1px, transparent 1px),
          linear-gradient(to bottom, #d8d4c4 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '28px 28px',
      },
      boxShadow: {
        'window': '4px 4px 0px 0px #6b7645',
        'window-hover': '6px 6px 0px 0px #4a5230',
        'btn': '3px 3px 0px 0px #4a5230',
        'btn-hover': '1px 1px 0px 0px #4a5230',
        'icon': '2px 2px 0px 0px #4a5230',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'typewriter': 'typewriter 2s steps(30) forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
