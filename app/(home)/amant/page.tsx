"use client";

import ImageCarouselCustom from "@/components/customElements/carousels/ImageCarouselCustom";
import Footer from "@/components/customElements/custom-ui/OfferFooter";
import SectionHeading from "@/components/customElements/custom-ui/SectionHeading";
import OfferStickyHeader from "@/components/customElements/custom-ui/OfferStickyHeader";
import IconsModule from "@/components/customElements/texts-images/IconsModule";
import InfoBlocks from "@/components/customElements/texts-images/InfoBlocks";
import InterchangeableImages from "@/components/customElements/texts-images/InterchangeableImages";
import RzutMieszkania from "@/components/customElements/texts-images/RzutMieszkania";
import SpiralPhotos4 from "@/components/customElements/texts-images/SpiralPhotos4";
import TextPlusSinglePhoto from "@/components/customElements/texts-images/TextPlusSinglePhoto";
import VideoBackground from "@/components/customElements/video/VideoBackground";
import Image from "next/image";
import React from "react";

const page = () => {
  let oferta = "Apartament 103";

  return (
    <>
      {/* Header */}
      <OfferStickyHeader oferta={oferta} />

      <div className="landing-page text-light">
        {/* Video */}
        <div className="relative h-[512px] md:h-[724px] xl:h-[1024px] w-full">
          <VideoBackground src="/videos/video1.mp4" className="" />
          <div className="w-full h-full relative z-10 flex flex-col gap-0 items-start justify-end text-light padding-element py-6">
            <span className="font-base text-6xl">LUKSUS</span>
            <span className="font-extralight text-6xl text-accent1">
              KTÓRY WZBUDZA POŻĄDANIE
            </span>
          </div>
        </div>
        {/* First Section - Icons Module */}
        <IconsModule
          className=""
          icons={[
            {
              icon: "/images/PolemanIcon.png",
              text: "Panorama Katowic z XIII piętra",
            },
            {
              icon: "/images/MapIcon.png",
              text: "Topowa lokalizacja Sokolska Towers",
            },
            {
              icon: "/images/BuildingIcon.png",
              text: "Lobby z recepcją i ochroną 24/7 ",
            },
            {
              icon: "/images/DangleKeysIcon.png",
              text: "Strefa SPA Fitness-club",
            },
            { icon: "/images/BedIcon.png", text: "Gotowy do zamieszkania" },
          ]}
          header={
            <SectionHeading
              className=""
              top="DOŁĄCZ DO GRONA WŁAŚCICIELI"
              topClass="text-2xl md:text-[48px] font-bold"
              bottom="PRESTIŻOWCH APARTAMENTÓW SOKOLSKA TOWERS"
              bottomClass="text-xl md:text-[38px] font-bold md:font-normal leading-7"
            />
          }
        ></IconsModule>
        {/* Third Section - Carousel custom slider */}
        <div className="flex flex-col section-header-gap">
          <SectionHeading
            className=""
            wideParent
            top="KOMFORT, NA KTÓRY"
            bottom="ZASŁUGUJESZ"
          />
          <ImageCarouselCustom
            autoplay
            interval={4000}
            className=""
            textClassName="bg-gradient-to-t from-dark/50 to-transparent"
            images={[
              {
                image: "/images/am/carousel-1.png",
                text: "KOMFORTOWA SYPIALNIA",
              },
              {
                image: "/images/am/carousel-2.png",
                text: "DOPRACOWANE WNĘTRZA",
              },
              {
                image: "/images/am/carousel-3.png",
                text: "JAKOŚĆ, KTÓRĄ MOŻNA POCZUĆ W DŁONI",
              },
              {
                image: "/images/am/carousel-4.png",
                text: "PRYWATNE MIEJSCE ZAWSZE CZEKAJĄCE NA CIEBIE",
              },
            ]}
          />
        </div>
        {/* Fourth Section - Rzut Mieszkania */}
        <RzutMieszkania
          cena="420 000 EUR"
          powierzchnia=" 75,20"
          img={{
            mobile: "/images/am/rzutmobile.png",
            desktop: "/images/am/rzutdesktop.png",
          }}
          header={
            <SectionHeading
              className=""
              top="POZNAJ SWÓJ NOWY"
              bottom="APARTAMENT"
            />
          }
        ></RzutMieszkania>
        {/* Fifth Section - Spiral Photos */}
        <SpiralPhotos4
          images={[
            "/images/am/img1.png",
            "/images/am/img2.png",
            "/images/am/img3.png",
            "/images/am/img4.png",
          ]}
        />
        {/* Sixth Section - Interchangeable Photos */}
        <InterchangeableImages
          elements={[
            {
              image: "/images/am/right1.png",
              header: "UNIKATOWE OŚWIETLENIE",
              paragraph:
                "Oświetlenie pozwalające stworzyć klimat idealny do okoliczności.",
            },
            {
              image: "/images/am/left1.png",
              header: "MARKI PREMIUM",
              paragraph:
                "Wyposażenie oraz materiały najlepszych producentów: stolarka Dewro, ceramika Villeroy & Boch, trójwarstwowa deska podłogowa Barlinek oraz włoskie płytki Marazzi.",
            },
            {
              image: "/images/am/right2.png",
              header: `SPÓJNY DESIGN`,
              paragraph:
                "Ponadczasowy design, przewijający się przez szereg detali architektonicznych, będący wizytówką niebanalnego stylu",
            },
            {
              image: "/images/am/left2.png",
              header: "KLIMATYCZNE WNĘTRZE",
              paragraph:
                "Poczuj jakość: płyty meblowej i blatów Egger, trójwarstwowej deski podłogowej Barlinek czy włoskich plytek Marazzi.",
            },
            {
              image: "/images/am/right3.png",
              header: "APARTAMENT XXI WIEKU",
              paragraph:
                "Wpisz się w najnowsze trendy budownictwa i zainwestuj w nieruchomość projektowaną z myślą o nowoczesnych technologiach.",
            },
          ]}
          header={
            <SectionHeading
              wideParent
              className=""
              top="UNIKATOWY"
              bottom="DESIGN"
            />
          }
        ></InterchangeableImages>
        {/* Seventh Section - Info with photo */}
        <TextPlusSinglePhoto
          className="limited-width"
          img="/images/castle.png"
          content={
            <div className="flex justify-center flex-col gap-10 text-light lg:text-right text-xl">
              <span className="">
                <span className="text-accent1">3100</span> - co najmniej tyle
                mieszkań powstało i jeszcze powstanie w Katowickiej Strefie
                Kultury do 2028 roku.
              </span>
              <span>
                Ograniczona liczba lokali w bezpośrednim otoczeniu zapewni nie
                tylko komfort w użytkowaniu Twojej inwestycji, lecz również
                zabezpieczy jej wartość w przyszłości.
              </span>
              <span>
                Wybierz narożny apartament na XIII piętrze ponadczasowego
                budynku&nbsp;
                <span className="text-accent1">Sokolska Towers.</span>
              </span>
            </div>
          }
          header={
            <SectionHeading
              className=""
              top="LIMITOWANY LUKSUS"
              bottom="W SERCU MIASTA"
            />
          }
        ></TextPlusSinglePhoto>
        {/* Eigth Section - Info text */}
        <InfoBlocks
          className="limited-width"
          info={[
            {
              icon: "/images/DocIcon.png",
              header: "ZAKUP OD PROFESJONALISTY",
              paragraph:
                "Decyzja o zakupie nieruchomości jest jedną z najważniejszych decyzji finansowych Twojego życia. Postaw na jakość stojącą za profesjonalnym inwestorem - dokonaj zakupu w oparciu o fakturę VAT, z pełną rękojmią na prace aranżacyjne.",
            },
            {
              icon: "/images/DingIcon.png",
              header: "INDYWIDUALNY OPIEKUN TRANSAKCJI",
              paragraph:
                "Apartament Premium wymaga obsługi premium, realizowanej od początku do końca przez przypisanego do Ciebie opiekuna transakcji, który weźmie na siebie ciężar formalności.",
            },
            {
              icon: "/images/BullIcon.png",
              header: "PRESTIŻ, NA KTÓRY CIĘ STAĆ",
              paragraph:
                "Jeśli tylko posiadasz inną nieruchomość, może ona posłużyć za Twój wkład własny do kredytu. ",
            },
          ]}
          // alternativeMobile
          // mobileInfo={[
          //   {
          //     header: "BEZPIECZEŃSTWO",
          //     paragraph:
          //       "Nasz zespół prawny zadba o wszelkie formalności oraz zabezpieczenie transakcji",
          //   },
          //   {
          //     header: "CZAS",
          //     paragraph:
          //       "Oszczędność czasu - zorganizujemy cały proces zakupu za Ciebie",
          //   },
          //   {
          //     header: "FINANSE",
          //     paragraph:
          //       "Pomagamy zdobyć finansowanie nawet bez wkładu własnego!",
          //   },
          // ]}
          // mobileHeader={
          //   <SectionHeading className="" top="PROCES" bottom="ZAKUPU" />
          // }
          header={
            <SectionHeading
              className=""
              top="INTELIGENTNY WYBÓR"
              bottom="NA WYCIĄGNIĘCIE RĘKI"
            />
          }
        ></InfoBlocks>
        {/* Footer */}
        <Footer
          oferta={oferta}
          header={
            <SectionHeading
              wideParent
              className="gap-3 md:gap-2 md:flex hidden"
              top="MASZ WIĘCEJ"
              bottom="PYTAŃ?"
            />
          }
        ></Footer>
      </div>
    </>
  );
};

export default page;
