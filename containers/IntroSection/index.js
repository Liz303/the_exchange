"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import s from "./style.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BurgerAndBagel from "@/components/SVGs/burgerAndBagel";
import Rosen from "@/components/SVGs/Rosen";
import Burger from "@/components/SVGs/Burger";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

export default function Intro() {
  const headlineRef = useRef();
  const burgerAndBagelRef = useRef();
  const quoteRef = useRef();
  const highlightRef = useRef();
  const rosenRef = useRef();
  const burgerRef = useRef();
  const introRef = useRef();
  const [showQuote, setShowQuote] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let tl = gsap.timeline({
      onComplete: function () {
      const body = document.body;
      body.style.position = "relative";
      setIsLoaded(true);
    },
  });
    tl.to(headlineRef.current, {
      scale: 1, 
      duration: 0.5,
    }).to(burgerAndBagelRef.current, {
      x: 0,
    }).to(quoteRef.current, {
      opacity: 1
    }).to(highlightRef.current, {
      duration: 0.25,
      x: 0
    }).to(rosenRef.current, {
      duration: 0.5,
      x: 0
    }).to(burgerRef.current, {
      y: 0
    }).to(headlineRef.current, {
      y: -300
    }).to(headlineRef.current, {
      height: 0
    }).to([quoteRef.current, highlightRef.current], {
      opacity: 0
    }).to(introRef.current, {
      width: "83.3333vw",
    });

}, [introRef, quoteRef, headlineRef, burgerRef, rosenRef, burgerAndBagelRef]);

  return (
    <section id="intro" className={s.introContainer} ref={introRef}>
        <div className={s.eyebrowContainer} ref={headlineRef}>
            <h1 className={s.loaderHead} > WHEN DELI & DINNER Collide </h1>
        </div>
        <div className={s.rowOne}>
          <div className={s.columnOne}>
           <div className={s.burgerAndBagel} ref={burgerAndBagelRef} onMouseEnter={() => setShowQuote(true)} onMouseLeave={() => setShowQuote(false)}>
            <BurgerAndBagel />
           </div>
          </div>
          <div className={s.columnTwo}>
            <div className={`${s.quoteContainer} ${(showQuote && isLoaded) ? s.show : s.hide}`} ref={quoteRef}>
              <span className="quote"> "Hey, I'm grillin' here!" </span>
            </div>
            <div className={s.highlight} ref={highlightRef}>
              Home of the $3.80 burger
            </div>
            <div className={s.rosen} ref={rosenRef}>
              <Rosen />
            </div>
          </div>
        </div>
        <div className={s.rowTwo} ref={burgerRef}>
          <Burger />
        </div>
    </section>
  );
}
