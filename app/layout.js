import "../styles/imports.css";
import Header from "@components/Header";
import Loader from "@components/Loader";

import "../styles/globals.scss";
import "../styles/vars.scss";


export const metadata = {
  title: "Rosenburgers",
  description:
    "An evening and late night burger pop up brought to you by Rosenberg's Bagels. Home of the $3.80 burger.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png" },
      new URL("/favicon-32x32.png", "https://www.rosenburgers.com/"),
    ],
    icon: [
      { url: "/favicon-16x16.png" },
      new URL("/favicon-16x16.png", "https://www.rosenburgers.com/"),
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    maskIcon: [{ url: "/safari-pinned-tab.svg", color: "#5bbad5" }],
  },
  manifest: "https://www.rosenburgers.com/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: "Rosenburgers",
    description:
      "An evening and late night burger pop up brought to you by Rosenberg's Bagels. Home of the $3.80 burger.",
    images: ["https://www.rosenburgers.com/og-image.jpg"],
  },
  openGraph: {
    title: "Rosenburgers",
    description:
      "An evening and late night burger pop up brought to you by Rosenberg's Bagels. Home of the $3.80 burger.",
    url: "https://www.rosenburgers.com/",
    siteName: "",
    images: [
      {
        url: "https://www.rosenburgers.com/og-image.jpg",
        width: 1257,
        height: 2400,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://www.rosenburgers.com/"),
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
