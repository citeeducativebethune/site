export type ImageRef = {
  url: {
    src: string;
    width: number;
    height: number;
    format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg";
  };
  alt?: string;
};
