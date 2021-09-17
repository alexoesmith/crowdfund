module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "moderate-cyan": "hsl(176, 50%, 47%)",
        "dark-cyan": "hsl(176, 72%, 28%)",
        "dark-gray": "hsl(0, 0%, 48%)",
        "black-transparent": "rgba(0,0,0,0.65)"
      }
    },
    container: {
      center: true,
      padding: "1.2rem"
    },
    fontFamily: {
      body: "'Commissioner', sans-serif"
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/aspect-ratio")]
};
