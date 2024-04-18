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
    const introSection = document.getElementById("intro");
    const checkIntroVisibility = () => {
      if (!introSection) return;
      const { top, bottom } = introSection?.getBoundingClientRect();
      setIsIntroVisible(top < window.innerHeight && bottom > 500);
    };

    gsap.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: 1,
      ease: "power2.out",
    });

    gsap.to(reserveRef.current, {
      opacity: 1,
      duration: 0.5,
      delay: 1,
      ease: "power2.out",
    });

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
        <a
          className={`${s.reserve} glitch`}
          target="_blank"
          href="https://www.exploretock.com/wolfstailor/"
          alt="Reserve"
        >
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
        <a
          href="https://www.exploretock.com/wolfstailor/"
          alt="Reserve"
          target="_blank"
          className={`${s.reserve} glitch`}
        >
          <span>{`{RESERVE}`}</span>
        </a>
      </div>
    </>
  );
};

export default Header;
