"use client";
import { useMemo, useRef } from "react";
import * as Scrollytelling from "@bsmnt/scrollytelling";

export default function Ethos() {
  const containerRef = useRef(null);

  const sectionData = [
    { label: "SECTION 1" },
    { label: "SECTION 2" },
    { label: "SECTION 3" },
  ];

  const horizontalScrollTween = useMemo(() => {
    return { xPercent: -100 * (sectionData.length - 1), ease: "none" };
  }, [sectionData.length]);

  const sectionElements = sectionData.map((section, index) => (
    <Scrollytelling.Animation
      key={index}
      tween={{
        start: 0,
        end: 100,
        to: horizontalScrollTween,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>{section.label}</h2>
      </div>
    </Scrollytelling.Animation>
  ));

  return (
    <Scrollytelling.Root defaults={{ ease: "none" }} scrub={1} end="+=3500">
      <section id="ethos">
        <Scrollytelling.Pin
          childHeight={"100vh"}
          pinSpacerHeight={"500vh"}
          pinSpacerClassName={"pin-spacer"}
          childClassName={"pin-style"}
          ref={containerRef}
        >
          {sectionElements}
        </Scrollytelling.Pin>
      </section>
    </Scrollytelling.Root>
  );
}
