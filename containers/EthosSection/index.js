"use client";
import { useMemo, useRef } from "react";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./style.module.scss";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Ethos({ data }) {
  console.log({ data });
  const {
    annotationsCollection,
    copyBlock,
    ethosCollageElement1,
    ethosCollageElement2,
    ethosCollageElemt3,
    ethosImage,
    illustration1,
    illustration2,
    largePullText,
  } = data?.ethosSection;
  const containerRef = useRef(null);

  const sectionData = [{ label: "SECTION 1" }, { label: "SECTION 2" }];

  const horizontalScrollTween = useMemo(() => {
    return { xPercent: -100 * (sectionData.length - 1), ease: "none" };
  }, [sectionData.length]);

  const sectionElements = sectionData.map((section, index) => (
    <Scrollytelling.Animation
      key={index}
      tween={{
        start: 50,
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

  const Section1 = () => (
    <Scrollytelling.Animation
      tween={{
        start: 50,
        end: 100,
        to: horizontalScrollTween,
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "100%",
        }}
      >
        <div>
          DESTRUCTION
          <br />
          CREATION
        </div>
        <div className={s.introText}>
          {documentToReactComponents(copyBlock.json)}
        </div>
      </div>
    </Scrollytelling.Animation>
  );

  const Section2 = () => {
    return (
      <Scrollytelling.Animation
        tween={{
          start: 50,
          end: 100,
          to: horizontalScrollTween,
        }}
      >
        <div
          style={{
            width: "100vw",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>section 2</h2>
        </div>
      </Scrollytelling.Animation>
    );
  };

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
          {Section1()}
          {Section2()}
        </Scrollytelling.Pin>
      </section>
    </Scrollytelling.Root>
  );
}
