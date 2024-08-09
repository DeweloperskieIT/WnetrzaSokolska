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
import VideoBackground from "@/components/customElements/video/VideoBackground";
import React from "react";
import TextPlusSingleVideo from "@/components/customElements/texts-images/TextPlusSingleVideo";

const page = () => {
  let oferta = "Apartament 103";

  return (
    <>
      {/* Header */}
      <OfferStickyHeader oferta={oferta} />

      <div className="landing-page text-light">
        {/* Video */}
        <VideoBackground src="/videos/video1.mp4" className="">
          <div className="w-full h-full relative z-10 flex flex-col gap-0 items-start justify-end text-light padding-element py-6">
            <span className="font-base text-6xl">LUKSUS</span>
            <span className="font-extralight text-6xl text-accent1">
              KTÓRY WZBUDZA POŻĄDANIE
            </span>
          </div>
        </VideoBackground>
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
        <div className="flex flex-col section-header-gap w-full">
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
            textClassName="bg-gradient-to-t from-dark/70 to-transparent pt-6 m d:pt-2"
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
          interval={4000}
          mode="carousel"
          elements={[
            {
              image: "/images/ko/right1.png",
              images: [
                "/images/ko/intercarousel/1/1.png",
                "/images/ko/intercarousel/1/2.png",
                "/images/ko/intercarousel/1/3.png",
                "/images/ko/intercarousel/1/4.png",
                "/images/ko/intercarousel/1/5.png",
              ],
              header: "SPEKTAKULARNE OŚWIETLENIE",
              paragraph:
                "Odkryj magię światła, nadającego Twoim wnętrzom unikalny charakter w zależności od pory dnia.",
            },
            {
              image: "/images/ko/left1.png",
              images: [
                "/images/ko/intercarousel/1/1.png",
                "/images/ko/intercarousel/1/2.png",
                "/images/ko/intercarousel/1/3.png",
                "/images/ko/intercarousel/1/4.png",
                "/images/ko/intercarousel/1/5.png",
              ],
              header: "MARKI PREMIUM",
              paragraph:
                "Postaw na rozwiązania najlepszych producentów: stolarki Dewro, ceramiki Villeroy & Boch, armatury Hansgrohe oraz AGD Samsung.",
            },
            {
              image: "/images/ko/right2.png",
              images: [
                "/images/ko/intercarousel/1/1.png",
                "/images/ko/intercarousel/1/2.png",
                "/images/ko/intercarousel/1/3.png",
                "/images/ko/intercarousel/1/4.png",
                "/images/ko/intercarousel/1/5.png",
              ],
              header: `SPÓJNE WNĘTRZE`,
              paragraph:
                "Wybierz ponadczasowy design, przewijający się przez szereg spójnych architektonicznie detali.",
            },
            {
              image: "/images/ko/left2.png",
              images: [
                "/images/ko/intercarousel/1/1.png",
                "/images/ko/intercarousel/1/2.png",
                "/images/ko/intercarousel/1/3.png",
                "/images/ko/intercarousel/1/4.png",
                "/images/ko/intercarousel/1/5.png",
              ],
              header: "NAJLEPSZE MATERIAŁY",
              paragraph:
                "Poczuj jakość: płyty meblowej i blatów Egger, trójwarstwowej deski podłogowej Barlinek czy włoskich plytek Marazzi.",
            },
            {
              image: "/images/ko/right3.png",
              images: [
                "/images/ko/intercarousel/1/1.png",
                "/images/ko/intercarousel/1/2.png",
                "/images/ko/intercarousel/1/3.png",
                "/images/ko/intercarousel/1/4.png",
                "/images/ko/intercarousel/1/5.png",
              ],
              header: "ŚWIATOWA ARCHITEKTURA",
              paragraph:
                "Zamieszkaj w budynku nagrodzonym prestiżową nagrodą European Property Award.",
            },
          ]}
          header={<SectionHeading wideParent top="UNIKATOWY" bottom="DESIGN" />}
        ></InterchangeableImages>
        {/* Seventh Section - Info with photo */}
        <TextPlusSingleVideo
          className="limited-width"
          src="/images/castle.png"
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
        ></TextPlusSingleVideo>
        {/* Eigth Section - Info text */}
        <InfoBlocks
          className="limited-width"
          info={[
            {
              icon: "/images/DingIcon.png",
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
