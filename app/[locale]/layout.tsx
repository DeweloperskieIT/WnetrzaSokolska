import type { Metadata } from "next";
import { Open_Sans as FontSans } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { GoogleTagManager } from "@next/third-parties/google";
import CookieConsentBanner from "@/components/cookies/CookieConsentBanner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Locales } from "@/app/dictionaries";

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
    "luksusowy apartament",
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
    shortcut: [{ rel: "shortcut icon", url: "/favicon/favicon.ico" }],
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon/favicon-48x48.png", sizes: "48x48" },
      { url: "/favicon/favicon-144x144.png", sizes: "144x144" },
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.ico" },
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

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pl" }, { locale: "ua" }];
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locales };
}>) {
  return (
    <html lang={locale}>
      <head>
        <SpeedInsights />
        <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER!} />
        <meta
          name="google-site-verification"
          content="I4Cp77QIJW62l_8EIbNJ7AVJxdScvRE_pgMWkHMIuF4"
        />
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
