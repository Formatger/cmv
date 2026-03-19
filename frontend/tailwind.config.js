/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        gold: '#7DC142',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.16)',
        glow: '0 0 40px rgba(125, 193, 66, 0.3)',
        'glow-sm': '0 0 20px rgba(125, 193, 66, 0.18)',
      },
    },
  },
  plugins: [],
}
