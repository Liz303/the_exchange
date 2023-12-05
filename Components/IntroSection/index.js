import styles from "./style.module.scss";
import ImageRender from "../Images/ImageRender";
import introImage from "public/images/intro_image.jpg";
import gsap from "gsap";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
import { useEffect, useRef } from "react";
import Star from "../SVGS/star";
import Eyebrow from "../Eyebrow";
import SlopeStar from "../SVGS/slopeStar";

const IntroSection = ({ handleChange }) => {
  gsap.registerPlugin(ScrollTrigger);
  const headlineRef = useRef();
  const introCopyContainer = useRef();
  const introCopy = useRef();
  const starRef = useRef();

  useEffect(() => {
    if (starRef) {
      gsap.to(starRef.current, {
        delay: 0.5,
        opacity: 1,
        duration: 1,
      });
      gsap.to(starRef.current, {
        height: "60px",
        delay: 2,
        duration: 0.8,
      });
    }
    if (headlineRef) {
      gsap.to(headlineRef.current, {
        opacity: 1,
        delay: 3,
        duration: 1,
      });
    }
    if (introCopy) {
      gsap.to(introCopy.current, {
        opacity: 1,
        delay: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: introCopy.current,
          start: "top 60%",
        },
      });
    }

    ScrollTrigger.create({
      trigger: introCopyContainer.current,
      start: "top 52px",
      end: "top 53px",
      onEnter: () => handleChange(true),
      onEnterBack: () => handleChange(false),
    });
  }, [headlineRef, introCopy, introCopyContainer, starRef]);

  return (
    <section className={`intro-section ${styles.introSection}`}>
      <div className={styles.headlineImageWrapper}>
        <div className={styles.introHeadline}>
          <div className={styles.starContainer} ref={starRef}>
            <Star color={"white"} />
          </div>
          <div className={styles.headlineWrapper} ref={headlineRef}>
            <h1>Your</h1>
            <h1 className={styles.passport}>&nbsp;Passport&nbsp;</h1>
            <h1>to Adventure</h1>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <ImageRender image={introImage} cover={true} />
        </div>
      </div>
      <div className={styles.introTextContainer} ref={introCopyContainer}>
        <div className={styles.slopeStarContainer}>
          <SlopeStar color={"lightblue"} />
        </div>
        <Eyebrow eyebrowCopy={"Who We Are"} color={"black"} />
        <div className={styles.introCopy} ref={introCopy}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit.
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
