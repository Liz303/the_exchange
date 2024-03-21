"use client";
import * as Scrollytelling from "@bsmnt/scrollytelling";

export default function Info() {
  return (
    <section>
      <section>
        <h1>Section2</h1>
      </section>

      <section>
        <Scrollytelling.Root
          scrub={true}
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
                to: { scale: 1.5, yoyo: true },
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
