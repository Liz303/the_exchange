"use client";
import * as Scrollytelling from "@bsmnt/scrollytelling";

export default function Contact() {
  return (
    <section>
      <section className="section">
        <div className="wrapper">
          <h1>Section1</h1>
        </div>
      </section>

      <section className="section orange">
        <Scrollytelling.Root
          scrub={false}
          callbacks={{
            onEnterBack: (st) => {
              st.animation.seek(0).play();
            },
          }}
        >
          <div
            className="wrapper"
            style={{
              height: "100vh",
            }}
          >
            <Scrollytelling.Animation
              tween={{ start: 0, end: 1, to: { rotate: 360 } }}
            >
              <h1>This element will spin.</h1>
            </Scrollytelling.Animation>
            <Scrollytelling.Animation
              tween={{
                start: 0.25,
                end: 0.75,
                to: { scale: 1.5, yoyo: true, repeat: -1 },
              }}
            >
              <h1>Yoyo Text</h1>
            </Scrollytelling.Animation>
          </div>
        </Scrollytelling.Root>
      </section>
    </section>
  );
}
