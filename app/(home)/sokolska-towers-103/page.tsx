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
        <VideoBackground
          src="/apartament126/s1/Version1.mp4"
          className="aspect-[4/3] md:aspect-video max-h-[1024px] h-full md:-mb-10 lg:-mb-20 flex items-end"
        ></VideoBackground>
        {/* First Section - Icons Module */}
        <IconsModule
          className=""
          icons={[
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
          ]}
          header={
            <SectionHeading
              className="w-2/3 md:w-full"
              top="DOŁĄCZ DO EKSKLUZYWNEGO"
              topClass="text-2xl md:text-[48px] font-bold"
              bottom="GRONA WŁAŚCICIELI SOKOLSKA TOWERS"
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
            className="aspect-[16/9] max-h-[1024px]"
            textClassName="bg-gradient-to-t from-dark/70 to-transparent pt-6 m d:pt-2"
            images={[
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
            ]}
          />
        </div>
        {/* Third Section - Rzut Mieszkania */}
        <RzutMieszkania
          cena="420 000 EUR"
          powierzchnia=" 75,20"
          img={{
            mobile: "/apartament126/s4/rzutm.webp",
            desktop: "/apartament126/s4/rzutd.webp",
          }}
          header={
            <SectionHeading
              className=""
              top="POZNAJ SWÓJ NOWY"
              bottom="APARTAMENT"
            />
          }
        ></RzutMieszkania>
        {/* Fourth Section - Standalone Photos */}
        <SpiralPhotos4
          images={[
            {
              img: "/apartament126/s5/1-wspolny-taras.jpg",
              alt: "Wpólny taras z ogrodem",
            },
            {
              img: "/apartament126/s5/2-portiernia.jpg",
              alt: "Portiernia na wejściu do budynku",
            },
            {
              img: "/apartament126/s5/3-wspolna-strefa-spa.jpg",
              alt: "Wspólna strefa SPA z sauną",
            },
            {
              img: "/apartament126/s5/4-wspolna-silownia.jpg",
              alt: "Wspólna siłownia",
            },
          ]}
        />
        {/* Fifth Section - Interchangeable images */}
        <InterchangeableImages
          interval={4000}
          mode="carousel"
          elements={[
            {
              image: "/apartament126/s6/1/1.jpeg",
              images: [
                {
                  img: "/apartament126/s6/1/apartament-XXIw-1.jpg",
                  alt: "Wnętrze telewizor oświetlenie czerwone",
                },
                {
                  img: "/apartament126/s6/1/apartament-XXIw-2.jpg",
                  alt: "Wnętrze telewizor oświetlenie niebieskie",
                },
                {
                  img: "/apartament126/s6/1/apartament-XXIw-3.jpg",
                  alt: "Wnętrze telewizor oświetlenie zielone",
                },
                {
                  img: "/apartament126/s6/1/apartament-XXIw-4.jpg",
                  alt: "Wnętrze interaktywna ramka na zdjęcia",
                },
                {
                  img: "/apartament126/s6/1/apartament-XXIw-5.jpg",
                  alt: "Wnętrze interaktywna ramka na zdjęcia szerokie ujęcie",
                },
              ],
              header: "APARTAMENT XXI WIEKU",
              paragraph:
                "Podążaj za trendami budownictwa mieszkaniowego i zainwestuj w nieruchomość projektowaną z myślą o nowoczesnych technologiach.",
            },
            {
              image: "/apartament126/s6/2/1.jpeg",
              images: [
                {
                  img: "/apartament126/s6/2/spektakularne-oswietlenie-1.jpg",
                  alt: "Oświetlenie salonu o poranku",
                },
                {
                  img: "/apartament126/s6/2/spektakularne-oswietlenie-2.jpg",
                  alt: "Oświetlenie salonu wieczorem",
                },
                {
                  img: "/apartament126/s6/2/spektakularne-oswietlenie-3.jpg",
                  alt: "Oświetlenie salonu wieczorem niebieskie",
                },
                {
                  img: "/apartament126/s6/2/spektakularne-oswietlenie-4.jpg",
                  alt: "Oświetlenie salonu wieczorem alternatywne",
                },
                {
                  img: "/apartament126/s6/2/spektakularne-oswietlenie-5.jpg",
                  alt: "Oświetlenie salonu wieczorem alternatywne na kanape",
                },
              ],
              header: "SPEKTAKULARNE OŚWIETLENIE",
              paragraph:
                "Odkryj magię światła, nadającego Twoim wnętrzom unikalny charakter w zależności od pory dnia.",
            },
            {
              image: "/apartament126/s6/3/1.jpeg",
              images: [
                {
                  img: "/apartament126/s6/3/spojne-wnetrza-1.jpg",
                  alt: "Widok na wykońćzony salon",
                },
                {
                  img: "/apartament126/s6/3/spojne-wnetrza-2.jpg",
                  alt: "Zbliżenie na drewniane detale",
                },
                {
                  img: "/apartament126/s6/3/spojne-wnetrza-3.jpg",
                  alt: "Zbliżenie na lampę z drewnianym wykończeniem",
                },
                {
                  img: "/apartament126/s6/3/spojne-wnetrza-4.jpg",
                  alt: "Ujęcie na ścianę telewizora z drewnianym wykończeniem",
                },
                {
                  img: "/apartament126/s6/3/spojne-wnetrza-5.jpg",
                  alt: "Zbliżenie na stolik na kawę pasujący do salonu",
                },
              ],
              header: `SPÓJNE WNĘTRZE`,
              paragraph:
                "Wybierz ponadczasowy design, przewijający się przez szereg spójnych architektonicznie detali.",
            },
            {
              image: "/apartament126/s6/4/1.jpeg",
              images: [
                {
                  img: "/apartament126/s6/4/marki-premium-1.jpg",
                  alt: "Zbliżenie na logo drzwi marki DEWRO",
                },
                {
                  img: "/apartament126/s6/4/marki-premium-2.jpg",
                  alt: "Ujęcie wykończonej łazienki z prysznicem",
                },
                {
                  img: "/apartament126/s6/4/marki-premium-3.jpg",
                  alt: "Ujęcie wykończonej łazienki z wanną",
                },
                {
                  img: "/apartament126/s6/4/marki-premium-4.jpg",
                  alt: "Zbliżenie na drewniane panele podłogowe",
                },
                {
                  img: "/apartament126/s6/4/marki-premium-5.jpg",
                  alt: "Ujęcie oświetlenia sufitowego i jednostki klimatyzacji",
                },
              ],
              header: "MARKI PREMIUM",
              paragraph:
                "Wyposażenie oraz materiały najlepszych producentów: stolarka Dewro, ceramika Villeroy & Boch, trójwarstwowa deska podłogowa Barlinek oraz włoskie płytki Marazzi.",
            },
            {
              image: "/apartament126/s6/5/1.jpeg",
              images: [
                {
                  img: "/apartament126/s6/5/swiatowa-architektura-1.jpg",
                  alt: "Zachód słońca widoczny z okna sokolska towers",
                },
                {
                  img: "/apartament126/s6/5/swiatowa-architektura-2.jpg",
                  alt: "Międzynarodowe nagrody przyznane za wspaniałą architekturze budynku",
                },
                {
                  img: "/apartament126/s6/5/swiatowa-architektura-3.jpg",
                  alt: "Wschód słońca widoczny z okna sokolska towers",
                },
                {
                  img: "/apartament126/s6/5/swiatowa-architektura-4.jpg",
                  alt: "Ujęcie z recepcji budynku sokolska towers",
                },
                {
                  img: "/apartament126/s6/5/swiatowa-architektura-5.jpg",
                  alt: "Ujęcie z drona wspólnego prywatnego tarasu wieczorem",
                },
              ],
              header: "ŚWIATOWA ARCHITEKTURA",
              paragraph:
                "Postaw na ponadcasową bryłę budynku i zamieszkaj w ponadczasowym budynku nagrodzonym prestiżową nagrodą European Property Award.",
            },
          ]}
          header={<SectionHeading wideParent top="UNIKATOWY" bottom="DESIGN" />}
        ></InterchangeableImages>
        {/* Seventh Section - Info with photo */}
        <TextPlusSingleVideo
          src="/apartament126/s7/360V2.mp4"
          content={
            <div className="flex justify-center flex-col gap-10 text-light lg:text-right text-xl">
              <span className="">
                <span className="text-accent1 font-bold">3100</span> -
                przynajmniej tyle mieszkań powstało i jeszcze powstanie w
                katowickiej Strefie Kultury do 2028 roku.
              </span>
              <span>
                Postaw na unikatową lokalizację, w otoczeniu której nie powstaną
                tysiące nowych mieszkań, z którymi będziesz musiał konkurować
                ceną w momencie sprzedaży nieruchomości na rynku wtórnym.
              </span>
              <span>
                Wybierz narożny apartament na XV piętrze ponadczasowego
                budynku&nbsp;
                <span className="text-accent1 font-bold">Sokolska Towers.</span>
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
          info={[
            {
              icon: "/apartament126/s8/1.webp",
              header: "ZAKUP OD PROFESJONALISTY",
              paragraph:
                "Decyzja o zakupie nieruchomości jest jedną z najważniejszych decyzji finansowych Twojego życia. Postaw na jakość stojącą za profesjonalnym inwestorem - dokonaj zakupu w oparciu o fakturę VAT, z pełną rękojmią na prace aranżacyjne.",
            },
            {
              icon: "/apartament126/s8/2.webp",
              header: "INDYWIDUALNY OPIEKUN TRANSAKCJI",
              paragraph:
                "Apartament Premium wymaga obsługi premium, realizowanej od początku do końca przez przypisanego do Ciebie opiekuna transakcji, który weźmie na siebie ciężar formalności.",
            },
            {
              icon: "/apartament126/s8/3.webp",
              header: "PRZEŁAM BARIERY FINANSOWE",
              paragraph:
                "Jeśli tylko posiadasz inną nieruchomość, może ona posłużyć za Twój wkład własny do kredytu. Nie pozwól, żeby bariera finansowa stanęła na drodze do inwestycji w prestiż.",
            },
          ]}
          header={
            <SectionHeading
              top="INTELIGENTNY WYBÓR"
              bottom="NA WYCIĄGNIĘCIE RĘKI"
            />
          }
        ></InfoBlocks>
        {/* Ninth Section - Footer */}
        <Footer
          oferta={oferta}
          header={
            <SectionHeading
              wideParent
              className="gap-3 md:gap-2 md:flex hidden"
              top="SKONTAKTUJ SIĘ"
              bottom="W SPRAWIE OFERTY"
            />
          }
        ></Footer>
      </div>
    </>
  );
};

export default page;
