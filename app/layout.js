import "../styles/imports.css";
import Loader from "@components/Loader";

import "../styles/globals.scss";
import "../styles/vars.scss";


export const metadata = {
  title: "The Exchange",
  description:
    "Situated on the National Western Complex and occupying the former livestock exchange, The Exchange is a bridge not only between the natural and the urban; between land and history; but also a gateway to a future that upholds the past.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png" },
      new URL("/favicon-32x32.png", "https://www.theexchangedenver.com/"),
    ],
    icon: [
      { url: "/favicon-16x16.png" },
      new URL("/favicon-16x16.png", "https://www.theexchangedenver.com/"),
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    maskIcon: [{ url: "/safari-pinned-tab.svg", color: "#5bbad5" }],
  },
  manifest: "https://www.theexchangedenver.com/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: "The Exchange",
    description:
      "Situated on the National Western Complex and occupying the former livestock exchange, The Exchange is a bridge not only between the natural and the urban; between land and history; but also a gateway to a future that upholds the past..",
    images: ["https://www.theexchangedenver.com/og-image.jpg"],
  },
  openGraph: {
    title: "The Exchange",
    description:
      "Situated on the National Western Complex and occupying the former livestock exchange, The Exchange is a bridge not only between the natural and the urban; between land and history; but also a gateway to a future that upholds the past.",
    url: "https://www.theexchangedenver.com/",
    siteName: "",
    images: [
      {
        url: "https://www.theexchangedenver.com/og-image.jpg",
        width: 1200,
        height: 627,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://www.theexchangedenver.com/"),
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
      <body>
        <Loader>
          {children}
        </Loader>
      </body>
    </html>
  );
}
