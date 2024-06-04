"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./style.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
        <div>
            <h1 className={s.loaderHead}> WHEN DELI & DINNER Collide </h1>
        </div>
      </Scrollytelling.Root>
    </section>
  );
}
