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

  console.log({ data });
  return (
    <section>
      <Scrollytelling.Root
        scrub={true}
        start={"top top"}
        end={"bottom bottom"}
        style={{ height: "150vh" }}
        debug={true}
      >
        <div
          style={{
            height: "100%",
            position: "relative",
          }}
        >
          <Scrollytelling.Waypoint
            at={0}
            tween={{
              target: ["#main-title"],
              to: { opacity: 1, scale: 1 },
              duration: 0.5,
              delay: 1,
            }}
          />
          <h1 className={s.title} id="main-title">
            The Wolf's Taylor
          </h1>
          <Scrollytelling.Pin
            childHeight={"100vh"}
            pinSpacerHeight={"150vh"}
            top={0}
          >
            <div className={s.introContentWrap}>
              <Scrollytelling.Animation
                tween={{
                  scrub: true,
                  start: 0,
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

            <Scrollytelling.Waypoint
              at={15}
              tween={{
                target: ["#illustration-one"],
                to: { opacity: 1, scale: 1 },
                duration: 0.25,
                scrub: true,
              }}
            />
            <Scrollytelling.Waypoint
              at={60}
              tween={{
                target: ["#illustration-two"],
                to: { opacity: 1, scale: 1 },
                duration: 0.5,
                scrub: true,
              }}
            />

            <div className={s.illustratioOne} id="illustration-one">
              <img src={illustrationOne.url} alt={illustrationOne.title} />
            </div>
            <div className={s.illustrationTwo} id="illustration-two">
              <img src={illustrationTwo.url} alt={illustrationTwo.title} />
            </div>
          </Scrollytelling.Pin>
          <Scrollytelling.Animation
            tween={{ scrub: true, start: 10, end: 90, to: { top: 0 } }}
          >
            <div className={s.absolute}>
              <img
                src={collageElement2Small.url}
                alt={collageElement2Small.title}
              />
            </div>
          </Scrollytelling.Animation>
          <Scrollytelling.Animation
            tween={{ scrub: true, start: 30, end: 90, to: { top: "-20%" } }}
          >
            <div className={s.absolute2}>
              <img src={collage.url} alt={collage.title} />
            </div>
          </Scrollytelling.Animation>
        </div>
      </Scrollytelling.Root>
    </section>
  );
}
