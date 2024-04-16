"use client";

import { useEffect, useRef, useState } from "react";
import s from "./style.module.scss";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const headerRef = useRef();
  const reserveRef = useRef();
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  useEffect(() => {
    const checkIntroVisibility = () => {
      const introSection = document.getElementById("intro");
      console.log({ introSection });
      if (!introSection) return;
      const { top, bottom } = introSection?.getBoundingClientRect();
      setIsIntroVisible(top < window.innerHeight && bottom > 500);
    };

    gsap.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { opacity: 1, y: 0, duration: 0.5, delay: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      reserveRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 1, ease: "power2.out" }
    );

    window.addEventListener("scroll", checkIntroVisibility);

    return () => {
      window.removeEventListener("scroll", checkIntroVisibility);
    };
  }, []);

  const onClick = (label) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${label}` },
    });
  };

  return (
    <>
      <div className={s.header} ref={headerRef}>
        <button
          onClick={() => onClick("info")}
          className={`${s.link} glitch ${!isIntroVisible ? s.fade : ""}`}
        >
          <span> INFO </span>
        </button>
        <a className={`${s.reserve} glitch`} href="/" alt="Reserve">
          <span>{`{RESERVE}`}</span>
        </a>
        <button
          onClick={() => onClick("ethos")}
          className={`${s.link} glitch ${!isIntroVisible ? s.fade : ""}`}
        >
          <span> ETHOS </span>
        </button>
      </div>
      <div className={s.reserveBottom} ref={reserveRef}>
        <a href="/" alt="Reserve" className={`${s.reserve} glitch`}>
          <span>{`{RESERVE}`}</span>
        </a>
      </div>
    </>
  );
};

export default Header;
