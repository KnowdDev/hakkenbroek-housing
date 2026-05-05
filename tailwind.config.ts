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
        primary: '#ff385c',
        'primary-active': '#e00b41',
        'primary-disabled': '#ffd1da',
        ink: '#222222',
        body: '#3f3f3f',
        muted: '#6a6a6a',
        'muted-soft': '#929292',
        hairline: '#dddddd',
        'hairline-soft': '#ebebeb',
        'border-strong': '#c1c1c1',
        canvas: '#ffffff',
        'surface-soft': '#f7f7f7',
        'surface-strong': '#f2f2f2',
        'on-primary': '#ffffff',
        'on-dark': '#ffffff',
        'legal-link': '#428bff',
      },
      fontFamily: {
        sans: ['Inter', 'Circular', '-apple-system', 'system-ui', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
      borderRadius: {
        'sm': '8px',
        'md': '14px',
        'lg': '20px',
        'xl': '32px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}
export default config
