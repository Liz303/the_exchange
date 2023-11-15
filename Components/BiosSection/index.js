import { Element } from "react-scroll";

const BiosSection = ({ section }) => {
  console.log("Bio Section:", section.fields);

  return (
    <Element name="team" id="team">
      <section>BIOS SECTION</section>
    </Element>
  );
};

export default BiosSection;
