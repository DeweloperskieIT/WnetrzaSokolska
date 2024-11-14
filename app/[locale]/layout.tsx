import type { Metadata } from "next";
import { Open_Sans as FontSans } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Locales } from "@/app/dictionaries";

const fontSans = FontSans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Wnętrza Deweloperskie - Luksusowe Apartamenty w Katowicach",
  description:
    "Ekskluzywne apartamenty w centrum Katowic. Zamieszkaj w sercu Śląska w luksusowym otoczeniu z dostępem do strefy kultury.",
  keywords: [
    "luksusowe apartamenty Katowice",
    "apartamenty na sprzedaż Katowice",
    "nieruchomości premium Śląsk",
    "nowoczesne mieszkania Katowice",
    "centrum Katowic apartamenty",
    "strefa kultury Katowice",
    "apartamenty inwestycyjne",
    "kupno apartamentu Katowice",
    "deweloper Katowice",
    "nieruchomości Katowice",
    "apartamenty Śląsk",
    "nowe apartamenty Katowice",
    "wnętrza luksusowe",
    "luksusowy apartament XXI wieku",
    "centrum Katowic",
    "architektura Katowice",
    "666000999",
    "Łukasz Nowaczyk",
    "Deweloperskie P.S.A.",
    "6343022518",
    "Wnętrza Deweloperskie",
    "Katowice mieszkania",
    "katowicka strefa kultury",
    "nowoczesne apartamenty",
  ],
  openGraph: {
    title: "Wnętrza Deweloperskie - Luksusowe Apartamenty w Katowicach",
    description:
      "Ekskluzywne apartamenty w samym centrum Katowic, idealne dla inwestorów oraz osób ceniących luksus i komfort.",
    type: "website",
    url: "https://wnetrza.deweloperskie.pl",
    images: [
      {
        url: "https://wnetrza.deweloperskie.pl/favicon/og.png",
        width: 900,
        height: 900,
        alt: "Ekskluzywne apartamenty w centrum Katowic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wnętrza Deweloperskie - Apartamenty Katowice",
    description:
      "Odkryj luksusowe apartamenty w sercu Katowic. Zamieszkaj w przestrzeni, która inspiruje.",
    images: [
      {
        url: "https://wnetrza.deweloperskie.pl/favicon/og.png",
        width: 900,
        height: 900,
        alt: "Ekskluzywne apartamenty w centrum Katowic",
      },
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
  creator: "Krzysztof Kutniowski",
  applicationName: "Wnętrza Deweloperskie",
  verification: {
    google: "I4Cp77QIJW62l_8EIbNJ7AVJxdScvRE_pgMWkHMIuF4",
  },
  manifest: "https://wnetrza.deweloperskie.pl/favicon/manifest.json",
  robots: {
    follow: true,
    index: true,
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Wnętrza Deweloperskie - Luksusowe Apartamenty w Katowicach",
  description:
    "Ekskluzywne apartamenty na sprzedaż w Katowicach. Zamieszkaj w nowoczesnym apartamencie w centrum Śląska, blisko strefy kultury.",
  url: "https://wnetrza.deweloperskie.pl",
  logo: "https://wnetrza.deweloperskie.pl/favicon/og.png",
  sameAs: [
    "https://www.facebook.com/people/Wn%C4%99trza-Deweloperskie/61564077804403",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48-666-000-999",
    contactType: "Sales",
    areaServed: "PL",
    availableLanguage: ["Polish", "English"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Murckowska 14c",
    addressLocality: "Katowice",
    addressRegion: "Śląsk",
    postalCode: "40-266",
    addressCountry: "PL",
  },
  founder: {
    "@type": "Person",
    name: "Łukasz Nowaczyk",
  },
  keywords: [
    "luksusowe apartamenty Katowice",
    "apartamenty Katowice centrum",
    "nowoczesne mieszkania Śląsk",
    "nieruchomości premium Katowice",
    "apartamenty XXI wieku",
    "Katowice strefa kultury",
    "kupno apartamentu Katowice",
    "nieruchomości Katowice",
    "luksusowe wnętrza Katowice",
    "deweloper apartamenty Katowice",
  ],
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
        {/* <meta
          name="google-site-verification"
          content="I4Cp77QIJW62l_8EIbNJ7AVJxdScvRE_pgMWkHMIuF4"
        /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
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
