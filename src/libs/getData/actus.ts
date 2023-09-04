import { getCollection } from "astro:content";

export const getActus = async (etablissement?: string) => {
  const items = await getCollection("actualites");
  const filteredItems = items.filter(
    (el) =>
      etablissement === undefined || etablissement === el.data.etablissement
  );
  const sortedItems = filteredItems.sort((a, b) => {
    const firstDate = getDate(a.data.date);
    const secondDate = getDate(b.data.date);

    return secondDate.getTime() - firstDate.getTime();
  });

  return sortedItems;
};

const getDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split("-");
  return new Date(Number(year), Number(month) - 1, Number(day));
};
