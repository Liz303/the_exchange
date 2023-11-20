import { Element } from "react-scroll";
import Eyebrow from "../Eyebrow";

const AboutSection = () => {
  return (
    <Element name="about" id="about">
      <section>
        <Eyebrow eyebrowCopy={"What we do"} color={"black"} />
        <h2>About Section</h2>
      </section>
    </Element>
  );
};

export default AboutSection;
