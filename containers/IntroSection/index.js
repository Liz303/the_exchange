"use client";
import { useEffect, useState } from "react";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./style.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import getSeasonContent from "@/utils/getSeasonContent";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

export default function Intro({ data }) {
  const {
    season,
    aboutText,
    collage,
    collageElement2Small,
    illustrationOne,
    illustrationTwo,
  } = data;
  const { winWidth } = useWindowDimensions();
  const isMobile = winWidth < 430;

  const [allowScroll, setAllowScroll] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAllowScroll(false);
    }, 1000);
  }, []);

  const renderIllustrationOne = () => {
    return (
      <div className={s.illustratioOne} id="illustration-one">
        <Scrollytelling.Waypoint
          at={15}
          tween={{
            target: ["#illustration-one"],
            to: { opacity: 1, scale: 1 },
            duration: 0.25,
            scrub: true,
          }}
        />
        <img src={illustrationOne.url} alt={illustrationOne.title} />
      </div>
    );
  };

  const renderIllustrationTwo = () => {
    return (
      <div className={s.illustrationTwo} id="illustration-two">
        <Scrollytelling.Waypoint
          at={60}
          tween={{
            target: ["#illustration-two"],
            to: { opacity: 1, scale: 1 },
            duration: 0.5,
            scrub: true,
          }}
        />
        <img src={illustrationTwo.url} alt={illustrationTwo.title} />
      </div>
    );
  };

  const renderPinnedTextContainer = () => {
    return (
      <div className={s.pinnedTextContainer}>
        <Scrollytelling.Waypoint
          at={0}
          tween={{
            target: ["#intro-text"],
            to: { opacity: 1, scale: 1 },
            duration: 2,
            delay: 1,
          }}
        />
        <Scrollytelling.Pin
          childHeight={"100vh"}
          pinSpacerHeight={isMobile ? "150vh" : "250vh"}
          top={winWidth < 430 ? 90 : winWidth < 820 ? 120 : 180}
        >
          <Scrollytelling.Animation
            tween={{
              start: isMobile ? 80 : 90,
              end: 100,
              to: { opacity: 0, y: -100 },
            }}
          >
            <div id="intro-text" className={s.introText}>
              {aboutText && aboutText.json
                ? documentToReactComponents(aboutText.json)
                : ""}
              {getSeasonContent("intro", season)}
            </div>
          </Scrollytelling.Animation>
          {illustrationOne && illustrationOne.url
            ? renderIllustrationOne()
            : ""}
          {illustrationTwo && illustrationTwo.url
            ? renderIllustrationTwo()
            : ""}
        </Scrollytelling.Pin>
      </div>
    );
  };

  const renderCollageElement2 = () => {
    return (
      <Scrollytelling.Animation
        tween={{ scrub: true, start: 10, end: 90, to: { top: 0 } }}
      >
        <div className={s.absolute}>
          <img
            src={collageElement2Small.url}
            alt={collageElement2Small.title}
          />
        </div>
      </Scrollytelling.Animation>
    );
  };

  const renderCollage = () => {
    return (
      <Scrollytelling.Animation
        tween={{ scrub: true, start: 30, end: 90, to: { top: "-20%" } }}
      >
        <div className={s.absolute2}>
          <img src={collage.url} alt={collage.title} />
        </div>
      </Scrollytelling.Animation>
    );
  };

  return (
    <section id="intro">
      <Scrollytelling.Root
        scrub={true}
        start={"top top"}
        end={"bottom bottom"}
        disabled={allowScroll}
      >
        <div
          style={{
            height: isMobile ? "200vh" : "300vh",
            position: "relative",
          }}
        >
          <div className={s.introContentWrap}>
            <Scrollytelling.Waypoint
              at={0}
              tween={{
                target: ["#main-title"],
                to: { opacity: 1, scale: 1 },
                duration: 2,
                delay: 1,
              }}
            />

            <h1 className={s.title} id="main-title">
              The Wolf's Tailor
            </h1>
            {renderPinnedTextContainer()}
          </div>
          {collageElement2Small && collageElement2Small.url
            ? renderCollageElement2()
            : ""}
          {collage && collage.url ? renderCollage() : ""}
        </div>
      </Scrollytelling.Root>
    </section>
  );
}
