import { Element } from "react-scroll";

const NewsSection = ({ section }) => {
  console.log("News Section:", section.fields);

  return (
    <Element name="news" id="news">
      <section>NEWS SECTION</section>
    </Element>
  );
};

export default NewsSection;
