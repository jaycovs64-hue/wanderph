/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: '#0A3D62',
        turquoise: '#00B7C2',
        sand: '#F9E7B1',
        coral: '#FF8A5B',
        deep: '#082B48',
        mist: '#EAF4F8',
      },
      boxShadow: {
        soft: '0 16px 40px rgba(10, 61, 98, 0.12)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
