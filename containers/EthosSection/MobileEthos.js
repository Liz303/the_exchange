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
    ethosCollageElement3,
    ethosImage,
  } = data;

  const { winHeight } = useWindowDimensions();
  const textRef = useRef(null);

  return (
    <div id="ethos" style={{ position: "relative", maxWidth: "100vw" }}>
      <Scrollytelling.Root
        defaults={{ ease: "none" }}
        // debug={{ markers: true, vizualizer: true }}
        end="bottom 80%"
        scrub={true}
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
          <Scrollytelling.Pin childHeight={"100vh"} pinSpacerHeight={"150vh"}>
            <div className={s.mobileFlipperWrap}>
              <FlipperTitle />
            </div>
          </Scrollytelling.Pin>
          <Scrollytelling.Pin childHeight={"70vh"} pinSpacerHeight={"120vh"}>
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
                start: 35,
                end: 45,
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
                start: 45,
                end: 55,
                to: { opacity: 1, scale: 1, y: -50 },
              }}
            >
              <div className={s.mobileEthosImg}>
                <img src={ethosImage.url} alt={ethosImage.title} />
              </div>
            </Scrollytelling.Animation>

            <Scrollytelling.Pin
              childHeight={"100vh"}
              pinSpacerHeight={"150vh"}
              top={50}
            >
              <Scrollytelling.Stagger
                overlap={0.2}
                tween={{
                  start: 50,
                  end: 75,
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

              <Scrollytelling.Animation
                tween={{
                  scrub: true,
                  start: 60,
                  end: 80,
                  to: { left: "110%", top: "-100%" },
                }}
              >
                <div className={s.mobileCollage1}>
                  <img
                    src={ethosCollageElement3.url}
                    alt={ethosCollageElement3.title}
                  />
                </div>
              </Scrollytelling.Animation>
            </Scrollytelling.Pin>
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
