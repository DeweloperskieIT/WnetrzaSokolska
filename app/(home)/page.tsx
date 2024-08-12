import MainStickyHeader from "@/components/customElements/custom-ui/MainStickyHeader";
import SectionHeading from "@/components/customElements/custom-ui/SectionHeading";
import BreathingBackgroundImage from "@/components/customElements/texts-images/breathing-background-image";
import InfoBlocks from "@/components/customElements/texts-images/InfoBlocks";
import InterchangeableImages from "@/components/customElements/texts-images/InterchangeableImages";
import React from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
import IconsModule from "@/components/customElements/texts-images/IconsModule";
import Image from "next/image";
import LandmarkMapOnlyResponsive from "@/components/customElements/maps/LandmarkMapOnlyResponsive";
import Link from "next/link";
import { QuestionContactForm } from "@/components/customElements/forms/QuestionContactForm";

const page = () => {
  return (
    <>
      {/* Sticky HEader main */}
      <MainStickyHeader id={"start"} />
      <div className="landing-page">
        {/* First Section - Breathing image */}
        <BreathingBackgroundImage
          className="md:h-[560px] h-[300px] bg-darkerGray/90 text-dark"
          bgSizes={["100%", "70%"]}
          interval={5000}
          img="/images/mainpage/dszare.png"
        >
          <div className="limited-width flex flex-col md:gap-4 w-full h-full items-start justify-end pb-20">
            <h1 className="text-xl md:text-5xl">NASZĄ PASJĄ JEST JAKOŚĆ</h1>
            <h2 className="text-xl md:text-xl font-light max-w-[800px]">
              Aranżacja własnego apartamentu jest jak kolacja: możesz spędzić
              wieczór przyrządzając ją samodzielnie, albo zaufać
              profesjonalistom i delektować się posiłkiem serwowanym przez szefa
              kuchni.
            </h2>
          </div>
        </BreathingBackgroundImage>
        {/* Second Section - Icons */}
        <IconsModule
          className=""
          icons={[
            {
              icon: "/images/mainpage/PolemanIcon.png",
              text: "Innowacyjny model finansowania, bez wkładu własnego",
            },
            {
              icon: "/images/mainpage/DangleKeysIcon.png",
              text: "Indywidualny  opiekun transakcji",
            },
            {
              icon: "/images/mainpage/BuildingIcon.png",
              text: "Ekipa remontowa do indywidualnych aranżacji",
            },
            {
              icon: "/images/mainpage/BedIcon.png",
              text: "Zakup na fakturę, brak prowizji i PCC",
            },
          ]}
        ></IconsModule>
        {/* Eigth Section - Info text */}
        <InfoBlocks
          info={[
            {
              header: "PONADCZASOWE INWESTYCJE",
              paragraph:
                "Oferujemy naszym Klientom gotowe do zamieszkania apartamenty segmentu premium w ścisłym centrum Katowic, wyróżniające się ponadczasowym i uniwersalnym designem, połączonym z najnowszymi technologiami.",
            },
            {
              header: "LUKSUS NA WYCIĄGNIĘCIE RĘKI",
              paragraph:
                "Wizja marki Wnętrza Deweloperskie zakłada powielanie bardzo dopracowanych elementów aranżacyjnych w szeregu podobnych mieszkań, co pozwala zachować konkurencyjność cenową.",
            },
            {
              header: "JAKOŚĆ, ZA KTÓRĄ STOI RĘKOJMIA",
              paragraph:
                "Przedmiotem rękojmi (gwarancji) są wszystkie prace wykończeniowe, realizowane przez profesjonalną ekipę budowlaną, jak również  zabudowa meblowa, powierzchnie lakiernicze, oprogramowanie iFrame oraz instalacja elektryczna pod stację ładowania samochodów.",
            },
          ]}
          header={
            <SectionHeading
              topClass=""
              top="DOPRACOWANE"
              bottom="W KAŻDYM CALU"
            />
          }
        ></InfoBlocks>
        {/* Eigth Section - Info text */}
        <div className="w-full h-full relative lg:aspect-[12/9] limited-width bg-white pb-10 lg:pb-0">
          <Image
            alt="building"
            src={"/images/mainpage/bwdrawing.png"}
            fill
            className="lg:!absolute object-cover  w-full h-full lg:pl-20 !relative"
          />
          <div className="z-20 w-full h-full relative lg:block flex flex-col gap-6">
            <div className="text-light text-xl flex flex-col justify-between gap-6 bg-websiteBackground2 lg:max-w-[300px] p-4 lg:absolute md:left-[60px] md:top-[60px]">
              <span className="font-bold">XIV piętro </span>
              <span>
                Nowoczesny apartament dla osób, które chcą mieć wszystko w
                zasięgu ręki.
              </span>
              <div className="flex flex-col">
                <span>
                  <i>Przyjmij nową perspektywę</i>
                </span>
                <span className="font-light text-accent1 w-full text-right">
                  premiera
                  <br />
                  26/08/2024
                </span>
              </div>
            </div>
            <div className="text-light text-xl flex flex-col justify-between gap-6 bg-websiteBackground2  lg:max-w-[300px] p-4 lg:absolute md:left-[60px] md:top-[400px]">
              <span className="font-bold">XIII piętro </span>
              <span>
                Apartament zaaranżowany z myślą o osobach, które pragną
                korzystać z potencjału Katowic na swoich zasadach.
              </span>
              <div className="flex flex-col">
                <span>
                  <i>Luksus, który wzbudza pożądanie</i>
                </span>
                {/* <Link
                        href={"/xxx"}
                        className="font-bold text-accent1 w-full text-right"
                      >
                        poznaj ofertę
                      </Link> */}
                <span className="font-light text-accent1 w-full text-right">
                  premiera
                  <br />
                  26/08/2024
                </span>
              </div>
            </div>
            <div className="text-light text-xl flex flex-col justify-between gap-6 bg-websiteBackground2 lg:max-w-[300px] p-4 lg:absolute md:right-[60px] md:top-[60px]">
              <span className="font-bold">XV piętro </span>
              <span>
                Najwyżej usytuowany apartament z wygodną loggią dla osób, które
                cenią sobie wyjątkowość.
              </span>
              <div className="flex flex-col">
                <span>
                  <i>Luksus, który Cię wyróżni</i>
                </span>
                <Link
                  href={"/sokolska-towers-126"}
                  className="font-bold text-accent1 w-full text-right"
                >
                  poznaj ofertę
                </Link>
              </div>
            </div>
            <div className="text-light text-xl flex flex-col justify-between gap-6 bg-websiteBackground2 lg:max-w-[300px] p-4 lg:absolute md:right-[60px] md:top-[400px]">
              <span className="font-bold">XIV piętro </span>
              <span>
                Twój mały dom na XIV piętrze, z przestronnym salonem z kuchnią,
                gabinetem, sypialnią, pralnią, garderobą oraz pojemną komórką
                lokatorską na piętrze.
              </span>
              <div className="flex flex-col">
                <span>
                  <i>Twoja oaza spokoju w sercu miasta</i>
                </span>
                {/* <Link
                        href={"/xxx"}
                        className="font-bold text-accent1 w-full text-right"
                      >
                        poznaj ofertę
                      </Link> */}
                <span className="font-light text-accent1 w-full text-right">
                  premiera
                  <br />
                  26/08/2024
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section something */}
        <div className="w-full h-full relative limited-width flex flex-col gap-10">
          <SectionHeading top="PONADCZASOWY " bottom="BUDYNEK" />
          <div className="">
            <YouTubeEmbed
              videoid="nGX38x34HK8"
              style="height: 100% !important; width: 100% !important; margin: auto;"
              height={0}
              width={0}
            />
          </div>
        </div>
        {/* footer */}
        <div className="w-full h-full relative flex flex-col gap-10 mb-10">
          <SectionHeading
            className="limited-width self-center"
            top="SKONTAKTUJ SIĘ"
            bottom="Z NAMI"
          />
          {/* Formularz */}
          <div className="lg:basis-1/2 self-center w-full">
            <QuestionContactForm
              sendTo={process.env.QUESTIONCONTACTDESTINATION}
              className="bg-transparent lg:bg-dark"
            />
          </div>

          {/* Logotypy */}
          <div className="w-full flex items-center md:items-end justify-evenly flex-col md:flex-row gap-10 h-full max-w-screen-xl self-center">
            <Image
              src={"/images/logo2.png"}
              alt="soktower"
              width={160}
              height={200}
              className="object-contain h-auto w-auto"
            />
            <Image
              src={"/images/wnetrzalogo.png"}
              alt="soktower"
              width={300}
              height={100}
              className="object-contain max-w-[200px] h-auto w-auto"
            />
          </div>
          <footer className="text-sm flex flex-col gap-4 padding-element">
            <span>
              Wnętrza Deweloperskie są marką należącą do spółki: Grupa
              Deweloperskie P.S.A., z siedzibą w Katowicach przy ul.
              Murckowskiej 14c, NIP: 6343022518, REGON: Pośrednikiem
              nieruchomości obsługującym sprzedaż jest: Inwestycje Deweloperskie
              P.S.A., z siedzibą w Katowicach przy ul. Murckowskiej 14c, NIP:
              6343014507.
            </span>
            <span className="self-center">© Wnętrza Deweloperskie 2024</span>
          </footer>
        </div>
      </div>
    </>
  );
};

export default page;
