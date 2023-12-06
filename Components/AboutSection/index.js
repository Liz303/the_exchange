import styles from "./style.module.scss";
import { Element } from "react-scroll";
import Eyebrow from "../Eyebrow";
import { gsap } from "gsap";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
import { useEffect, useRef } from "react";
import BuildingOne from "../SVGS/buildingOne";
import BuildingTwo from "../SVGS/buildingTwo";
import BuildingThree from "../SVGS/buildingThree";
import BuildingFour from "../SVGS/buildingFour";
import building from "public/images/building.png";
import ImageRender from "../Images/ImageRender";
import Fact from "./fact";

const AboutSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const factsContainerRef = useRef();
  const buildingOneRef = useRef();
  const buildingTwoRef = useRef();
  const buildingThreeRef = useRef();
  const buildingFourRef = useRef();
  const headlineMobileRef = useRef();
  const headlineRef = useRef();
  const imageRef = useRef();
  const imageTabletRef = useRef();

  const facts = [
    "We invest in developing and operating city attraction projects",
    "We have a proven track record in developing city attractions in Europe",
    "We have partnered with TICA (This is City Attractions) to bring 5D theaters to prime locations in major European cities",
  ];

  useEffect(() => {
    ScrollTrigger.refresh();
    if (headlineRef) {
      gsap.to(headlineRef.current, {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 70%",
        },
      });
    }

    if (headlineMobileRef) {
      gsap.to(headlineMobileRef.current, {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: headlineMobileRef.current,
          start: "top 70%",
        },
      });
    }

    if (buildingOneRef) {
      gsap.to(buildingOneRef.current, {
        opacity: 1,
        duration: 1,
        y: 0,
        scrollTrigger: {
          trigger: factsContainerRef.current,
          start: "top 65%",
          toggleActions: "play complete none reverse",
        },
      });
    }

    if (buildingTwoRef) {
      gsap.to(buildingTwoRef.current, {
        opacity: 1,
        duration: 1,
        y: 0,
        scrollTrigger: {
          trigger: factsContainerRef.current,
          start: "top 45%",
          toggleActions: "play complete none reverse",
        },
      });
    }

    if (buildingThreeRef) {
      gsap.to(buildingThreeRef.current, {
        opacity: 1,
        duration: 1,
        y: 0,
        scrollTrigger: {
          trigger: factsContainerRef.current,
          start: "top 25%",
          toggleActions: "play complete none reverse",
        },
      });
    }

    if (buildingFourRef) {
      gsap.to(buildingFourRef.current, {
        opacity: 1,
        duration: 1,
        y: 0,
        scrollTrigger: {
          trigger: factsContainerRef.current,
          start: "top 5%",
          toggleActions: "play complete none reverse",
        },
      });
    }

    if (imageTabletRef) {
      gsap.to(imageTabletRef.current, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageTabletRef.current,
          start: "top 65%",
        },
      });
    }
  }, [
    headlineRef,
    factsContainerRef,
    headlineMobileRef,
    imageTabletRef,
    buildingOneRef,
    buildingTwoRef,
    buildingThreeRef,
    buildingFourRef,
  ]);

  const renderFacts = () => {
    return facts.map((fact, i) => {
      return <Fact fact={fact} key={`fact-${i}`} />;
    });
  };

  return (
    <Element name="about" id="about">
      <section className={`about-section ${styles.aboutSection}`}>
        <div className={styles.headlineWrapperMobile}>
          <Eyebrow eyebrowCopy={"What we do"} color={"black"} />
          <h3 className={styles.headline} ref={headlineMobileRef}>
            Experiences as unique as their locations
          </h3>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.imageWrapper} ref={imageRef}>
            <div className={styles.headlineWrapper}>
              <Eyebrow eyebrowCopy={"What we do"} color={"black"} />
              <h3 className={styles.headline} ref={headlineRef}>
                Experiences as unique as their locations
              </h3>
            </div>
            <div
              className={`${styles.buildingContainer} ${styles.one}`}
              ref={buildingOneRef}
            >
              <BuildingOne />
            </div>
            <div
              className={`${styles.buildingContainer} ${styles.two}`}
              ref={buildingTwoRef}
            >
              <BuildingTwo />
            </div>
            <div
              className={`${styles.buildingContainer} ${styles.three}`}
              ref={buildingThreeRef}
            >
              <BuildingThree />
            </div>
            <div
              className={`${styles.buildingContainer} ${styles.four}`}
              ref={buildingFourRef}
            >
              <BuildingFour />
            </div>
          </div>
          <div className={styles.imageWrapperTablet} ref={imageTabletRef}>
            <ImageRender image={building} />
          </div>
          <div className={styles.factsContainer} ref={factsContainerRef}>
            <ul>{renderFacts()}</ul>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default AboutSection;
