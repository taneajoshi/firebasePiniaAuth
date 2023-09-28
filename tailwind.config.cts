/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: { content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"] },
  theme: {
    extend: {},
  },
  plugins: [],
};
