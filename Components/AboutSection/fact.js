import styles from "./fact.module.scss";
import Star from "../SVGS/star";
import { gsap } from "gsap";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
import { useEffect, useRef } from "react";
import { useWindowDimensions } from "@/utils/useWindowDimensions";

const Fact = ({ fact }) => {
  const { winWidth, winHeight } = useWindowDimensions();
  let windowWidth = winWidth;
  let isMobile = windowWidth <= 820;

  gsap.registerPlugin(ScrollTrigger);
  const wrapperRef = useRef();
  const factRef = useRef();

  useEffect(() => {
    let st = {
      trigger: wrapperRef.current,
      start: "top 65%",
      toggleActions: "play complete none reverse",
    };

    if (isMobile) {
      st = {
        trigger: wrapperRef.current,
        start: "top 60%",
        toggleActions: "play complete none none",
      };
    }

    if (winWidth) {
      gsap.to(factRef.current, {
        scrollTrigger: st,
        duration: 0.5,
        y: 0,
        opacity: 1,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
      });
    }
  }, [wrapperRef, factRef, isMobile, windowWidth, winWidth]);

  return (
    <li className={styles.factWrapper} ref={wrapperRef}>
      <div className={styles.fact} ref={factRef}>
        <Star color={"black"} />
        <p>{fact}</p>
      </div>
    </li>
  );
};

export default Fact;
