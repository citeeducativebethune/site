export const addNonBreakSpaces = (text: string) =>
  text.replace(/(\s)(\!|\:|\?|;|»)/g, (s) => s.replace(/\s/g, "\u00a0"));
export const shortText = (text: string, numberOfChars: number) => {
  if (text.length <= numberOfChars) return text;
  return text.slice(0, 70)?.split(" ")?.slice(0, -1)?.join(" ") + "...";
};
