import { useMemo, useRef } from "react";
import s from "./style.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { numberArray } from "@/hooks/numbersArray";

import FlipperTitle from "@/components/FlipperTitle";
import * as Scrollytelling from "@bsmnt/scrollytelling";

import { useWindowDimensions } from "@/hooks/useWindowDimensions";

const MobileEthos = ({ data }) => {
  const {
    copyBlock,
    ethosCollageElement1,
    ethosCollageElement2,
    illustration1,
    annotationsCollection,
    illustration2,
    ethosImage,
  } = data;

  const { winHeight, vh } = useWindowDimensions();
  const textRef = useRef(null);

  return (
    <div id="ethos" style={{ position: "relative", maxWidth: "100vw" }}>
      <Scrollytelling.Root
        defaults={{ ease: "none" }}
        // debug={{ markers: true, vizualizer: true }}
        end="bottom 50%"
        scrub={true}
        callbacks={{
          refreshPriority: 3,
          invalidateOnRefresh: true,
        }}
      >
        <section>
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
            childHeight={`${100 * vh}px`}
            pinSpacerHeight={`${150 * vh}px`}
          >
            <div className={s.mobileFlipperWrap}>
              <FlipperTitle />
            </div>
          </Scrollytelling.Pin>
          <Scrollytelling.Pin
            childHeight={`${100 * vh}px`}
            pinSpacerHeight={`${200 * vh}px`}
            pinSpacerClassName={"mobile-pin-spacer"}
            childClassName={"mobile-pin-style"}
          >
            <Scrollytelling.Animation
              tween={[
                {
                  start: 15,
                  end: 20,
                  to: {
                    top:
                      textRef?.current?.clientHeight > winHeight
                        ? -textRef?.current?.clientHeight / 2
                        : 0,
                  },
                },
                {
                  start: 15,
                  end: 20,
                  to: { opacity: 0, y: 50 },
                },
              ]}
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
          <Scrollytelling.Animation
            tween={{
              scrub: true,
              start: 80,
              end: 95,
              to: { opacity: 1, scale: 1 },
            }}
          >
            <div className={s.mobileIllustration}>
              <img src={illustration2.url} alt={illustration2.title} />
            </div>
          </Scrollytelling.Animation>
        </section>
      </Scrollytelling.Root>
    </div>
  );
};

export default MobileEthos;
