/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeBg: 'var(--theme-bg)',
        themeText: 'var(--theme-text)',
        themeAccent: 'var(--theme-accent)',
        themeGlass: 'var(--theme-glass)',
        themeBorder: 'var(--theme-border)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to bottom, transparent, var(--theme-bg))',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}