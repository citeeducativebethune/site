import { getCollection } from "astro:content";

export const getActus = async (etablissement?: string) => {
  const items = await getCollection("actualites");
  const filteredItems = items.filter(
    (el) =>
      etablissement === undefined || etablissement === el.data.etablissement
  );
  // Todo sort by date
  return filteredItems;
};
