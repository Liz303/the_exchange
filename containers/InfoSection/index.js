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
  const accoladesImage = accoladesSection?.accoladesImage;
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
      scrub={true}
      start={"top top"}
      end={"bottom bottom"}
      callbacks={{
        onEnterBack: (st) => {
          st.animation.seek(0).play();
        },
      }}
    >

      <section className={s.sectionWrap}>
        <div
          style={{
            height: "300vh",
            position: "relative",
          }}
        >
        
          <Scrollytelling.Pin
            childHeight={"100vh"}
            pinSpacerHeight={"250vh"}
            top={20}
            >
              <div className={s.infoSection}>
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
                    {accoladesImage && accoladesImage.url ? (
                      <Scrollytelling.Animation
                          tween={{ scrub: true, start: 10, end: 90, to: { top: "-100px", left: '25vw', rotate: 0 } }}
                        >
                        <div className={s.accoladesImage}>
                          
                          <img
                              src={accoladesImage.url}
                              alt={accoladesImage.title}
                            />
                        </div>
                      </Scrollytelling.Animation>
                    ) : ""}
            
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
                  <div className={s.largeCollageContainer}>
                    {infoCollageElement2 && infoCollageElement2.url ? (
                      <Scrollytelling.Animation
                      tween={{
                        start: 1,
                        end: 10, 
                        scrub: true,
                        to: { x: 0, rotate: 0 },
                        duration: 1.5
                      }}
                    >
                      <div id="collage-large" className={s.largeCollage}>
                        
                          <img
                            src={infoCollageElement2.url}
                            alt={infoCollageElement2.title}
                          />
          
                      </div>
                      </Scrollytelling.Animation>
                      ) : "" }
                  </div>
                  <a className="glitch" href="#">
                    <h2> 
                      4058 Tejon St <br/>
                      Denver, CO 80211 
                    </h2>
                  </a>
                </div>
                <div className={s.colFour}>
                  <div className={s.instagramContainer}>
                 
                      <a href="https://www.instagram.com/thewolfstailor" target="blank">
                        @thewolfstailor
                      </a>
               
                    
                  </div>
                  <div className={s.phoneContainer}>
                
                      <a href="tel:720.456.6705">
                        720.456.6705
                      </a>
             
                   
                  </div>
                </div>
              </div>
            </Scrollytelling.Pin>
            {infoCollageElement1 && infoCollageElement1.url ? (
            <Scrollytelling.Animation
              tween={{ scrub: true, start: 10, end: 90, to: { top: 0, left: '25vw' } }}
            >
              <div className={s.infoCollageElement1}>
                <img
                  src={infoCollageElement1.url}
                  alt={infoCollageElement1.title}
                />
              </div>
              </Scrollytelling.Animation>
            ) : " "}
        </div>
      </section>
   
    </Scrollytelling.Root>

  );
}
