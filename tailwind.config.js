/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pretendard: ["Pretendard", "sans-serif"],
        notosans: ["Noto Sans", "sans-serif"],
        nanummyeongjo: ["NanumMyeongjo", "sans-serif"],
        nanumsonwrite: ["NanumGoDigANiGoGoDing", "sans-serif"],
        nanumsonpyeonji: ["NanumSonPyeonJiCe", "sans-serif"],
      },
      screens: {
        "min-1155": "1155px",
      },
      colors: {
        beige: "#FFE2AD",
      },
      boxShadow: {
        custom: "0 2px 12px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
