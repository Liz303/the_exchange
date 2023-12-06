import { Element } from "react-scroll";
import styles from "./style.module.scss";
import { SliderWrapper } from "../SliderWrapper";
import Eyebrow from "../Eyebrow";
import ImageRender from "../Images/ImageRender";
import { useState, useEffect, useRef } from "react";
import ModalWrapper from "../ModalWrapper";
import { gsap } from "gsap";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
import SlopeStar from "../SVGS/slopeStar";
import ActiveBio from "./activeBio";

const TeamSection = ({ bios }) => {
  const [activeBio, setActiveBio] = useState();
  gsap.registerPlugin(ScrollTrigger);
  const headlineRef = useRef();
  const biosRef = useRef();
  biosRef.current = [];
  const bioContainerRef = useRef();

  const addToRefs = (el) => {
    if (el && !biosRef.current.includes(el)) {
      biosRef.current.push(el);
    }
  };

  useEffect(() => {
    ScrollTrigger.refresh();
    if (headlineRef) {
      gsap.to(headlineRef.current, {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 60%",
        },
      });
    }
    if (biosRef) {
      gsap.to(biosRef.current, {
        opacity: 1,
        duration: 0.8,
        x: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: bioContainerRef.current,
          start: "top 70%",
        },
      });
    }
  }, [headlineRef, biosRef, bioContainerRef, activeBio]);

  const handleOpenClose = (content) => {
    if (content) {
      ScrollTrigger.refresh();
    }
    setActiveBio(content);
  };

  const renderBios = () => {
    return bios.map((bioItem, i) => {
      const { bio, name, email, link, position, bioImage } = bioItem.fields;
      return (
        <div
          className={styles.bioCard}
          key={`bio-item-${i}`}
          ref={addToRefs}
          onClick={() => handleOpenClose(bioItem)}
        >
          <div className={styles.imageContainer}>
            <ImageRender image={bioImage} cover={true} />
          </div>
          <div className={styles.detailsWrapper}>
            <span className={styles.name}>{name}</span>
            <span className={styles.position}>{position}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <Element name="team" id="team">
      {activeBio && (
        <ModalWrapper handleOpenClose={handleOpenClose} showModal={activeBio}>
          <ActiveBio activeBio={activeBio} />
        </ModalWrapper>
      )}

      <section className={styles.teamSection}>
        <div className={styles.slopeStarContainer}>
          <SlopeStar color={"blue"} />
        </div>
        <div className={styles.headlineWrapper}>
          <Eyebrow eyebrowCopy={"Our Company"} color={"white"} />
          <h3 className={styles.headline} ref={headlineRef}>
            Meet City Leisure Group
          </h3>
        </div>
        <div className={styles.biosContainer} ref={bioContainerRef}>
          {bios && bios.length >= 5 ? (
            <SliderWrapper team={true} length={bios.length}>
              {renderBios()}
            </SliderWrapper>
          ) : bios.length < 5 ? (
            <div className={styles.noSlider}>{renderBios()}</div>
          ) : (
            ""
          )}
        </div>
      </section>
    </Element>
  );
};

export default TeamSection;
