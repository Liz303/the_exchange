"use client";
import s from "./style.module.scss";
import * as Scrollytelling from "@bsmnt/scrollytelling";


export default function Info({ data }) {
  
  return (
    <Scrollytelling.Root
      scrub={true}
      start={"top 45%"}
      end={"bottom bottom"}
      callbacks={{
        refreshPriority: 2,
        invalidateOnRefresh: true,
      }}
    >
      <section className={s.sectionWrap} id="info">
        <a href="#">
          <button> View Menu </button>
        </a>
        
      </section>
    </Scrollytelling.Root>
  );
}
