import Image from "next/image";

const ImageRender = ({ image, cover, imageTitle }) => {
  if (image && image.fields) {
    const { title, description, file } = image.fields;
    const { url, details, fileName } = file;
    let height = details.image.height;
    let width = details.image.width;
    let src = `https:${url}`;

    return (
      <Image
        src={src}
        alt={fileName}
        width={width}
        height={height}
        style={cover ? { objectFit: "cover" } : { objectFit: "contain" }}
      />
    );
  } else if (image.src) {
    return (
      <Image
        src={image.src}
        alt={imageTitle ? imageTitle : "image"}
        width={image.width}
        height={image.height}
        style={cover ? { objectFit: "cover" } : { objectFit: "contain" }}
      />
    );
  }
  return "";
};

export default ImageRender;
