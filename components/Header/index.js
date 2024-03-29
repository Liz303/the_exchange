"use client";

import { useEffect, useRef } from "react";
import s from "./style.module.scss";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const headerRef = useRef();
  const reserveRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      {
        y: -50,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      reserveRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,

        duration: 0.5,
        ease: "power2.out",
      }
    );
  }, []);

  const onClick = (label) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `#${label}`,
      },
    });
  };

  return (
    <>
      <div className={s.header} ref={headerRef}>
        <button onClick={() => onClick("info")} className={`${s.link} glitch`}>
         <span> INFO </span>
        </button>
        <a className={`${s.reserve} glitch`} href="/" alt="Reserve">
          <span>{`{RESERVE}`}</span>
        </a>
        <button onClick={() => onClick("ethos")} className={`${s.link} glitch`}>
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
