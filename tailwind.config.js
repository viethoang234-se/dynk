/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        bone: "#FAFAF8",
        champagne: "#C9C2B4",
        "champagne-bright": "#E4DCC8",
        ash: "#8A8A86",
        line: "rgba(255,255,255,0.12)",
        "line-soft": "rgba(255,255,255,0.06)",
        "line-dark": "rgba(10,10,10,0.10)",
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.22, 1, 0.36, 1)",
        glass: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        canvas: "1440px",
      },
    },
  },
  plugins: [],
};
