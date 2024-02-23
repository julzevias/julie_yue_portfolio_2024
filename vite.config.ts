import { defineConfig } from "vite";
import { resolve } from "path";
import alias from "@rollup/plugin-alias";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    alias({
      entries: [{ find: "@", replacement: resolve(__dirname, "src") }],
    }),
    react(),
  ],
});
