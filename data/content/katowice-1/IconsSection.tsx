import SectionHeading from "@/components/customElements/custom-ui/SectionHeading";
import { LandingPageIcon } from "@/components/customElements/texts-images/IconsModule";

export const icons_content_array: LandingPageIcon[] = [
  {
    icon: "/apartament126/s2/1.webp",
    text: "Najwyżej położony balkon w budynku",
  },
  {
    icon: "/apartament126/s2/2.webp",
    text: "Apartamenty w topowej lokalizacji",
  },
  {
    icon: "/apartament126/s2/3.webp",
    text: "Światowej klasy architektura",
  },
  {
    icon: "/apartament126/s2/4.webp",
    text: "Indywidualny opiekun transakcji",
  },
  { icon: "/images/BedIcon.png", text: "Zamieszkaj już jutro" },
];

export const IconsSectionHeading = (
  <SectionHeading
    className="w-2/3 md:w-full"
    top="DOŁĄCZ DO EKSKLUZYWNEGO"
    topClass="text-2xl md:text-[48px] font-bold"
    bottom="GRONA WŁAŚCICIELI SOKOLSKA TOWERS"
    bottomClass="text-xl md:text-[38px] font-bold md:font-normal leading-7"
  />
);
