import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

export default defineConfig({
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ["sanity"],
    },
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sanity({
      projectId: "8s3mk80d",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/admin",
    }),
    react(),
  ],
});