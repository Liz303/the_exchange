"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./style.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BurgerAndBagel from "@/components/SVGs/burgerAndBagel";
import Rosen from "@/components/SVGs/Rosen";
import Burger from "@/components/SVGs/Burger";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

export default function Intro() {


  return (
    <section id="intro">
      <Scrollytelling.Root
        scrub={true}
        start={"top top"}
        end={"bottom bottom"}
        callbacks={{
          refreshPriority: 1,
          invalidateOnRefresh: true,
        }}
      >
        <div className={s.eyebrowContainer}>
            <h1 className={s.loaderHead}> WHEN DELI & DINNER Collide </h1>
        </div>
      </Scrollytelling.Root>
        <div className={s.rowOne}>
          <div className={s.columnOne}>
           <div className={s.burgerAndBagel}>
            <BurgerAndBagel />
           </div>
          </div>
          <div className={s.columnTwo}>
            <div className={s.quoteContainer}>
              <span className="quote"> "Hey, I'm grillin' here!" </span>
            </div>
            <div className={s.highlight}>
              Home of the $3.80 burger
            </div>
            <div className={s.rosen}>
              <Rosen />
            </div>
          </div>
        </div>
        <div className={s.rowTwo}>
          <Burger />
        </div>
    </section>
  );
}
