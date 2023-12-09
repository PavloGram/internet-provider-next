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
      'hero-bg': "url('../public/single-imge.jpg')",
      'contact-bg': "url('../public/call-to-bg.jpg')",
      'tech-bg': "url('../public/sport-bg.jpg')"
      },
    },
  },
  plugins: [],
}
