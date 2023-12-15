import styles from "./style.module.scss";
import ImageRender from "../Images/ImageRender";
import introImage from "public/images/intro_image.jpg";
import gsap from "gsap";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
import { useEffect, useRef, useState } from "react";
import Star from "../SVGS/star";
import Eyebrow from "../Eyebrow";
import SlopeStar from "../SVGS/slopeStar";

const IntroSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const headlineRef = useRef();

  const introCopy = useRef();
  const starRef = useRef();

  useEffect(() => {
    ScrollTrigger.refresh();
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
  }, [headlineRef, introCopy, starRef]);

  return (
    <section className={`intro-section ${styles.introSection}`}>
      <div className={`intro-image-wrapper ${styles.headlineImageWrapper}`}>
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
      <div className={styles.introTextContainer}>
        <div className={styles.slopeStarContainer}>
          <SlopeStar color={"lightblue"} />
        </div>
        <Eyebrow eyebrowCopy={"Who We Are"} color={"black"} />
        <div className={styles.introCopy} ref={introCopy}>
          We are industry experts in city-attraction entertainment who have
          partnered with global leaders in location-based, family entertainment
          to bring state-of-the art experiences to locations across Europe.
          <br></br>
          <br></br>From innovative attractions to immersive events, we deliver
          unforgettable moments of joy and excitement for audiences of all ages
          and cultures.<br></br>
          <br></br>Join us in creating an experience that’s truly unforgettable.
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
