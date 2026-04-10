/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        270: "1080px", // 270 * 4px = 1080px (adjustable)
      },
      spacing: {
        268: "1072px",
      },
    },
  },
  plugins: [require("daisyui")],
};
