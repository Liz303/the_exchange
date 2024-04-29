"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import s from "./style.module.scss";

import FlipperTitle from "@/components/FlipperTitle";
import * as Scrollytelling from "@bsmnt/scrollytelling";

import { numberArray } from "@/hooks/numbersArray";

const MobileEthos = ({ data }) => {
  const {
    copyBlock,
    ethosCollageElement1,
    ethosCollageElement2,
    illustration1,
    annotationsCollection,
    illustration2,
    ethosCollageElement3,
    ethosImage,
  } = data;

  return (
    <>
      <Scrollytelling.Root
        defaults={{
          ease: "none",
          refreshPriority: 1,
          invalidateOnRefresh: true,
          normalizeScroll: true,
          ignoreMobileResize: true,
        }}
        // debug={{ markers: true, vizualizer: true }}
        scrub={true}
        end="bottom 50%"
        // callbacks={{
        //   refreshPriority: 3,
        //   invalidateOnRefresh: true,
        // }}
      >
        <section id="ethos">
          <Scrollytelling.Waypoint
            at={99}
            onCall={() =>
              document.body.classList.replace("light-theme", "dark-theme")
            }
            onReverseCall={() =>
              document.body.classList.replace("dark-theme", "light-theme")
            }
          />
          <Scrollytelling.Pin childHeight="100vh" pinSpacerHeight="150vh">
            <div className={s.mobileFlipperWrap}>
              <FlipperTitle />
            </div>
          </Scrollytelling.Pin>
          <Scrollytelling.Pin
            childHeight="100vh"
            pinSpacerHeight="175vh"
            pinSpacerClassName={"mobile-pin-spacer"}
            //   childClassName={"mobile-pin-style"}
          >
            <Scrollytelling.Animation
              tween={[
                {
                  start: 15,
                  end: 20,
                  to: { opacity: 1, scale: 1 },
                },
              ]}
            >
              <div className={s.mobileIntroText} id="ethos-text">
                {documentToReactComponents(copyBlock?.json)}
              </div>
            </Scrollytelling.Animation>
            <Scrollytelling.Animation
              tween={{
                scrub: true,
                start: 25,
                end: 55,
                to: { top: "-150%" },
              }}
            >
              <div className={s.mobileCollage2}>
                <div className={s.mobileTwo}>
                  <img src="/images/II.png" alt="Roman numeral II" />
                </div>
                <div>
                  <img
                    src={ethosCollageElement2.url}
                    alt={ethosCollageElement2.title}
                  />
                </div>
              </div>
            </Scrollytelling.Animation>

            <Scrollytelling.Animation
              tween={{
                scrub: true,
                start: 35,
                end: 50,
                to: { left: "120%", top: "-100%" },
              }}
            >
              <div className={s.mobileCollage1}>
                <img
                  src={ethosCollageElement1.url}
                  alt={ethosCollageElement1.title}
                />
              </div>
            </Scrollytelling.Animation>
          </Scrollytelling.Pin>

          <div style={{ padding: "36px" }}>
            <Scrollytelling.Animation
              tween={{
                scrub: true,
                start: 55,
                end: 60,
                to: { opacity: 1, scale: 1 },
              }}
            >
              <div className={s.mobileWolf}>
                <img src={illustration1.url} alt={illustration1.title} />
              </div>
            </Scrollytelling.Animation>

            <Scrollytelling.Animation
              tween={{
                scrub: true,
                start: 60,
                end: 65,
                to: { opacity: 1, scale: 1, y: -50 },
              }}
            >
              <div className={s.mobileEthosImg}>
                <img src={ethosImage.url} alt={ethosImage.title} />
              </div>
            </Scrollytelling.Animation>

            <div className={s.gridContainer}>
              <Scrollytelling.Stagger
                // overlap={0.2}
                tween={{
                  start: 65,
                  end: 80,
                  to: { opacity: 1, y: 0 },
                }}
              >
                {annotationsCollection?.items?.map((annotation, index) => {
                  return (
                    <div key={index} className={s.gridItem}>
                      <div className={s.number}>
                        <img
                          src={numberArray[index].src}
                          alt={`number-${index + 1}`}
                        />
                      </div>
                      <div>
                        {documentToReactComponents(
                          annotation?.annotationCopy?.json
                        )}
                      </div>

                      {annotation?.annotationImage && (
                        <div className={s.annotationImage}>
                          <img
                            src={annotation.annotationImage.url}
                            alt={annotation.annotationImage.title}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </Scrollytelling.Stagger>
            </div>
          </div>
        </section>
      </Scrollytelling.Root>
    </>
  );
};

export default MobileEthos;
