import { ImageCarouselFaderProps } from "@/components/customElements/carousels/ImageCarouselFader";
import { SectionHeading } from "@/components/customElements/custom-ui";

export const BigCarouselSectionHeading = (
  <SectionHeading wideParent top="KOMFORT, NA KTÓRY" bottom="ZASŁUGUJESZ" />
);

export const BigCarouselSectionCarouselFaderData: ImageCarouselFaderProps = {
  autoplay: true,
  duration: 6000,
  dotsEnabledOnlyVisible: true,
  textBackground: "bg-gradient-to-t from-dark via-dark/75 to-dark/0",
  className: "md:aspect-[16/9] max-h-[40svh] md:max-h-full h-svh md:h-full",
  textPlacement: "bottom",
  images: [
    {
      heading: "Otul się luksusem",
      img: "/apartament126/s3/01.jpg",
      alt: "image",
    },
    {
      heading: "Poczuj się jak u siebie w domu",
      img: "/apartament126/s3/02.jpg",
      alt: "image",
    },
    {
      heading: "Poznaj swój nowy duży pokój",
      img: "/apartament126/s3/03.jpg",
      alt: "image",
    },
    {
      heading: "Wykorzystaj potencjał minimalistycznej kuchni ",
      img: "/apartament126/s3/04.jpg",
      alt: "image",
    },
    {
      heading: "Zasypiaj wśród chmur, na XV piętrze",
      img: "/apartament126/s3/05.jpg",
      alt: "image",
    },
    {
      heading: "Korzystaj z potencjału układu funkcjonalnego",
      img: "/apartament126/s3/06.jpg",
      alt: "image",
    },
    {
      heading: "Długa kąpiel wieczorem…",
      img: "/apartament126/s3/07.jpg",
      alt: "image",
    },
    {
      heading: "… szybki prysznic rano",
      img: "/apartament126/s3/08.jpg",
      alt: "image",
    },
    {
      heading: "Wypełnij swoją garderobę",
      img: "/apartament126/s3/09.jpg",
      alt: "image",
    },
    {
      heading: "Pokochaj swój mały pokój",
      img: "/apartament126/s3/10.jpg",
      alt: "image",
    },
    {
      heading: "Otól się luksusem",
      img: "/apartament126/s3/11.jpg",
      alt: "image",
    },
    {
      heading: "Zamieszkaj już jutro ",
      img: "/apartament126/s3/12.jpg",
      alt: "image",
    },
    {
      heading: "Poznaj klimat zachodów słońca na XV piętrze",
      img: "/apartament126/s3/13.jpg",
      alt: "image",
    },
    {
      heading: "Zamieszkaj już jutro w wymarzonym apartamencie",
      img: "/apartament126/s3/14.jpg",
      alt: "image",
    },
    {
      heading: "Postaw na luksus, który stawia Cię w centrum",
      img: "/apartament126/s3/15.jpg",
      alt: "image",
    },
  ],
};
