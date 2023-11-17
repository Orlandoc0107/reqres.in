import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        color1: '#00fcd0',
        color2: '#9fff7f',
        color3: '#00221a',
        color4: '#717977',
        color5: '#e2e2e2',
      },
    },
  },
  plugins: [],
}
export default config
