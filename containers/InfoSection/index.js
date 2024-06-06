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
        <a href="./images/rosenburger_menu.pdf" className="no-link" download target="blank">
          <button> View Menu </button>
        </a>
        <div className={s.hoursAndAddress}>
          <div className={s.hours}>
            Friday & Saturday <br/>
            5p.m. - 2a.m
          </div>
          <div className={s.location}>
            <a href="https://maps.app.goo.gl/CrGYt9hhmfDdJ1J68" target="blank">
              725 E 26th Ave, Denver, CO. 80205
            </a>
          </div>
          
        </div>
      
        <a href="tel:720.440.9880" className="no-link">
          <button className="pill"> 720.440.9880 </button> 
        </a>
      
      </section>
    </Scrollytelling.Root>
  );
}
