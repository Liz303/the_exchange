"use client";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./style.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Intro({ data }) {
  const {
    season,
    aboutText,
    collage,
    collageElement2Small,
    illustrationOne,
    illustrationTwo,
  } = data.introSection;

  return (
    <section>
      <Scrollytelling.Root
        scrub={true}
        start={"top top"}
        end={"bottom bottom"}
        style={{ height: "500vh" }}
      >
        <div
          style={{
            height: "100%",
            position: "relative",
          }}
        >
          <Scrollytelling.Pin
            childHeight={"100vh"}
            pinSpacerHeight={"500vh"}
            top={0}
          >
            <div className={s.introContentWrap}>
              <Scrollytelling.Waypoint
                at={0}
                tween={{
                  target: ["#main-title"],
                  to: [{ opacity: 1, scale: 1 }],
                  duration: 0.5,
                  delay: 1,
                }}
              />

              <h1 className={s.title} id="main-title">
                The Wolf's Taylor
              </h1>
              <Scrollytelling.Animation
                tween={{
                  scrub: true,
                  start: 10,
                  end: 20,
                  fromTo: [
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0 },
                  ],
                }}
              >
                <div className={s.introText}>
                  {aboutText && aboutText.json
                    ? documentToReactComponents(aboutText.json)
                    : ""}
                </div>
              </Scrollytelling.Animation>
            </div>
          </Scrollytelling.Pin>
          <Scrollytelling.Animation
            tween={{ scrub: true, start: 10, end: 100, to: { top: "100vh" } }}
          >
            <div className={s.absolute}>
              <p>first</p>
            </div>
          </Scrollytelling.Animation>
          <Scrollytelling.Animation
            tween={{ scrub: true, start: 15, end: 100, to: { top: "100vh" } }}
          >
            <div className={s.absolute2}>
              <p>second</p>
            </div>
          </Scrollytelling.Animation>
          <Scrollytelling.Animation
            tween={{ scrub: true, start: 25, end: 60, to: { top: "100vh" } }}
          >
            <div className={s.absolute}>
              <p>third</p>
            </div>
          </Scrollytelling.Animation>
          <Scrollytelling.Animation
            tween={{ scrub: true, start: 25, end: 100, to: { top: "100vh" } }}
          >
            <div className={s.absolute2}>
              <p>fourth</p>
            </div>
          </Scrollytelling.Animation>
        </div>
      </Scrollytelling.Root>
    </section>
  );
}
