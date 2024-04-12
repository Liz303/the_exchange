import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./style.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { numberArray } from "@/hooks/numbersArray";
import getSeasonContent from "@/utils/getSeasonContent";
import PlateSketch from "@/components/EthosSVGs/PlateSketch";

const SectionTwo = ({ data }) => {
  const {
    annotationsCollection,
    illustration2,
    ethosCollageElement3,
    ethosImage,
    largePullText,
    season,
  } = data;
  return (
    <Scrollytelling.Animation
      tween={{
        start: 50,
        end: 80,
        to: { xPercent: -100, ease: "none" },
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "100%",
          padding: "10px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className={s.gridContainer}>
          <Scrollytelling.Stagger
            overlap={0.2}
            tween={{
              start: 55,
              end: 70,
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

        <Scrollytelling.Stagger
          overlap={0.2}
          tween={{
            start: 76,
            end: 85,
            to: { opacity: 1, y: 0 },
          }}
        >
          <div className={s.seasonImg}>{getSeasonContent("ethos", season)}</div>
          <div className={s.ethosImage}>
            <img src={ethosImage.url} alt={ethosImage.title} />
          </div>
          <div className={s.illustration2}>
            <img src={illustration2.url} alt={illustration2.title} />
          </div>
        </Scrollytelling.Stagger>
        <Scrollytelling.Animation
          tween={{
            start: 60,
            end: 90,
            to: { top: 0, left: "50%", rotate: 0 },
          }}
        >
          <div className={s.ethosCollageElement3}>
            <img
              src={ethosCollageElement3.url}
              alt={ethosCollageElement3.title}
            />
          </div>
        </Scrollytelling.Animation>
        <div className={s.ethosSketch}>
          <PlateSketch />
        </div>

        <div className={s.pullTextWrap}>
          <Scrollytelling.Animation
            tween={{
              start: 80,
              end: 90,
              to: { opacity: 1, y: 0 },
            }}
          >
            <div className={s.pullTextCopy}>
              <h2>{largePullText && largePullText}</h2>
            </div>
          </Scrollytelling.Animation>
        </div>
      </div>
    </Scrollytelling.Animation>
  );
};

export default SectionTwo;
