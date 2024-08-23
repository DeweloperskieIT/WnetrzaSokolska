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
      image: "/images/am/carousel-1.png",
      alt: "image",
      text: "KOMFORTOWA SYPIALNIA",
    },
    {
      image: "/images/am/carousel-2.png",
      alt: "image",
      text: "DOPRACOWANE WNĘTRZA",
    },
    {
      image: "/images/am/carousel-3.png",
      alt: "image",
      text: "JAKOŚĆ, KTÓRĄ MOŻNA POCZUĆ W DŁONI",
    },
    {
      image: "/images/am/carousel-4.png",
      alt: "image",
      text: "PRYWATNE MIEJSCE ZAWSZE CZEKAJĄCE NA CIEBIE",
    },
  ],
};
