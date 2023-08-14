import { slugify } from "@libs/slugify";
import { getCollection } from "astro:content";
export const getEtablissements = async () => {
  const items = await getCollection("etablissements");
  return items.map((el) => {
    const slug = slugify(el.data.name);
    return {
      ...el.data,
      slug,
      url: `etablissements/${slug}`,
    };
  });
};
