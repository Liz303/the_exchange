import { Element } from "react-scroll";
import Eyebrow from "../Eyebrow";

const AboutSection = () => {
  return (
    <Element name="about" id="about">
      <section>
        <Eyebrow eyebrowCopy={"What we do"} color={"black"} />
        <h3>About Section</h3>
      </section>
    </Element>
  );
};

export default AboutSection;
