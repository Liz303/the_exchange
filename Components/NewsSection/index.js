import { Element } from "react-scroll";
import Eyebrow from "../Eyebrow";

const NewsSection = ({ section }) => {
  console.log("News Section:", section.fields);

  return (
    <Element name="news" id="news">
      <section>
        <Eyebrow eyebrowCopy={"News"} color={"black"} />
        <h2>In The Press</h2>
      </section>
    </Element>
  );
};

export default NewsSection;
