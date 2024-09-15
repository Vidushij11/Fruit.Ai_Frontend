module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-image": "url('./src/images/bg.jpg')",
      },
    },
  },
  plugins: [],
};
