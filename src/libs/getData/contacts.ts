import { getCollection } from "astro:content";

export const getContacts = async () => {
  const items = await getCollection("contacts");
  return items.map((el) => ({ ...el.data }));
};
