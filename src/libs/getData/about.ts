import data from "../../data/about.json";
import z from "zod";

const aboutSchema = z.object({
  description: z.string(),
  perimetre: z.string(),
  enjeux: z.array(z.string()),
});

export const getAbout = () => {
  return aboutSchema.parse(data);
};
