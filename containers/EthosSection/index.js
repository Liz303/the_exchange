"use client";
import { useMemo, useRef } from "react";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./style.module.scss";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

export default function Ethos({ data }) {
  return (
    <Scrollytelling.Root
      defaults={{ ease: "none" }}
      // debug={{ markers: true, vizualizer: true }}
      scrub={true}
      end="+=6500"
    >
      <section id="ethos">
        <Scrollytelling.Pin
          childHeight={"100vh"}
          pinSpacerHeight={"1200vh"}
          pinSpacerClassName={"pin-spacer"}
          childClassName={"pin-style"}
        >
          <SectionOne data={data?.ethosSection} />
          <SectionTwo data={data?.ethosSection} />
        </Scrollytelling.Pin>
      </section>
    </Scrollytelling.Root>
  );
}
