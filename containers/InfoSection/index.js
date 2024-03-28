"use client";
import s from "./style.module.scss";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SheepBug from "@/components/InfoSVGs/sheep_bug";

export default function Info({ data }) {
  const {fableText, infoCollageElement1, infoCollageElement2, accoladesSection, hoursOfOperationCollection} = data.infoSection;
  const accoladesTitle = accoladesSection?.title;
  const accoladesCopyBlock = accoladesSection?.copyBlock;
  const accoladesArray = accoladesSection?.accoladesCollection?.items;
  const hoursArray = hoursOfOperationCollection?.items;

  
  
  const renderHours = () => {
    return (
      <span>
        Weekly hours: {hoursArray.map((hours, i) => {
          const {altText, startDay, endDay, startTime, endTime} = hours;
          return ( 
            <span> {altText && (<i> {altText} </i>)} {startDay && startDay} {endDay && `through ${endDay}`} {startTime && startTime} {endTime && `- ${endTime}`} <br/></span> 
          )
        })}
      </span>
    );
  }

  const renderAccolades = () => {
    return ( 
      <p>
        {accoladesArray.map((accolade, i) => {
          const {accoladeTitle} = accolade;
          return (
            <span>
              {accoladeTitle} <br/>
            </span>
          )
        })}
        <br/>
        Library of Congress Cataloging in Publication Data
      </p>
    )
  }

  return (
    <Scrollytelling.Root
    scrub={false}
    callbacks={{
      onEnterBack: (st) => {
        st.animation.seek(0).play();
      },
    }}
  >
    <section className={s.infoSection}>
        <div className={s.colOne}>

          <div className={s.top}>
            <div className={s.iconWrap}>
            <SheepBug/>
            </div>
            <p>
                Copyright @2018 The Wolf's Tailor <br/>
                All rights reserved <br/>
                Including the right to reproduction <br/>
                In whole or in part in any form <br/>
                Published by <i> The Wolf's Tailor </i><br/>
                {hoursArray && hoursArray.length > 0 ? renderHours() : "" }
                
            </p>
            <p>
              <i> In Defense of The Maker</i>
            </p>

            {accoladesArray && accoladesArray.length > 0 ? 
              (<p>
              Grateful acknowledgments for recognition from: 
              </p>)   
              : ""
            }
            {accoladesArray && accoladesArray.length > 0 ? renderAccolades() : ""}
            

          </div>
          <div className={s.bottom}>
            {accoladesTitle &&
              (
                <div className={s.accoladeTitle}>
                  {accoladesTitle}
                </div>
              )
            }
            <p>
            {accoladesCopyBlock && accoladesCopyBlock.json ? documentToReactComponents(accoladesCopyBlock.json) : ""}
            </p>
          </div>
        </div>
        <div className={s.colTwo}>
          <div className={s.fableWrap}>
            <p>
              {fableText && fableText}
            </p>
          </div>
        </div>
        <div className={s.colThree}>
          <a href="#">
            <h2> 
              4058 Tejon St <br/>
              Denver, CO 80211 
            </h2>
          </a>
        </div>
        <div className={s.colFour}>

        </div>
    </section>
    </Scrollytelling.Root>

  );
}
