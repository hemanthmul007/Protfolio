/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f97316',
        dark: '#050816',
        surface: '#0b1022',
      },
      boxShadow: {
        soft: '0 20px 45px rgba(2, 6, 23, 0.55)',
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 50px rgba(2, 6, 23, 0.6)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(60rem 32rem at 50% 0%, rgba(249,115,22,0.24), transparent 60%)',
        'soft-grid':
          'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

