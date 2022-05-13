module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        black: "#0b090a",
        primary: {
          light: "#e5383b",
          DEFAULT: "#ba181b",
          dark: "#660708"
        },
      },
      fontFamily: {
        'sans': ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}
