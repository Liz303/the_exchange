import styles from "./style.module.scss";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>{"City Leisure Group"}</title>
        <meta name="description" content={"page metadata placeholder"} />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, viewport-fit=cover"
        />
        <meta property="og:title" content={"City Leisure Group"} />

        <meta property="og:image:height" content="1257" />
        <meta property="og:image:width" content="2400" />
        <meta property="og:description" content={"page metadata placeholder"} />
        <meta property="og:url" content={"CLG placeholder URL"} />
        <meta property="og:image" content="/og-image.jpg" />

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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
