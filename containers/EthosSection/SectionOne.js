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

  const textRef = useRef(null);

  const height = textRef?.current?.clientHeight;

  return (
    <div className={s.sectionOne}>
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
            height: "auto",
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
            <div>
              <Scrollytelling.Animation
                tween={{
                  start: 20,
                  end: 50,
                  to: { y: height > 600 ? "-100%" : 0 },
                }}
              >
                <div className={s.introText} id="ethos-text" ref={textRef}>
                  {documentToReactComponents(copyBlock?.json)}
                </div>
              </Scrollytelling.Animation>
            </div>
          </Scrollytelling.Animation>
        </div>
      </Scrollytelling.Animation>

      <Scrollytelling.Animation
        tween={{
          scrub: true,
          start: 10,
          end: 100,
          to: { left: "-50%", top: "-10vh" },
        }}
      >
        <div className={s.ethosCollageOne}>
          <img
            src={ethosCollageElement1.url}
            alt={ethosCollageElement1.title}
          />
        </div>
      </Scrollytelling.Animation>
      <Scrollytelling.Animation
        tween={{
          start: 0,
          end: 50,
          to: { top: "-30%", right: "40vw" },
          scrub: true,
        }}
      >
        <div className={s.two}>
          <img src="/images/II.png" alt="Roman numeral II" />
        </div>
      </Scrollytelling.Animation>
      <Scrollytelling.Animation
        tween={{ scrub: true, start: 32, end: 60, to: { top: "-50%" } }}
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
    </div>
  );
};

export default SectionOne;
