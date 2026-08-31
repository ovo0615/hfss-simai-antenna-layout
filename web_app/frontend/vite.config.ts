// Vite 設定。此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// 專屬埠：前端 5182、後端 8012（避開常被佔用的 5173/8000，
// 也避開同機其他工具的 5180/8010）。strictPort 讓埠被佔用時直接報錯，
// 而不是偷偷跳到下一個埠、開到別人的網站。
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5182,
    strictPort: true,
    proxy: {
      "/api": { target: "http://127.0.0.1:8012", changeOrigin: true },
    },
  },
  build: { outDir: "dist", emptyOutDir: true },
});
