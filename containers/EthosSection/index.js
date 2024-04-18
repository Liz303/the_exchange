"use client";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./style.module.scss";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import MobileEthos from "./MobileEthos";

export default function Ethos({ data }) {
  const { ethosSwap } = useWindowDimensions();

  return (
    <>
      {ethosSwap ? (
        <MobileEthos data={data} />
      ) : (
        <Scrollytelling.Root
          defaults={{ ease: "none" }}
          // debug={{ markers: true, vizualizer: true }}
          end="bottom 20%"
          scrub={true}
          callbacks={{
            refreshPriority: 3,
            invalidateOnRefresh: true,
          }}
        >
          <section id="ethos" className={s.ethosSection}>
            <Scrollytelling.Waypoint
              at={99}
              onCall={() =>
                document.body.classList.replace("light-theme", "dark-theme")
              }
              onReverseCall={() =>
                document.body.classList.replace("dark-theme", "light-theme")
              }
            />
            <Scrollytelling.Pin
              childHeight={"100vh"}
              pinSpacerHeight={"600vh"}
              pinSpacerClassName={"pin-spacer"}
              childClassName={"pin-style"}
            >
              <SectionOne data={data} />
              <SectionTwo data={data} />
            </Scrollytelling.Pin>
          </section>
        </Scrollytelling.Root>
      )}
    </>
  );
}
