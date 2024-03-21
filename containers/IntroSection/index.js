"use client";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./style.module.scss";

export default function Intro() {
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Scrollytelling.Pin
            childHeight={"100vh"}
            pinSpacerHeight={"600vh"}
            top={0}
          >
            <Scrollytelling.Animation
              tween={{
                start: 0,
                end: 20,
                fromTo: [
                  { opacity: 0, scale: 0.8 },
                  { opacity: 1, scale: 1 },
                ],
              }}
            >
              <h1 className={s.title}>This element will spin.</h1>
            </Scrollytelling.Animation>
            <Scrollytelling.Animation
              tween={{
                start: 20,
                end: 30,
                fromTo: [
                  { opacity: 0, y: 50 },
                  { opacity: 1, y: 0 },
                ],
              }}
            >
              <p className={s.introText}>
                This element will stay pinned at its initial position while the
                rest of the content scrolls underneath it.
              </p>
            </Scrollytelling.Animation>
          </Scrollytelling.Pin>
          <Scrollytelling.Animation
            tween={{ start: 40, end: 60, to: { rotate: 360 } }}
          >
            <h1>This element will spin.</h1>
          </Scrollytelling.Animation>
          <Scrollytelling.Animation
            tween={{
              start: 50,
              end: 100,
              to: { scale: 1.5, yoyo: false },
            }}
          >
            <h1>Yoyo Text</h1>
          </Scrollytelling.Animation>
        </div>
      </Scrollytelling.Root>
    </section>
  );
}
