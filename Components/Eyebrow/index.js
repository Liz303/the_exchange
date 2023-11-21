import styles from "./style.module.scss";
import Star from "../SVGS/star";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const Eyebrow = ({ eyebrowCopy, color }) => {
  const eyebrowRef = useRef();

  useEffect(() => {
    if (eyebrowRef) {
      gsap.to(eyebrowRef.current, {
        opacity: 1,
        duration: 1,
        x: 0,
        scrollTrigger: {
          trigger: eyebrowRef.current,
          start: "top 80%",
        },
      });
    }
  }, [eyebrowRef]);

  return (
    <div className={`eyebrow ${styles.eyebrow}`} ref={eyebrowRef}>
      <div className={styles.starContainer}>
        <Star color={color} />
      </div>
      {eyebrowCopy}
    </div>
  );
};

export default Eyebrow;
