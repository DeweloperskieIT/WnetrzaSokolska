import type { Metadata } from "next";
import { Open_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GoogleTagManager } from "@next/third-parties/google";
import CookieConsentBanner from "@/components/cookies/CookieConsentBanner";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fontSans = FontSans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Wnętrza Deweloperskie",
  description:
    "Zamieszkaj już jutro w ponadczasowych apartamentach w centrum Katowic.",
  keywords: [
    "luksusowe apartamenty Katowice",
    "nieruchomości premium Katowice",
    "nieruchomości Katowice",
    "apartamenty Katowice",
    "architektura Katowic",
    "apartament XXI wieku",
    "strefa kultury",
    "katowicka strefa kultury",
    "666000999",
    "Łukasz Nowaczyk",
    "Deweloperskie P.S.A.",
    "6343022518",
    "Wnętrza Deweloperskie",
    "Wnetrza Deweloperskie",
    "apartament",
    "katowice",
    "śląsk",
    "slask",
    "apartamenty",
  ],
  openGraph: {
    title: "Wnętrza Deweloperskie",
    description:
      "Zamieszkaj już jutro w ponadczasowym apartamencie w centrum Katowic. ",
    type: "website",
    url: "https://wnetrza.deweloperskie.pl",
    images: [
      {
        url: "https://wnetrza.deweloperskie.pl/images/mainpage/deweloperskie-logo-corner-szare.png",
        width: 800,
        height: 600,
        alt: "Ponadczasowe apartamenty w Katowicach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wnętrza Deweloperskie",
    description:
      "Zamieszkaj w sercu Katowic w luksusowym apartamencie z unikalnym designem. Poznaj naszą ofertę.",
    images: [
      "https://wnetrza.deweloperskie.pl/images/mainpage/deweloperskie-logo-corner-szare.png",
    ],
  },
  icons: {
    shortcut: [{ rel: "shortcut icon", url: "/favicons/favicon.ico" }],
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/favicon/site.webmanifest",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <SpeedInsights />
        <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER!} />
        <meta
          name="google-site-verification"
          content="I4Cp77QIJW62l_8EIbNJ7AVJxdScvRE_pgMWkHMIuF4"
        />
        {/* Preconnect to the font origin */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Preload the font stylesheet */}
        <link
          rel="preload"
          as="style"
          href={`https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap`}
        />
        {/* Load the stylesheet with display=swap */}
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap`}
        />
        <link rel="icon" href="/favicon/favicon-32x32.png" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen h-full bg-websiteBackground2 font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
        {/* <CookieConsentBanner /> */}
      </body>
    </html>
  );
}
