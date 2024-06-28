"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import s from "./style.module.scss";
import Logo from "@/components/SVGs/Logo";
import Header from "@/components/Header";

export default function Intro() {
  const logoRef = useRef();
  const introRef = useRef();
  const headerRef = useRef();
  const backgroundImageContainer = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let tl = gsap.timeline({
      onComplete: function () {
      const body = document.body;
      body.style.position = "relative";
      setIsLoaded(true);
    },
  });
    tl.to(logoRef.current, {
      scale: 1, 
      opacity: 1, 
      duration: 0.5,
    }).to(backgroundImageContainer.current, {
      delay: 1,
      top: 0,
      duration: 1,
    }).to(headerRef.current, {
      opacity: 1, 
      duration: 1
    });

}, [introRef, logoRef]);

  return (
    <section id="intro" className={s.introContainer} ref={introRef}>
        <div className={s.headerContainer} ref={headerRef}>
          <Header />
        </div>
        <div className={s.backgroundImage} ref={backgroundImageContainer}>
          <img alt="The exchange building exterior" src="./images/DUSYC_EDIT_V1.jpg"/>
        </div>
        <div className={s.logoContainer} ref={logoRef}>
          <Logo />
        </div>
    </section>
  );
}
