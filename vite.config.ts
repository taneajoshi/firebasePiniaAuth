import { defineConfig, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import stylelint from "vite-plugin-stylelint";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    stylelint(),
    eslintPlugin({
      useEslintrc: true,
      exclude: [/virtual:/, /node_modules/],
    }),
    splitVendorChunkPlugin(),
    vue(),
  ],
  css: {
    postcss: "./postcss.config.cts",
  },
});
