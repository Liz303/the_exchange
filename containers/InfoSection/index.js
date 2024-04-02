"use client";
import s from "./style.module.scss";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SheepBug from "@/components/InfoSVGs/sheep_bug";

export default function Info({ data }) {
  const {
    fableText,
    infoCollageElement1,
    infoCollageElement2,
    accoladesSection,
    hoursOfOperationCollection,
  } = data.infoSection;
  const accoladesTitle = accoladesSection?.title;
  const accoladesCopyBlock = accoladesSection?.copyBlock;
  const accoladesArray = accoladesSection?.accoladesCollection?.items;
  const accoladesImage = accoladesSection?.accoladesImage;
  const hoursArray = hoursOfOperationCollection?.items;

  const renderHours = () => {
    return (
      <span>
        Weekly hours:{" "}
        {hoursArray.map((hours, i) => {
          const { altText, startDay, endDay, startTime, endTime } = hours;
          return (
            <span>
              {" "}
              {altText && <i> {altText} </i>} {startDay && startDay}{" "}
              {endDay && `through ${endDay}`} {startTime && startTime}{" "}
              {endTime && `- ${endTime}`} <br />
            </span>
          );
        })}
      </span>
    );
  };

  const renderAccolades = () => {
    return (
      <p>
        {accoladesArray.map((accolade, i) => {
          const { accoladeTitle } = accolade;
          return (
            <span>
              {accoladeTitle} <br />
            </span>
          );
        })}
        <br />
        Library of Congress Cataloging in Publication Data
      </p>
    );
  };

  return (
    <Scrollytelling.Root
      scrub={true}
      start={"top 45%"}
      end={"bottom bottom"}
      // debug={{ markers: true, visualizer: true }}
    >
      <section className={s.sectionWrap}>
        <div
          style={{
            height: "250vh",
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
                    <SheepBug />
                  </div>
                  <Scrollytelling.Stagger
                    overlap={0.2}
                    tween={{
                      start: 5,
                      end: 15,
                      to: { opacity: 1, y: 0 },
                    }}
                  >
                    <p>
                      Copyright @2018 The Wolf's Tailor <br />
                      All rights reserved <br />
                      Including the right to reproduction <br />
                      In whole or in part in any form <br />
                      Published by <i> The Wolf's Tailor </i>
                      <br />
                      {hoursArray && hoursArray.length > 0 ? renderHours() : ""}
                    </p>
                    <p>
                      <i> In Defense of The Maker</i>
                    </p>

                    {accoladesArray && accoladesArray.length > 0 ? (
                      <p>Grateful acknowledgments for recognition from:</p>
                    ) : (
                      ""
                    )}
                    {accoladesArray && accoladesArray.length > 0
                      ? renderAccolades()
                      : ""}
                  </Scrollytelling.Stagger>
                </div>
                <Scrollytelling.Animation
                  tween={{
                    scrub: true,
                    start: 15,
                    end: 25,
                    to: { opacity: 1, y: 0 },
                  }}
                >
                  <div className={s.bottom}>
                    {accoladesTitle && (
                      <div className={s.accoladeTitle}>{accoladesTitle}</div>
                    )}
                    <p>
                      {accoladesCopyBlock && accoladesCopyBlock.json
                        ? documentToReactComponents(accoladesCopyBlock.json)
                        : ""}
                    </p>
                    {accoladesImage && accoladesImage.url ? (
                      <Scrollytelling.Animation
                        tween={{
                          scrub: true,
                          start: 10,
                          end: 50,
                          to: { top: "-10vh", left: "25vw", rotate: 0 },
                        }}
                      >
                        <div className={s.accoladesImage}>
                          <img
                            src={accoladesImage.url}
                            alt={accoladesImage.title}
                          />
                        </div>
                      </Scrollytelling.Animation>
                    ) : (
                      ""
                    )}
                  </div>
                </Scrollytelling.Animation>
              </div>
              <div className={s.colTwo}>
                <Scrollytelling.Animation
                  tween={{
                    scrub: true,
                    start: 0,
                    end: 100,
                    to: { y: "-100vh" },
                  }}
                >
                  <div className={s.fableWrap}>
                    <p>{fableText && fableText}</p>
                    <p>{fableText && fableText}</p>
                    <p>{fableText && fableText}</p>
                    <p>{fableText && fableText}</p>
                  </div>
                </Scrollytelling.Animation>
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
                        duration: 1.5,
                      }}
                    >
                      <div id="collage-large" className={s.largeCollage}>
                        <img
                          src={infoCollageElement2.url}
                          alt={infoCollageElement2.title}
                        />
                      </div>
                    </Scrollytelling.Animation>
                  ) : (
                    ""
                  )}
                </div>
                <Scrollytelling.Animation
                  tween={{
                    start: 20,
                    end: 30,
                    scrub: true,
                    to: { y: 0, opacity: 1 },
                  }}
                >
                  <a className={`glitch ${s.address}`} href="#">
                    <h3>
                      4058 Tejon St <br />
                      Denver, CO 80211
                    </h3>
                  </a>
                </Scrollytelling.Animation>
              </div>
              <div className={s.colFour}>
                <Scrollytelling.Stagger
                  overlap={0.2}
                  tween={{
                    start: 20,
                    end: 30,
                    to: { right: "-50px", opacity: 1 },
                  }}
                >
                  <div className={s.instagramContainer}>
                    <a
                      href="https://www.instagram.com/thewolfstailor"
                      target="blank"
                      className="glitch-no-underline"
                    >
                      <span> @thewolfstailor </span>
                    </a>
                  </div>

                  <div className={s.phoneContainer}>
                    <a href="tel:720.456.6705" className="glitch-no-underline">
                      <span> 720.456.6705 </span>
                    </a>
                  </div>
                </Scrollytelling.Stagger>
              </div>
            </div>
          </Scrollytelling.Pin>
          <Scrollytelling.Waypoint
            at={15}
            tween={{
              target: ["#roman-1"],
              to: { top: "-100px", left: "25vw" },
              duration: 0.5,
              scrub: true,
            }}
          />

          <div className={s.one} id="roman-one">
            <img src="/images/1_I.png" alt="Roman numeral I" />
          </div>
          {infoCollageElement1 && infoCollageElement1.url ? (
            <Scrollytelling.Animation
              tween={{
                scrub: true,
                start: 10,
                end: 90,
                to: { top: 0, left: "25vw" },
              }}
            >
              <div className={s.infoCollageElement1}>
                <img
                  src={infoCollageElement1.url}
                  alt={infoCollageElement1.title}
                />
              </div>
            </Scrollytelling.Animation>
          ) : (
            " "
          )}
        </div>
      </section>
    </Scrollytelling.Root>
  );
}
