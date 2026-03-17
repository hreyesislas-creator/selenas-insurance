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
        brand: {
          yellow:         '#F5C400',
          'yellow-hover': '#E0B200',
          'yellow-dark':  '#C49C00',   // alias — same as yellow-deep
          'yellow-deep':  '#C49C00',
          'yellow-light': '#FFF8DC',
          purple:         '#4A2080',
          'purple-mid':   '#5B2D8E',
          'purple-light': '#7340B0',
          'purple-dark':  '#32165C',
          'purple-ink':   '#1E0D40',
          red:            '#B03020',
          blue:           '#1A3A6B',   // alias — same as blue-ca
          'blue-ca':      '#1A3A6B',
          'blue-ca-light':'#2050A0',
          white:          '#FAFAF8',
          'off-white':    '#F4F3EF',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
