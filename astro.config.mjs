import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  // Configuraremos la URL definitiva del portafolio
  // antes de publicarlo.
});
