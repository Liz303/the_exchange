import styles from "./mapSection.module.scss";
import GoogleMap from "./map";
import { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

const MapSection = ({ latLongList }) => {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef();
  const mapHeadlineRef = useRef();
  const mapCopyRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom bottom",
          end: "bottom+=100px",
          pin: true,
          pinSpacing: false,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
    if (mapHeadlineRef) {
      gsap.to(mapHeadlineRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
        opacity: 1,
        x: 0,
      });
    }
    if (mapCopyRef) {
      gsap.to(mapCopyRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
        },
        opacity: 1,
      });
    }
  }, [containerRef, mapHeadlineRef, mapCopyRef]);

  return (
    <div className={styles.mapSection} ref={containerRef}>
      <div className={styles.mapCopy}>
        <h3 className={styles.headline} ref={mapHeadlineRef}>
          Making our mark on city entertainment
        </h3>
        <p className={styles.copy} ref={mapCopyRef}>
          We do city entertainment like no one else, bring the best in
          innovative attractions and immersive events to cities across Europe.
        </p>
      </div>
      <div className={styles.mapContainer}>
        <GoogleMap latLongList={latLongList} />
      </div>
    </div>
  );
};

export default MapSection;
