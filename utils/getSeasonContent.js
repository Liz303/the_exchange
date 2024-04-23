/* eslint-disable @next/next/no-img-element */
import Spring24 from "@/components/IntroSVGs/Spring/Spring_24";
import Summer24 from "@/components/IntroSVGs/Spring/Summer";
import Fall24 from "@/components/IntroSVGs/Spring/Fall";
import Winter24 from "@/components/IntroSVGs/Spring/Winter";

export default function getSeasonContent(type, season) {

    if (type == "intro") {
      switch(season) {
        case "Spring":
          return <Spring24 type={type}/>;
        case "Summer":
          return <Summer24 type={type} />;
        case "Fall":
          return <Fall24 type={type} />;
        case "Winter":
          return <Winter24 type={type}/>;
        default:
          return "Image not found";
      }
    } else if (type  ==  "ethos") {
      switch(season) {
        case "Spring":
          return <img src="/images/Spring.png" alt="Spring" />;
        case "Summer":
          return <img src="/images/Summer.png" alt="Summer" />;
        case "Fall":
          return <img src="/images/Fall.png" alt="Fall" />;
        case "Winter":
          return <img src="/images/Winter.png" alt="Winter" />;
        default:
          return "Image not found";
      }
    } else {
      return "Image not found";
    }
  }
