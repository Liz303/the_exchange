import styles from "./style.module.scss";
import { Element } from "react-scroll";
import { gsap } from "gsap";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
import { useEffect, useRef } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

const CTASection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef();
  const headlineRef = useRef();
  const copyRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    ScrollTrigger.refresh();
    if (headlineRef) {
      gsap.to(headlineRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
        opacity: 1,
        x: 0,
      });
    }
    if (copyRef) {
      gsap.to(copyRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
        opacity: 1,
        delay: 0.8,
      });
    }
    if (buttonRef) {
      gsap.to(buttonRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
        delay: 1.3,
        opacity: 1,
        y: 0,
      });
    }
  }, [sectionRef, headlineRef, copyRef, buttonRef]);

  return (
    <Element name="connect" id="connect">
      <section className={styles.ctaSection} ref={sectionRef}>
        <div className={styles.imageBackground}></div>
        <h3 className={styles.headline} ref={headlineRef}>
          Let&apos;s create something unforgettable
        </h3>
        <div className={styles.ctaCopy}>
          <p ref={copyRef}>
            Contact us today to create a city attraction experience like nothing
            you&apos;ve ever seen before.
          </p>
          <div className={styles.buttonContainer} ref={buttonRef}>
            <PrimaryButton
              link={"mailto:g.reynisson@city-leisuregroup.com"}
              buttonTitle={"Contact Us"}
            />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default CTASection;
