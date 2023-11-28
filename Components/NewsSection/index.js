import { Element } from "react-scroll";
import Eyebrow from "../Eyebrow";

const NewsSection = ({ section }) => {
  console.log("News Section:", section.fields);

  return (
    <Element name="news" id="news">
      <section>
        <Eyebrow eyebrowCopy={"News"} color={"black"} />
        <h3>In The Press</h3>
      </section>
    </Element>
  );
};

export default NewsSection;
