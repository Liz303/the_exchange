import { Element } from "react-scroll";
import styles from "./style.module.scss";
import { SliderWrapper } from "../SliderWrapper";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const TeamSection = ({ bios }) => {
  const renderBios = () => {
    return bios.map((bioItem, i) => {
      const { bio, name, position } = bioItem.fields;
      return (
        <div className={styles.bioCard} key={`bio-item-${i}`}>
          <h4>{name}</h4>
          <span>{position}</span>
          <div>{documentToReactComponents(bio)}</div>
        </div>
      );
    });
  };

  return (
    <Element name="team" id="team">
      <section className={styles.teamSection}>
        TEAM SECTION
        <SliderWrapper length={bios.length}>{renderBios()}</SliderWrapper>
      </section>
    </Element>
  );
};

export default TeamSection;
