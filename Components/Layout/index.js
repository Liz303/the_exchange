import styles from "./style.module.scss";

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import IntroSection from "../IntroSection";
import IntroSectionSvg from "../IntroSectionSvg";

const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
import { useEffect, useRef, useState } from "react";

const Layout = ({ children, hasNews }) => {


  useEffect(() => {
   
  }, []);


  return (
    <div >
      <Head>
        <title>{"Wolf's Tailor"}</title>
        <meta
          name="description"
          content={
            "A tribute to the artisans who crafted sheep’s attire for the cunning wolf. The innovative, multi-course tasting experience at the Wolf’s Tailor revolves around two prominent seasons: warmer months spotlight garden-fresh produce, while cooler months feature imaginative spins on local grains and fermentation. "
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
          content="A tribute to the artisans who crafted sheep’s attire for the cunning wolf. The innovative, multi-course tasting experience at the Wolf’s Tailor revolves around two prominent seasons: warmer months spotlight garden-fresh produce, while cooler months feature imaginative spins on local grains and fermentation."
        />
        <meta property="og:url" content="www.thewolfstailor.com" />

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
      <Header />
      <main className={styles.mainContainer}>
        {/* <IntroSection/> */}
        <IntroSectionSvg/>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
