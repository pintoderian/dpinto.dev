// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://dpinto.dev",
  output: "static",
  adapter: vercel(),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  // El sitio pasó de Next.js (blog + páginas por experiencia, generadas con
  // Keystatic) a una sola página. Estas rutas siguen indexadas en Google —
  // sin esto, quedarían en 404. Los catch-all con parámetros dinámicos viven
  // como páginas propias (ver src/pages/**/[...slug].astro) porque Astro no
  // permite que un redirect estático sea el destino de uno dinámico.
  redirects: {
    "/blog": "/",
    "/experiencia": "/",
    "/keystatic": "/"
  }
});
