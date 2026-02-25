import { defineConfig } from "vite";
import htmlInclude from "vite-plugin-html-include";

export default defineConfig({
  root: "src",
  publicDir: "../public",

  server: {
    port: 3000,
    open: true,
    host: true,
  },

  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,

    rollupOptions: {
      output: {
        chunkFileNames: "js/[name].[hash].js",
        entryFileName: "js/[name].[hash].js",

        assetFileNames: (assetInfo) => {
          // Картинки
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(assetInfo.name || "")) {
            return "images/[name].[hash][extname]";
          }

          // Шрифты
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || "")) {
            return "fonts/[name].[hash][extname]";
          }

          // Видео
          if (/\.(mp4|webm|ogg)$/i.test(assetInfo.name || "")) {
            return "videos/[name].[hash][extname]";
          }

          if (/\.css$/i.test(assetInfo.name || "")) {
            return "styles/[name].[hash][extname]";
          }

          // Остальные ассеты (CSS, иконки и т.д.)
          return "assets/[name].[hash][extname]";
        },
      },
    },
  },
  plugins: [htmlInclude()],
});
