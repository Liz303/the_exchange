import { useRef } from "react";
import s from "./style.module.scss";

import FlipperTitle from "@/components/FlipperTitle";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

const SectionOne = ({ data }) => {
  const {
    copyBlock,
    ethosCollageElement1,
    ethosCollageElement2,
    illustration1,
  } = data;

  const { winHeight } = useWindowDimensions();
  const textRef = useRef(null);

  const height = textRef?.current?.clientHeight - 80;

  console.log("height ", height);
  console.log("winHeight ", winHeight);

  return (
    <div className={s.sectionOne}>
      <Scrollytelling.Waypoint
        at={8}
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
          start: 40,
          end: 90,
          to: { xPercent: -100, ease: "none" },
        }}
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "relative",
            boxSizing: "border-box",
          }}
        >
          <div>
            <Scrollytelling.Animation
              tween={[
                {
                  start: 15,
                  end: 30,
                  to: {
                    top: height > winHeight ? -height / 2 : 0,
                  },
                },
                {
                  start: 50,
                  end: 60,
                  to: { opacity: 0, y: 50 },
                },
              ]}
            >
              <div
                ref={textRef}
                style={{
                  position: "absolute",
                  padding: "80px 90px",
                  width: "100%",
                  top: 0,
                  left: 0,
                }}
              >
                <FlipperTitle />
                <Scrollytelling.Animation
                  tween={[
                    {
                      start: 12,
                      end: 15,
                      to: { opacity: 1, scale: 1 },
                    },
                  ]}
                >
                  <div className={s.introText} id="ethos-text">
                    {documentToReactComponents(copyBlock?.json)}
                  </div>
                </Scrollytelling.Animation>
              </div>
            </Scrollytelling.Animation>
          </div>
        </div>
      </Scrollytelling.Animation>
      <Scrollytelling.Animation
        tween={{
          scrub: true,
          start: 20,
          end: 50,
          to: { left: "-70%", top: "-50vh" },
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
          start: 50,
          end: 60,
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
