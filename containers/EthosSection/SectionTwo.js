import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./style.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const SectionTwo = ({ data }) => {
  const {
    annotationsCollection,
    illustration2,
    ethosCollageElement3,
    ethosImage,
    largePullText,
  } = data;
  return (
    <Scrollytelling.Animation
      tween={{
        start: 50,
        end: 100,
        to: { xPercent: -100, ease: "none" },
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "100%",
          padding: "10px 80px",
          position: "relative",
        }}
      >
        <div className={s.gridContainer}>
          <Scrollytelling.Stagger
            overlap={0.2}
            tween={{
              start: 65,
              end: 85,
              to: { opacity: 1, y: 0 },
            }}
          >
            {annotationsCollection?.items?.map((annotation, index) => {
              return (
                <div key={index} className={s.gridItem}>
                  <div>
                    {documentToReactComponents(
                      annotation?.annotationCopy?.json
                    )}
                  </div>
                  {annotation?.annotationImage && (
                    <img
                      src={annotation.annotationImage.url}
                      alt={annotation.annotationImage.title}
                    />
                  )}
                </div>
              );
            })}
          </Scrollytelling.Stagger>
        </div>

        <Scrollytelling.Stagger
          overlap={0.2}
          tween={{
            start: 95,
            end: 100,
            to: { opacity: 1, y: 0 },
          }}
        >
          <div className={s.ethosImage}>
            <img src={ethosImage.url} alt={ethosImage.title} />
          </div>
          <div className={s.ethosCollageElement3}>
            <img
              src={ethosCollageElement3.url}
              alt={ethosCollageElement3.title}
            />
          </div>
          <div className={s.illustration2}>
            <img src={illustration2.url} alt={illustration2.title} />
          </div>
        </Scrollytelling.Stagger>

        <div className={s.pullTextWrap}>
          <Scrollytelling.Animation
            tween={{
              start: 55,
              end: 80,
              to: { y: 10 },
            }}
          >
            <div className={s.pullTextCopy}>
              {largePullText && largePullText}
            </div>
          </Scrollytelling.Animation>
        </div>
      </div>
    </Scrollytelling.Animation>
  );
};

export default SectionTwo;
