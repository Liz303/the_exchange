"use client";
import s from "./style.module.scss";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SheepBug from "@/components/InfoSVGs/sheep_bug";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import InstagramSvg from "@/components/InfoSVGs/InstagramSvg";
import PhoneSvg from "@/components/InfoSVGs/PhoneSvg";

export default function Info({ data }) {
  const {
    fableTextNew,
    infoCollageElement1,
    infoCollageElement2,
    accoladesSection,
    hoursOfOperationCollection,
  } = data;
  const accoladesTitle = accoladesSection?.title;
  const accoladesCopyBlock = accoladesSection?.copyBlock;
  const accoladesArray = accoladesSection?.accoladesCollection?.items;
  const accoladesImage = accoladesSection?.accoladesImage;
  const hoursArray = hoursOfOperationCollection?.items;
  const { winWidth } = useWindowDimensions();
  const isSmall = winWidth < 1079;
  const isTablet = winWidth < 820;
  const isMobile = winWidth < 430;

  const fableTextLength = () => {
    let textLength = 0;
    fableTextNew.json.forEach((paragraph) => {
      textLength += paragraph[0].value.length;
    });
    return textLength;
  };

  const renderHours = () => {
    return (
      <span className={s.hours}>
        <span className={s.hideMobile}> Weekly hours: </span>
        {hoursArray.map((hours, i) => {
          const { altText, startDay, endDay, startTime, endTime } = hours;
          return (
            <span key={`hours-${i}`}>
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
            <span key={`accolade-${i}`}>
              {accoladeTitle} <br />
            </span>
          );
        })}
        <br />
        <span className={s.hideMobile}>
          Library of Congress Cataloging in Publication Data
        </span>
      </p>
    );
  };

  const renderInfoSection = () => {
    return (
      <div className={s.infoSection}>
        <div className={s.colOne}>
        <Scrollytelling.Animation
            tween={{
              start: isMobile ? 0 : 10,
              end: isMobile ? 60 : 50,
              to: { top: "-10px", left: "60px" },
              scrub: true,
            }}
          >
            <div className={s.one}>
              <img src="/images/I.png" alt="Roman numeral I" />
            </div>
          </Scrollytelling.Animation>
          <div className={s.top}>
            <Scrollytelling.Animation
              tween={{
                scrub: true,
                start: 0,
                end: 5,
                to: { scale: 1, opacity: 1 },
              }}
            >
              <div className={s.iconWrap}>
                <SheepBug />
              </div>
            </Scrollytelling.Animation>
            <Scrollytelling.Stagger
              overlap={0.2}
              tween={{
                start: isMobile ? 50 : 5,
                end: isMobile ? 90 : 15,
                to: { opacity: 1, y: 0 },
              }}
            >
              <p className={s.hideMobile}>
                Copyright @2018 The Wolf's Tailor <br />
                All rights reserved <br />
                Including the right to reproduction <br />
                In whole or in part in any form <br />
                Published by <i> The Wolf's Tailor </i>
                <br />
                {hoursArray && hoursArray.length > 0 ? renderHours() : ""}
              </p>
              <p className={s.hideMobile}>
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
              start: isMobile ? 80 : 5,
              end: isMobile ? 100 : 15,
              to: { opacity: 1, y: 0 },
            }}
          >
            <div className={s.bottom}>
              {accoladesTitle && (
                <div className={s.accoladeTitle}>{accoladesTitle}</div>
              )}

              {accoladesCopyBlock && accoladesCopyBlock.json
                ? documentToReactComponents(accoladesCopyBlock.json)
                : ""}

              {accoladesImage && accoladesImage.url ? (
                <Scrollytelling.Animation
                  tween={{
                    scrub: true,
                    start: isMobile ? 50 : 10,
                    end: isMobile ? 100 : 50,
                    to: {
                      top: isMobile ? "-70vh" : isTablet ? "0vh" : "-10vh",
                      left: "25vw",
                      rotate: 0,
                    },
                  }}
                >
                  <div className={s.accoladesImage}>
                    <img src={accoladesImage.url} alt={accoladesImage.title} />
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
              {documentToReactComponents(fableTextNew.json)}
              {documentToReactComponents(fableTextNew.json)}
              {fableTextLength < 400 &&
                documentToReactComponents(fableTextNew.json)}
              {fableTextLength < 400 &&
                documentToReactComponents(fableTextNew.json)}
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
              start: isMobile ? 35 : 20,
              end: isMobile ? 50 : 30,
              scrub: true,
              to: { y: 0, opacity: 1 },
            }}
          >
            <span className={s.address}>
              <label className={s.showMobile}> Address </label>
              <a
                className={`glitch`}
                href="https://www.google.com/maps/place/4058+Tejon+St,+Denver,+CO+80211/data=!4m2!3m1!1s0x876c788ae2a40fc3:0x50583e1b3236d294?sa=X&ved=1t:242&ictx=111"
                target="_blank"
              >
                <h3>
                  4058 Tejon St <br />
                  Denver, CO 80211
                </h3>
              </a>
            </span>
          </Scrollytelling.Animation>
          <div className={`${s.showMobile} ${s.mobileHours}`}>
            <label> Hours </label>
            <br />
            <h3>{hoursArray && hoursArray.length > 0 ? renderHours() : ""}</h3>
          </div>
        </div>
        <div className={s.colFour}>
          <Scrollytelling.Stagger
            overlap={0.2}
            tween={{
              start: isMobile ? 35 : 20,
              end: isMobile ? 50 : 30,
              to: {
                right: isMobile
                  ? "0"
                  : isTablet
                  ? "-20vw"
                  : isSmall
                  ? " -12vw"
                  : "-50px",
                opacity: 1,
              },
            }}
          >
            <div className={s.instagramContainer}>
              <a href="https://www.instagram.com/thewolfstailor" target="blank">
                <span> @thewolfstailor </span>
                <InstagramSvg />
              </a>
            </div>

            <div className={s.phoneContainer}>
              <a href="tel:720.456.6705">
                <span> 720.456.6705 </span>
                <PhoneSvg />
              </a>
            </div>
          </Scrollytelling.Stagger>
        </div>
      </div>
    );
  };
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
        <div
          style={{
            height: isMobile ? "auto" : "300vh",
            position: "relative",
          }}
        >
          {isMobile ? (
            <>{renderInfoSection()}</>
          ) : (
            <Scrollytelling.Pin
              childHeight={"100vh"}
              pinSpacerHeight={"250vh"}
              top={20}
            >
              {renderInfoSection()}
            </Scrollytelling.Pin>
          )}

         
          {infoCollageElement1 && infoCollageElement1.url ? (
            <Scrollytelling.Animation
              tween={{
                scrub: true,
                start: isMobile ? 20 : 10,
                end: isMobile ? 100 : 90,
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
