/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'red': '#DB0132',
        'orange': '#F54C0F',

      },
      fontSize: {
        'xl': '0.625rem',
        'xl-fif': '0.9375rem',
        'xl2': '1.25rem',
        'xl3': '1.875rem',
        'xl4': '2.5rem',
        'xl5': '3.125rem',
        'xl6': '3.75rem',
        'xl7': '4.375rem',
      }
    },
  },
  plugins: [],
}
