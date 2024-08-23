import { LandingPageOfferProps } from "@/components/customElements/texts-images/LandingPageOffers";

export const LandingPageOffersSectionData: LandingPageOfferProps = {
  className: "",
  backgroundImage: {
    img: "/images/mainpage/Sokolska-Szkic.jpg",
    alt: "szkic budynku sokolska towers",
  },
  offers: [
    {
      floor: "XIV piętro",
      title:
        "Nowoczesny apartament dla osób, które chcą mieć wszystko w zasięgu ręki.",
      subtitle: "Przyjmij nową perspektywę",
      published: false,
      date: "26/08/2024",
      link: "/katowice-3",
      left: "60",
      top: "60",
    },
    {
      floor: "XIII piętro",
      title:
        "Apartament zaaranżowany z myślą o osobach, które pragną korzystać z potencjału Katowic na swoich zasadach.",
      subtitle: "Luksus, który wzbudza pożądanie",
      published: false,
      date: "26/08/2024",
      link: "/katowice-2",
      left: "60",
      top: "400",
    },
    {
      floor: "XV piętro",
      title:
        "Najwyżej usytuowany apartament z wygodną loggią dla osób, które cenią sobie wyjątkowość.",
      subtitle: "Luksus, który Cię wyróżni",
      published: true,
      link: "/katowice-1",
      right: "60",
      top: "60",
    },
    {
      floor: "XIV piętro",
      title:
        "Twój mały dom na XIV piętrze, z przestronnym salonem z kuchnią, gabinetem, sypialnią, pralnią, garderobą oraz pojemną komórką lokatorską na piętrze.",
      subtitle: "Twoja oaza spokoju w sercu miasta",
      published: false,
      date: "26/08/2024",
      link: "/katowice-4",
      right: "60",
      top: "400",
    },
  ],
};
