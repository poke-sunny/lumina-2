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
        foreground: '#0f172a',
        'jigsaw-navy': '#003366',
        'jigsaw-blue': '#004a94',
        'jigsaw-slate': '#64748b',
        'jigsaw-border': 'rgba(0, 51, 102, 0.08)',
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(0, 51, 102, 0.04), 0 2px 10px -2px rgba(0, 51, 102, 0.02)',
        'elevated': '0 20px 40px -12px rgba(0, 51, 102, 0.08)',
      }
    },
  },
  plugins: [],
}
export default config
