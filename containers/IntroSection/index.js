"use client";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./style.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Intro({ data }) {
  const {season, aboutText, collage, collageElement2Small, illustrationOne, illustrationTwo} = data.introSection;

  return (
    <section>
      <Scrollytelling.Root
        scrub={true}
        start={"top top"}
        end={"bottom bottom"}
        callbacks={{
          onEnterBack: (st) => {
            st.animation.seek(0).play();
          },
        }}
      >
        <div
          style={{
            height: "600vh",
            position: "relative",
            // alignItems: "center",
            // flexDirection: "column",
          }}
        >
          <Scrollytelling.Pin
            childHeight={"100vh"}
            pinSpacerHeight={"600vh"}
            top={0}
          >
            <div className={s.introContentWrap}>
              <Scrollytelling.Animation
                tween={{
                  start: 0,
                  end: 10,
                  fromTo: [
                    { opacity: 0, scale: 0.95 },
                    { opacity: 1, scale: 1 },
                  ],
                }}
              >
                <h1 className={s.title}>The Wolf's Tailor </h1>
              </Scrollytelling.Animation>
              <Scrollytelling.Animation
                tween={{
                  start: 10,
                  end: 20,
                  fromTo: [
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0 },
                  ],
                }}
              >
                <div className={s.introText}>
                  {aboutText && aboutText.json ? documentToReactComponents(aboutText.json) : ""}
                </div>
              </Scrollytelling.Animation>
            </div>
          </Scrollytelling.Pin>
          <Scrollytelling.Animation
            tween={{ start: 20, end: 90, to: { top: 0 } }}
          >
            <div className={s.absolute}>
              <p>first</p>
            </div>
          </Scrollytelling.Animation>
          <Scrollytelling.Animation
            tween={{ start: 15, end: 100, to: { top: "50%" } }}
          >
            <div className={s.absolute2}>
              <p>second</p>
            </div>
          </Scrollytelling.Animation>
        </div>
      </Scrollytelling.Root>
    </section>
  );
}
