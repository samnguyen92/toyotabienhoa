/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        toyota: {
          red: "#EB0A1E",
          hover: "#C80818",
          dark: "#A30513",
          light: "#FFF1F2",
          subtle: "#FEE2E2",
        },
        charcoal: {
          DEFAULT: "#18181B",
          heading: "#09090B",
          body: "#27272A",
          muted: "#52525B",
          light: "#71717A",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F4F4F5",
          muted: "#E4E4E7",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 8px 16px -4px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 12px 24px -6px rgba(0, 0, 0, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.05)",
        premium: "0 20px 40px -15px rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [],
};
