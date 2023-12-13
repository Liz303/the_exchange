import styles from "./style.module.scss";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import gsap from "gsap";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
import { useEffect, useRef, useState } from "react";

const Layout = ({ children }) => {
  const mainContainer = useRef();
  const [changeHeader, setChangeHeader] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let introHeight = document.getElementsByClassName('intro-image-wrapper')[0].clientHeight;
      ScrollTrigger.create({
        trigger: mainContainer.current,
        start: `${introHeight}px 52px`,
        onEnter: () => { 
          setChangeHeader(true);
        },
        onLeaveBack: () => {
          setChangeHeader(false);
        },
      });
    }
  }, []);
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>{"City Leisure Group"}</title>
        <meta
          name="description"
          content={
            "Experts in city-attraction entertainment partnered with global leaders in location-based, family entertainment to bring state-of-the art experiences to locations across Europe."
          }
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, viewport-fit=cover"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:height" content="1257" />
        <meta property="og:image:width" content="2400" />
        <meta property="og:title" content="City Leisure Group" />
        <meta
          property="og:description"
          content="Experts in city-attraction entertainment partnered with global leaders in location-based, family entertainment to bring state-of-the art experiences to locations across Europe."
        />
        <meta property="og:url" content="www.city-leisuregroup.com" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header changeHeader={changeHeader} />
      <main className={styles.mainContainer}ref={mainContainer}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
