import { fileURLToPath } from "url"
import { dirname, resolve } from "path"

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import svgr from "vite-plugin-svgr"

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const aliases = {
  "@": resolve(__dirname, "./src"),
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  resolve: {
    alias: aliases,
  },
  css: {
    modules: {
      generateScopedName: "[local]___[hash:base64:5]",
      localsConvention: "camelCaseOnly",
    },
  },
})
