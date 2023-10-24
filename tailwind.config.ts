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
      arsenic: '#3B424c',
      malibu: '#02C0EB',
      silverSand: '#C0C0BE', 
      blackWhite: '#E6E5DD',
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
    },
  },
  plugins: [],
}
export default config
