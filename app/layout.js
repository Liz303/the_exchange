import { Manrope } from "next/font/google";
import "../styles/globals.scss";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Wolfs Taylor",
  description: "Wolfs Taylor",
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
    title: "Wolfs Taylor",
    description: "Wolfs Taylor",
    images: ["https://www.www.thewolfstailor.com/og-image.jpg"],
  },
  openGraph: {
    title: "Wolfs Taylor",
    description: "Wolfs Taylor",
    url: "https://www.www.thewolfstailor.com/",
    siteName: "Wolfs Taylor",
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
    index: false,
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
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
