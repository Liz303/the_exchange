"use client";
import * as Scrollytelling from "@bsmnt/scrollytelling";

export default function Info() {
  return (
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
        <h1> Placeholder</h1>
        </div>
      </Scrollytelling.Root>
    </section>

  );
}
