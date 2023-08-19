import { defineConfig, sharpImageService } from "astro/config";
import unwrapImages from "remark-unwrap-images";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
  markdown: {
    remarkPlugins: [unwrapImages],
  },
  integrations: [svelte()],
});
