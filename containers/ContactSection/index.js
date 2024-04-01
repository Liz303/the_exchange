"use client";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./style.module.scss";

export default function Contact({ data }) {
  console.log({ data });
  return (
    <section>
      <Scrollytelling.Root
        scrub={false}
        // debug={{ markers: true, vizualizer: true }}
      >
        <div
          className="wrapper"
          style={{
            minHeight: "100vh",
            padding: "200px 80px ",
          }}
        >
          <div className={s.left}></div>
          <div className={s.right}>
            <div>
              <p>
                Sign up to receive updates on reservations, events and
                happenings
              </p>
              <h3>form</h3>
            </div>
            <div>
              <p> If interested in collaborating, please reach out</p>
              <h3>work with us</h3>
            </div>
            <div>
              <p>Give a gift</p>
              <h3>gift card</h3>
            </div>
          </div>
        </div>
      </Scrollytelling.Root>
    </section>
  );
}
