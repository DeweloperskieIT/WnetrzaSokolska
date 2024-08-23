import { SectionHeading } from "@/components/customElements/custom-ui";
import { InfoBlocksProps } from "@/components/customElements/texts-images";

export const InfoBlocksSectionData: InfoBlocksProps = {
  info: [
    {
      icon: "/images/mainpage/BuildingIcon.png",
      header: "PONADCZASOWE INWESTYCJE",
      paragraph:
        "Oferujemy naszym Klientom gotowe do zamieszkania apartamenty segmentu premium w ścisłym centrum Katowic, wyróżniające się ponadczasowym i uniwersalnym designem, połączonym z najnowszymi technologiami.",
    },
    {
      icon: "/images/mainpage/DangleKeysIcon.png",
      header: "LUKSUS NA WYCIĄGNIĘCIE RĘKI",
      paragraph:
        "Wizja marki Wnętrza Deweloperskie zakłada powielanie bardzo dopracowanych elementów aranżacyjnych w szeregu podobnych mieszkań, co pozwala zachować konkurencyjność cenową.",
    },
    {
      icon: "/images/mainpage/HomeMagnifyingGlass.png",
      header: "JAKOŚĆ, ZA KTÓRĄ STOI RĘKOJMIA",
      paragraph:
        "Przedmiotem rękojmi (gwarancji) są wszystkie prace wykończeniowe, realizowane przez profesjonalną ekipę budowlaną, jak również  zabudowa meblowa, powierzchnie lakiernicze, oprogramowanie iFrame oraz instalacja elektryczna pod stację ładowania samochodów.",
    },
  ],
  header: (
    <SectionHeading topClass="" top="DOPRACOWANE" bottom="W KAŻDYM CALU" />
  ),
};
