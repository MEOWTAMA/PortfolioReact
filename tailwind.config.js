module.exports = {
  darkMode: 'class', // Enables dark mode using a class
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E1E1E',  // Dark background color
        secondary: '#333333', // Darker sections
        accent: '#F5A623', // Bright accent color (for buttons/links)
      },
    },
  },
  plugins: [],
}
