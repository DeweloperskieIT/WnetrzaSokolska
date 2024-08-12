import type { Metadata } from "next";
import { Open_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Wnętrza Deweloperskie - Luksusowe Apartamenty w Katowicach",
  description:
    "Odkryj luksusowe apartamenty w Katowicach. Gotowe do zamieszkania mieszkania premium z ponadczasowym designem i nowoczesnymi technologiami.",
  keywords: [
    "luksusowe apartamenty Katowice",
    "mieszkania premium Katowice",
    "Wnętrza Deweloperskie",
    "nowoczesne mieszkania Katowice",
    "zakup apartamentu Katowice",
    "luksus",
    "apartament",
    "deweloperskie",
    "katowice",
    "wnętrza",
    "premium",
    "apartamenty",
    "wysoka jakość",
    "jakość",
  ],
  openGraph: {
    title: "Wnętrza Deweloperskie - Luksusowe Apartamenty w Katowicach",
    description:
      "Oferujemy wyjątkowe apartamenty w centrum Katowic z nowoczesnym designem i zaawansowanymi technologiami. Skontaktuj się z nami, aby dowiedzieć się więcej.",
    type: "website",
    url: "https://wnetrza.deweloperskie.pl",
    images: [
      {
        url: "https://wnetrza.deweloperskie.pl/images/mainpage/dszare.png",
        width: 800,
        height: 600,
        alt: "Luksusowe apartamenty w Katowicach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wnętrza Deweloperskie - Luksusowe Apartamenty w Katowicach",
    description:
      "Zamieszkaj w sercu Katowic w luksusowym apartamencie z unikalnym designem. Poznaj naszą ofertę.",
    images: ["https://wnetrza.deweloperskie.pl/images/mainpage/dszare.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <link rel="icon" href="/favicon/favicon-32x32.png" sizes="any" />
      <body
        className={cn(
          "min-h-screen h-full bg-websiteBackground2 font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
