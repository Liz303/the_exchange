"use client";
import React, { useMemo } from "react";
import s from "./style.module.scss";
import * as Scrollytelling from "@bsmnt/scrollytelling";


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
     
    </div>
  </Scrollytelling.Root>
  );
}
