import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";

const site = process.env.SITE_URL?.trim();
if (site) {
  const url = new URL(site);
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.href !== url.origin + "/"
  ) {
    throw new Error("SITE_URL must be an HTTP(S) origin without a path.");
  }
}

export default defineConfig({
  output: "static",
  site: site || undefined,
  trailingSlash: "always",
  integrations: site
    ? [sitemap({ filter: (page) => !/\/404(?:\.html)?\/?$/.test(page) })]
    : [],
  vite: {
    plugins: [tailwind()],
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: "stable-font-display",
            Declaration: {
              // Keep the first painted face when a self-hosted font arrives late.
              "font-display"(declaration) {
                if (declaration.value === "swap")
                  declaration.value = "optional";
              },
            },
          },
        ],
      },
    },
  },
});
