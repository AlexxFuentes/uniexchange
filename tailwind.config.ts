import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      mySin: '#FEAA26',
      mySin300: '#E29822',
      malibu: '#03C0EB',
      silverSand: '#C0C0BE',
      blackWhite: '#E6E5DD',
      arsenic: '#3B424C',
      // mySin: '#FEAA26',// Naranja
      // malibu: '#02C0EB',// Azul
      // arsenic: '#3B424c',// Gris
      // silverSand: '#C0C0BE',// Gris
      // blackWhite: '#E6E5DD',// Gris
      white: '#FFFFFF',
      black: '#000000',
      red: '#FF0000',
      electric: '#005794',
      paste: '#93D1EB',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      boxShadow: {
        custom: '0 0 15px  #3B424C',
      },
    },
  },
  plugins: [],
}
export default config
