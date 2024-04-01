import { useMemo, useRef } from "react";
import s from "./style.module.scss";

import FlipperTitle from "@/components/FlipperTitle";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const SectionOne = ({ data }) => {
  const {
    copyBlock,
    ethosCollageElement1,
    ethosCollageElement2,
    illustration1,
  } = data;
  return (
    <>
      <Scrollytelling.Waypoint
        at={5}
        scrub={true}
        tween={{
          target: ["#ethos-text"],
          to: { opacity: 1, scale: 1 },
          duration: 0.75,
          scrub: true,
        }}
      />
      <Scrollytelling.Waypoint
        at={5}
        scrub={true}
        tween={{
          target: ["#ethos-illustration"],
          to: { opacity: 1, rotate: 360, left: "70vw" },
          duration: 0.75,
          scrub: true,
        }}
      />
      <Scrollytelling.Animation
        tween={{
          start: 50,
          end: 100,
          to: { xPercent: -100, ease: "none" },
        }}
      >
        <div
          style={{
            width: "100vw",
            padding: "80px 90px",
          }}
        >
          <FlipperTitle />
          <Scrollytelling.Animation
            tween={{
              start: 50,
              end: 60,
              to: { opacity: 0, y: 50 },
            }}
          >
            <div className={s.introText} id="ethos-text">
              {documentToReactComponents(copyBlock?.json)}
            </div>
          </Scrollytelling.Animation>
        </div>
      </Scrollytelling.Animation>
      <Scrollytelling.Animation
        tween={{ scrub: true, start: 10, end: 50, to: { top: "-50%" } }}
      >
        <div className={s.ethosCollageOne}>
          <img
            src={ethosCollageElement1.url}
            alt={ethosCollageElement1.title}
          />
        </div>
      </Scrollytelling.Animation>
      <Scrollytelling.Animation
        tween={{ scrub: true, start: 20, end: 40, to: { top: "-20%" } }}
      >
        <div className={s.ethosCollageTwo}>
          <img
            src={ethosCollageElement2.url}
            alt={ethosCollageElement2.title}
          />
        </div>
      </Scrollytelling.Animation>
      <Scrollytelling.Animation
        tween={{
          scrub: true,
          start: 18,
          end: 50,
          to: { opacity: 0 },
        }}
      >
        <div className={s.ethosIllistration} id="ethos-illustration">
          <img src={illustration1.url} alt={illustration1.title} />
        </div>
      </Scrollytelling.Animation>
    </>
  );
};

export default SectionOne;
