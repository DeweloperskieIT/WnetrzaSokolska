import MainStickyHeader from "@/components/customElements/custom-ui/MainStickyHeader";
import SectionHeading from "@/components/customElements/custom-ui/SectionHeading";
import BreathingBackgroundImage from "@/components/customElements/texts-images/breathing-background-image";
import InfoBlocks from "@/components/customElements/texts-images/InfoBlocks";
import InterchangeableImages from "@/components/customElements/texts-images/InterchangeableImages";
import React from "react";

const page = () => {
  return (
    <>
      {/* Sticky HEader main */}
      <MainStickyHeader id={"start"} />
      <div className="landing-page">
        {/* First Section - Breathing image */}
        <BreathingBackgroundImage
          className="md:h-[560px] h-[300px]"
          bgSizes={["80%", "70%"]}
          interval={5000}
          img="/images/mainpage/logowhite.png"
        >
          <div className="padding-element flex flex-col md:gap-4 w-full h-full justify-end pb-[120px]">
            <span className="font-bold text-xl md:text-5xl">
              WNĘTRZA DEWELOPERSKIE
            </span>
            <span className="text-2xl md:text-[55px] font-light">
              NASZĄ PASJĄ JEST JAKOŚĆ
            </span>
          </div>
        </BreathingBackgroundImage>
        {/* Second Section - Interchangeable Images */}
        <InterchangeableImages
          elements={[
            {
              image: "/images/ko/right1.png",
              header: "XIII piętro z widokiem na panoramę katowic",
              paragraph:
                "Apartament zaaranżowany z myślą o osobach, które pragną korzystać z potencjału Katowic na swoich zasadach",
            },
            {
              image: "/images/ko/left1.png",
              header: "XIV piętro z widokiem zachód",
              paragraph:
                "Twój mały dom na XIV piętrze, z 2 pokojami, sypialnią, pralnią, garderobą oraz pojemną komórką lokatorską tuż przed lokalem",
            },
            {
              image: "/images/ko/right2.png",
              header: `XIV piętro z widokiem na panoramę katowic`,
              paragraph: "nowoczesny apartament stworz",
            },
            {
              image: "/images/ko/left2.png",
              header: "XV piętro z widokiem zachód",
              paragraph:
                "Odkryj magię światła, nadającego Twoim wnętrzom unikalny charakter w zależności od pory dnia.",
            },
          ]}
        >
          <SectionHeading
            className="padding-element"
            topClass="md:text-[54px]"
            top="NAROŻNE APARTAMENTY"
            bottom="SOKOLSKA TOWERS"
            bottomClass="md:text-[76px]"
          />
        </InterchangeableImages>
        {/* Third Section - Info text */}
        <InfoBlocks
          id="end"
          info={[
            {
              icon: "/images/mainpage/gears.png",
              header: "DOBRY DESIGN TO SPÓJNY DESIGN",
              paragraph:
                "Podstawowym obszarem przewagi konkurencyjnej marki Wnętrza Deweloperskie są autorskie rozwiązania aranżacyjne, charakteryzujące się zastosowaniem nowoczesnych technologii oraz materiałów spójnych architektonicznie z całym apartamentem.",
            },
            {
              icon: "/images/mainpage/crosshairs.png",
              header: "NASZĄ MISJĄ JEST JAKOŚĆ",
              paragraph:
                "Wizja marki Wnętrza Deweloperskie zakłada powielanie bardzo dopracowanych elementów aranżacyjnych w szeregu podobnych mieszkań, nabywanych od deweloperów w większych pakietach. Misją marki jest uzyskiwanie parametrów jakościowych projektowanych wnętrz porównywalnych do produkcji seryjnej, a nie do polskiej budowlanki.",
            },
            {
              icon: "/images/mainpage/group.png",
              header: "JAKOŚĆ, ZA KTÓRĄ STOI RĘKOJMIA",
              paragraph:
                "Przedmiotem rękojmi (gwarancji) są wszystkie prace wykończeniowe, realizowane przez profesjonalną ekipę budowlaną, jak również  zabudowa meblowa (wraz z gwarancją na  cięcie płyty meblowej Egger), powierzchnie lakiernicze, oprogramowanie iFrame oraz instalacja elektryczna pod stację ładowania samochodów.",
            },
          ]}
          header={
            <SectionHeading
              className=""
              topClass="md:text-[57px]"
              top="DOPRACOWANY"
              bottomClass="md:text-[61px]"
              bottom="w KAŻDYM CALU"
            />
          }
        ></InfoBlocks>
      </div>
    </>
  );
};

export default page;
