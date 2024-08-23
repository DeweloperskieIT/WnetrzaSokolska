import { ImageCarouselCustomProps } from "@/components/customElements/carousels";
import { ImageCarouselFaderProps } from "@/components/customElements/carousels/ImageCarouselFader";
import { SectionHeading } from "@/components/customElements/custom-ui";

export const BigCarouselSectionHeading = (
  <SectionHeading
    wideParent
    className=""
    top="KOMFORT, NA KTÓRY"
    bottom="ZASŁUGUJESZ"
  />
);

export const BigCarouselSectionCarouselCustomData: ImageCarouselCustomProps = {
  autoplay: true,
  interval: 4000,
  images: [
    {
      image: "/katowice-2/s3/01.jpg",
      alt: "Widok na okna z salonu wieczorem",
      text: "Luksus, który wzbudza pożądanie",
    },
    {
      image: "/katowice-2/s3/02.jpg",
      alt: "Salon, telewizor z kanapą",
      text: "Poczuj się jak u siebie w domu",
    },
    {
      image: "/katowice-2/s3/03.jpg",
      alt: "Salon z kuchnią w dzień",
      text: "Poznaj swój apartament za dnia…",
    },
    {
      image: "/katowice-2/s3/04.jpg",
      alt: "Salon z kuchnią w nocy",
      text: "I jego drugie oblicze po zmroku",
    },
    {
      image: "/katowice-2/s3/05.jpg",
      alt: "Salon, widok na balkon",
      text: "Kawa z widokiem na Spodek",
    },
    {
      image: "/katowice-2/s3/06.jpg",
      alt: "Sypialnia, widok z okna w dzień",
      text: "Sypialnia wśród chmur, na XIII piętrze",
    },
    {
      image: "/katowice-2/s3/07.jpg",
      alt: "Wnętrze - wejście do sypialni z dużym łóżkiem",
      text: "Najbardziej prestiżowe apartamenty narożne",
    },
    {
      image: "/katowice-2/s3/08.jpg",
      alt: "Wnętrze - łazienka z wanną",
      text: "Długa kąpiel wieczorem…",
    },
    {
      image: "/katowice-2/s3/09.jpg",
      alt: "Wnętrze - łazienka z pryszniczem",
      text: "… szybki prysznic rano",
    },
    {
      image: "/katowice-2/s3/10.jpg",
      alt: "Wnętrze - nowoczesne oświetlenie telewizora",
      text: "Wyróżnij się ponadczasowym designem",
    },
    {
      image: "/katowice-2/s3/11.jpg",
      alt: "Wnętrze - salon ze stolikiem i wysepką",
      text: "Jadalnia z Twoją małą winiarnią",
    },
    {
      image: "/katowice-2/s3/12.jpg",
      alt: "Wnętrze - kuchnia z korytarzem",
      text: "Zamieszkaj już jutro w wymarzonym apartamencie",
    },
    {
      image: "/katowice-2/s3/13.jpg",
      alt: "Budynek sokolska towers z zewnątrz na tle zachodu słońca",
      text: "Postaw na luksus, który stawia Cię w centrum",
    },
  ],
};
