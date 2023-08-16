import { defineConfig } from "astro/config";
import unwrapImages from "remark-unwrap-images";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  markdown: {
    remarkPlugins: [unwrapImages],
  },
});
