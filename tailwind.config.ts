import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains-mono': ['var(--font-jetbrains-mono)', 'monospace'],
        'share-tech-mono': ['var(--font-share-tech-mono)', 'monospace'],
        'orbitron': ['var(--font-orbitron)', 'sans-serif'],
      },
      colors: {
        // Matrix-inspired green color palette
        'matrix': {
          50: '#f0fff4',
          100: '#dcfce7', 
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80', // Primary matrix green
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'terminal': {
          50: '#0a0a0a',
          100: '#1a1a1a',
          200: '#2a2a2a',
          300: '#3a3a3a',
          400: '#4a4a4a',
          500: '#5a5a5a',
          600: '#6a6a6a',
          700: '#7a7a7a',
          800: '#8a8a8a',
          900: '#9a9a9a',
        }
      },
      animation: {
        'matrix-rain': 'matrix-rain 3s linear infinite',
        'terminal-blink': 'terminal-blink 1s ease-in-out infinite alternate',
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
      },
      keyframes: {
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'terminal-blink': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'glitch': {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-2px)' },
          '80%': { transform: 'translateX(2px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'matrix': '0 0 20px rgba(34, 197, 94, 0.5)',
        'terminal': '0 0 10px rgba(34, 197, 94, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config;
