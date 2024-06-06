"use client";
import Marquee from "react-fast-marquee";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function FooteraMarquee() {
    const marqueeRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            gsap.to(marqueeRef.current, {
                y: 0,
                duration: 1,
            })
          }, "3000");
    }, [marqueeRef]);

    return (
        <div className={styles.headerMarquee} ref={marqueeRef}>
            <Marquee>
            <h2>
                HEY! I&apos;M GRILLIN&apos; HERE. HOME OF THE $3.80 BURGER &nbsp;
            </h2>
            </Marquee>
      </div>
    )
}