/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tumhara purana theme (Neon)
        primary: "#050505",
        secondary: "#ffffff",
        accent: {
          DEFAULT: "#6366f1", // Neon Purple
          glow: "rgba(99, 102, 241, 0.4)",
        },
        // Ochi Design Colors (Maine add kar diye)
        'ochi-green': '#CDEA68',
        'ochi-black': '#212121',
        'ochi-white': '#F1F1F1',
      },
      fontFamily: {
        // Tumhare fonts
        sans: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Syncopate"', 'sans-serif'],
        // Ochi ke specific fonts (Layout preserve karne ke liye)
        'founders': ['"Founders Grotesk X-Condensed"', 'sans-serif'],
        'neue': ['"Neue Montreal"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}