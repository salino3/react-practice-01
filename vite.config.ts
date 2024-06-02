import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sass from "sass";

export default defineConfig({
  base: "./",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  // assetsInclude: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.gif"],
});
