/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050505", // Ye raha wo color jo missing tha
        secondary: "#ffffff",
        accent: {
          DEFAULT: "#6366f1", // Neon Purple
          glow: "rgba(99, 102, 241, 0.4)",
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Syncopate"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}