import Image from "next/image";

const ImageRender = ({ image, title, cover }) => {
  if (image) {
    const { src, height, width } = image;

    return (
      <Image
        src={src}
        alt={title ? title : "image"}
        width={width}
        height={height}
        style={cover ? { objectFit: "cover" } : { objectFit: "contain" }}
      />
    );
  }
  return "";
};

export default ImageRender;
