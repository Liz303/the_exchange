import "../styles/imports.css";
import { Manrope } from "next/font/google";
import Header from "@components/Header";
import Loader from "@components/Loader";

import "../styles/globals.scss";
import "../styles/vars.scss";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata = {
  title: "The Wolf's Tailor",
  description:
    "A tribute to the artisans who crafted sheep’s attire for the cunning wolf. The innovative, multi-course tasting experience at the Wolf’s Tailor revolves around two prominent seasons: warmer months spotlight garden-fresh produce, while cooler months feature imaginative spins on local grains and fermentation. Accompanying our offerings are thoughtfully curated wine, mixed beverage, and zero-proof pairings, crafted from scratch ingredients and conscious spirits. Our ambitious culinary and beverage choices reflect a zero-waste ethos in both kitchen and bar, encompassing skillful techniques and compelling narratives inspired by our team’s journeys and influences.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png" },
      new URL("/favicon-32x32.png", "https://www.www.thewolfstailor.com/"),
    ],
    icon: [
      { url: "/favicon-16x16.png" },
      new URL("/favicon-16x16.png", "https://www.www.thewolfstailor.com/"),
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    maskIcon: [{ url: "/safari-pinned-tab.svg", color: "#5bbad5" }],
  },
  manifest: "https://www.www.thewolfstailor.com/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: "The Wolf's Tailor",
    description:
      "A tribute to the artisans who crafted sheep’s attire for the cunning wolf. The innovative, multi-course tasting experience at the Wolf’s Tailor revolves around two prominent seasons: warmer months spotlight garden-fresh produce, while cooler months feature imaginative spins on local grains and fermentation. Accompanying our offerings are thoughtfully curated wine, mixed beverage, and zero-proof pairings, crafted from scratch ingredients and conscious spirits. Our ambitious culinary and beverage choices reflect a zero-waste ethos in both kitchen and bar, encompassing skillful techniques and compelling narratives inspired by our team’s journeys and influences.",
    images: ["https://www.www.thewolfstailor.com/og-image.jpg"],
  },
  openGraph: {
    title: "The Wolf's Tailor",
    description:
      "A tribute to the artisans who crafted sheep’s attire for the cunning wolf. The innovative, multi-course tasting experience at the Wolf’s Tailor revolves around two prominent seasons: warmer months spotlight garden-fresh produce, while cooler months feature imaginative spins on local grains and fermentation. Accompanying our offerings are thoughtfully curated wine, mixed beverage, and zero-proof pairings, crafted from scratch ingredients and conscious spirits. Our ambitious culinary and beverage choices reflect a zero-waste ethos in both kitchen and bar, encompassing skillful techniques and compelling narratives inspired by our team’s journeys and influences.",
    url: "https://www.www.thewolfstailor.com/",
    siteName: "The Wolf's Tailor",
    images: [
      {
        url: "https://www.www.thewolfstailor.com/og-image.jpg",
        width: 1257,
        height: 2400,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://www.www.thewolfstailor.com/"),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  msapplication: {
    TileColor: "#da532c",
    config: "/browserconfig.xml",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} dark-theme`}>
        <Loader>
          <Header />
          {children}
        </Loader>
      </body>
    </html>
  );
}
