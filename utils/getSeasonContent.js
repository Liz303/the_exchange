/* eslint-disable @next/next/no-img-element */
import Spring24 from "@/components/IntroSVGs/Spring/Spring_24";

const IMAGE_MAP = {
  intro: {
    spring: <Spring24 />,
    summer: <Spring24 />,
    winter: <Spring24 />,
    autumn: <Spring24 />,
  },
  ethos: {
    spring: <img src="/images/Spring.png" alt="Spring" />,
    summer: <img src="/images/Spring.png" alt="Spring" />,
    winter: <img src="/images/Spring.png" alt="Spring" />,
    autumn: <img src="/images/Spring.png" alt="Spring" />,
  },
};

export default function getSeasonContent(type, season) {
  if (IMAGE_MAP[type] && IMAGE_MAP[type][season]) {
    return IMAGE_MAP[type][season];
  } else {
    switch (type) {
      case "intro":
        return <Spring24 />;
      case "ethos":
        return <img src="/images/Spring.png" alt="Spring" />;
      default:
        return "Image not found";
    }
  }
}
