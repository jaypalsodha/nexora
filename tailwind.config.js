/** @type {import('tailwindcss').Config} */
const NX = "#ec7723";
const NX_DARK = "#d96b15";
const NX_SOFT = "rgba(236, 119, 35, 0.12)";
const NX_SOFT_STRONG = "rgba(243, 149, 44, 0.16)";

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nx: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: NX,
          700: NX_DARK,
          800: "#9a3b12",
          900: "#7c2d12",
        },
        cream: {
          50: "#fdfaf4",
          100: "#f7efe7",
          200: "#f0e6d8",
          300: "#e8d5be",
        },
        ink: "#23313f",
        muted: "#64748b",
        surface: "#ffffff",
        surfaceAlt: "#fdf8f1",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
        display: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 22px 50px rgba(15, 23, 42, 0.06)",
        card: "0 36px 120px rgba(15, 23, 42, 0.10)",
        accent: "0 20px 40px rgba(236, 119, 35, 0.2)",
        innerSoft: "inset 0 1px 0 rgba(255,255,255,0.9)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out both",
        fadeInUp: "fadeInUp 0.8s ease-out both",
        fadeInDown: "fadeInDown 0.8s ease-out both",
        slideLeft: "slideLeft 0.8s ease-out both",
        scaleIn: "scaleIn 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulseSlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};
