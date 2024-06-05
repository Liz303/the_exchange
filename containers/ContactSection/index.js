"use client";
import React, { useMemo } from "react";
import s from "./style.module.scss";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import Condiment from "@/components/SVGs/Condiment";
import Star
 from "@/components/SVGs/Star";
 import Insta
  from "@/components/SVGs/Insta";
export default function Contact() {
  return (
  <Scrollytelling.Root
    scrub={true}
    start="top 80%"
    callbacks={{
      refreshPriority: 4,
      invalidateOnRefresh: true,
    }}
    // debug={{ markers: true, vizualizer: false }}
  >
    <div id="contact" className={s.contactWrapper}>
      <div className={s.borderContainer}>
      </div>
      <div className={s.taglineRow}>
        <div className={s.icon}>
          <Condiment />
        </div>
        <span> Jersey Burgers One Mile High </span>
        <div className={s.icon}>
          <Star />
        </div>
      </div>
      <div className={s.socialContainer}>
        <a className="noline" href="#">
          <div className={s.circle}>
            <Insta />
          </div>
        </a>
      </div>
      <div className={s.logoContainer}>
        <img src="./images/rosenbergs-logo.svg"/>
      </div>
      <a href="https://rosenbergsbagels.com/" className="no-link">
        rosenbergsbagels.com
      </a>
    </div>
  </Scrollytelling.Root>
  );
}
