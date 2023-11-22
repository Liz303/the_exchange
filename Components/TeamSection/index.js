import { Element } from "react-scroll";
import styles from "./style.module.scss";
import { SliderWrapper } from "../SliderWrapper";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Eyebrow from "../Eyebrow";

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
        <Eyebrow eyebrowCopy={"The Company"} color={"black"} />
        <h3>Meet City Leisure Group</h3>
        <SliderWrapper length={bios.length}>{renderBios()}</SliderWrapper>
      </section>
    </Element>
  );
};

export default TeamSection;
