"use client";
import { useMemo, useRef } from "react";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./style.module.scss";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

export default function Ethos({ data, season }) {
  return (
    <Scrollytelling.Root
      defaults={{ ease: "none" }}
      // debug={{ markers: true, vizualizer: true }}
      scrub={true}
    >
      <section id="ethos" className={s.ethosSection}>
        <Scrollytelling.Waypoint
          at={99}
          onCall={() =>
            document.body.classList.replace("light-theme", "dark-theme")
          }
          onReverseCall={() =>
            document.body.classList.replace("dark-theme", "light-theme")
          }
        />
        <Scrollytelling.Pin
          childHeight={"100vh"}
          pinSpacerHeight={"650vh"}
          pinSpacerClassName={"pin-spacer"}
          childClassName={"pin-style"}
        >
          <SectionOne data={data?.ethosSection} />
          <SectionTwo data={data?.ethosSection} season={season} />
        </Scrollytelling.Pin>
      </section>
    </Scrollytelling.Root>
  );
}
