/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOne: "#5a5a5a",
      },
      screens: {
        sm: "640px", // Small screens (e.g., phones)
        md: "768px", // Medium screens (e.g., tablets)
        cs: "992px",
        lg: "1024px", // Large screens (e.g., laptops)
        csl: "1120px",
        xl: "1280px", // Extra large screens (e.g., desktops)
      },
    },
  },
  plugins: [],
};
