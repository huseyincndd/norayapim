import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        'bebas-neue': ['var(--font-bebas-neue)', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        'brand-dark': '#1a1a1a',
        'brand-light': '#f0f0f0',
      },
    },
  },
  plugins: [],
}
export default config 