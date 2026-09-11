/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans Arabic"', '"Cairo"', '"Tajawal"', 'system-ui', 'sans-serif'],
        display: ['"Cairo"', '"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // قاعدة داكنة — أخضر غامق
        ink: {
          950: '#03110B',
          900: '#05180F',
          850: '#072114',
          800: '#0A2B1C',
          750: '#0D3623',
          700: '#11422B',
          600: '#175135',
        },
        // الأخضر الأساسي للهوية
        brand: {
          50: '#EBFBF3',
          100: '#D0F5E3',
          200: '#A3E9C8',
          300: '#6FD8A9',
          400: '#3AC188',
          500: '#1BA76E',
          600: '#12875A',
          700: '#0E6B48',
          800: '#0B5338',
          900: '#083F2B',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 18px 50px -20px rgba(0,0,0,0.85)',
        'glow-brand': '0 0 40px -10px rgba(27,167,110,0.55)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px)',
        'radial-brand': 'radial-gradient(circle at center, rgba(27,167,110,0.28), transparent 70%)',
      },
      backgroundSize: {
        grid: '56px 56px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.85)', opacity: '0.7' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 7s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.24, 0, 0.38, 1) infinite',
      },
    },
  },
  plugins: [],
}
