import styles from "./style.module.scss";
import { Element } from "react-scroll";
import Eyebrow from "../Eyebrow";
import { SliderWrapper } from "../SliderWrapper";
import ImageRender from "../Images/ImageRender";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import PrimaryButton from "../Buttons/PrimaryButton";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

const NewsSection = ({ news }) => {
  gsap.registerPlugin(ScrollTrigger);
  const headlineRef = useRef();
  const newsRef = useRef();
  newsRef.current = [];
  const newsContainerRef = useRef();

  const addToRefs = (el) => {
    if (el && !newsRef.current.includes(el)) {
      newsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (headlineRef) {
      gsap.to(headlineRef.current, {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 60%",
        },
      });
    }
    if (newsRef) {
      gsap.to(newsRef.current, {
        opacity: 1,
        duration: 0.8,
        x: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: newsContainerRef.current,
          start: "top 70%",
        },
      });
    }
  }, [headlineRef, newsRef, newsContainerRef]);

  const calculateTitleLength = (articleTitle) => {
    let maxLength = 36;
    if (articleTitle.length <= maxLength) {
      return articleTitle;
    }
    let closestSpaceIndex = articleTitle.lastIndexOf(" ", maxLength);
    if (closestSpaceIndex === -1) {
      closestSpaceIndex = maxLength;
    }
    const truncatedString =
      articleTitle.substring(0, closestSpaceIndex) + "...";
    return truncatedString;
  };

  const renderNewsItems = () => {
    return news.map((newsItem, i) => {
      const { headline, image, shortCopy, link } = newsItem.fields;
      return (
        <div className={styles.newsCard} key={`news-item-${i}`} ref={addToRefs}>
          <div className={styles.imageContainer}>
            <ImageRender image={image} cover={true} />
          </div>
          <div className={styles.detailsWrapper}>
            <span className={styles.title}>
              {calculateTitleLength(headline)}
            </span>
            <span className={styles.shortCopy}>{shortCopy}</span>
            <div className={styles.buttonContainer}>
              <PrimaryButton button={link} color={"black"} />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <Element name="news" id="news">
      <section className={styles.newsSection}>
        <div className={styles.headlineWrapper}>
          <Eyebrow eyebrowCopy={"News"} color={"black"} />
          <h3 className={styles.headline} ref={headlineRef}>
            In The Press
          </h3>
        </div>
        <div className={styles.newsItemsContainer} ref={newsContainerRef}>
          {news && news.length >= 5 ? (
            <SliderWrapper news={true} length={news.length}>
              {renderNewsItems()}
            </SliderWrapper>
          ) : news.length < 5 ? (
            <div className={styles.noSlider}>{renderNewsItems()}</div>
          ) : (
            ""
          )}
        </div>
      </section>
    </Element>
  );
};

export default NewsSection;
