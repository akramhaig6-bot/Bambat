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
        // قاعدة فاتحة — أبيض مع لمسات خضراء خفيفة
        ink: {
          50: '#FFFFFF',
          100: '#F6FBF8',
          200: '#EDF6F1',
          300: '#E2EFE8',
          600: '#5C7268',
          700: '#3E5A4C',
          800: '#1F4132',
          850: '#163527',
          900: '#0E2A1D',
          950: '#082015',
        },
        // الأخضر الأساسي للهوية
        brand: {
          50: '#EEFAF3',
          100: '#D5F3E2',
          200: '#A8E7C7',
          300: '#71D6A6',
          400: '#34BE84',
          500: '#12A469',
          600: '#0B8654',
          700: '#0A6B44',
          800: '#0A5537',
          900: '#08432C',
          950: '#04251A',
        },
      },
      boxShadow: {
        glow: '0 1px 2px rgba(8,32,21,0.04), 0 18px 40px -24px rgba(8,32,21,0.28)',
        'glow-brand': '0 14px 34px -14px rgba(18,164,105,0.55)',
        'glow-soft': '0 10px 30px -18px rgba(8,32,21,0.35)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(10,107,68,0.07) 1px, transparent 1px), linear-gradient(to right, rgba(10,107,68,0.07) 1px, transparent 1px)',
        'radial-brand': 'radial-gradient(circle at center, rgba(18,164,105,0.22), transparent 70%)',
      },
      backgroundSize: {
        grid: '56px 56px',
      },
      opacity: {
        // قيم شفافية إضافية مستخدمة في الثيم الفاتح
        3: '0.03',
        6: '0.06',
        8: '0.08',
        12: '0.12',
        18: '0.18',
        22: '0.22',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        85: '0.85',
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
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.24, 0.38, 1) infinite',
      },
    },
  },
  plugins: [],
}
