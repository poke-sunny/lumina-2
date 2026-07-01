import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#000000',
        'jigsaw-navy': '#003366',
        'jigsaw-grey': '#f9fafb',
        'jigsaw-border': 'rgba(0, 51, 102, 0.08)',
      },
    },
  },
  plugins: [],
}
export default config
