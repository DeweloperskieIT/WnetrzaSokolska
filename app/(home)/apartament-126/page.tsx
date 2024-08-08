import Footer from "@/components/customElements/custom-ui/OfferFooter";
import IconsModule from "@/components/customElements/texts-images/IconsModule";
import ImageCarouselFader from "@/components/customElements/carousels/ImageCarouselFader";
import InfoBlocks from "@/components/customElements/texts-images/InfoBlocks";
import InterchangeableImages from "@/components/customElements/texts-images/InterchangeableImages";
import RzutMieszkania from "@/components/customElements/texts-images/RzutMieszkania";
import SectionHeading from "@/components/customElements/custom-ui/SectionHeading";
import SpiralPhotos4 from "@/components/customElements/texts-images/SpiralPhotos4";
import StickyFormButton from "@/components/customElements//custom-ui/StickyFormButton";
import OfferStickyHeader from "@/components/customElements/custom-ui/OfferStickyHeader";
import VideoBackground from "@/components/customElements/video/VideoBackground";
import Image from "next/image";
import TextPlusSinglePhoto from "@/components/customElements/texts-images/TextPlusSinglePhoto";

let oferta = "Apartament 103";

const page = () => {
  return (
    <>
      {/* Header */}
      <OfferStickyHeader oferta={oferta} />

      <div className="landing-page">
        {/* Video */}
        <VideoBackground src="/videos/video1.mp4" className="">
          <div className="w-full h-full relative z-10 flex flex-col gap-0 items-start justify-end text-light padding-element py-6">
            <span className="font-base text-6xl">LUKSUS</span>
            <span className="font-extralight text-6xl">KTÓRY CIĘ WYRÓŻNI</span>
          </div>
        </VideoBackground>
        {/* First Section - Icons Module */}
        <IconsModule
          className=""
          icons={[
            {
              icon: "/images/PolemanIcon.png",
              text: "Najwyżej położony balkon w budynku",
            },
            {
              icon: "/images/MapIcon.png",
              text: "Apartamenty w topowej lokalizacji",
            },
            {
              icon: "/images/BuildingIcon.png",
              text: "Światowej klasy architektura",
            },
            {
              icon: "/images/DangleKeysIcon.png",
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
        {/* Second Section - Carousel fader */}
        <div className="flex flex-col section-header-gap w-full">
          <SectionHeading
            wideParent
            className=""
            top="KOMFORT, NA KTÓRY"
            bottom="ZASŁUGUJESZ"
          />
          <ImageCarouselFader
            autoplay
            itemsLength={5}
            dotsEnabledOnlyVisible
            dotsClassName={""}
            textBackground="bg-gradient-to-t from-dark to-transparent"
            className="h-[512px] md:h-[768px]"
            textPlacement="bottom"
            texts={[
              {
                heading: "PRZESTRZENNY WIDOK",
              },
              {
                heading: "KOMFORTOWA SYPIALNIA",
              },
              {
                heading: "DOPRACOWANE WNĘTRZA",
              },
              {
                heading: "JAKOŚĆ, KTÓRĄ MOŻNA POCZYĆ W DŁONI",
              },
              {
                heading: "PRYWATNE MIEJSCE ZAWSZE CZEKAJĄCE NA CIEBIE",
              },
            ]}
            images={[
              "/images/ko/carousel-1.png",
              "/images/ko/carousel-2.png",
              "/images/ko/carousel-3.png",
              "/images/ko/carousel-4.png",
              "/images/ko/carousel-5.png",
            ]}
          />
        </div>
        {/* Third Section - Rzut Mieszkania */}
        <RzutMieszkania
          cena="420 000 EUR"
          powierzchnia=" 75,20"
          img={{
            mobile: "/images/ko/rzutmobile.png",
            desktop: "/images/ko/rzutdesktop.png",
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
            "/images/ko/img1.png",
            "/images/ko/img2.png",
            "/images/ko/img3.png",
            "/images/ko/img4.png",
          ]}
        />
        {/* Fifth Section - Interchangeable images */}
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
        <TextPlusSinglePhoto
          img="/images/castle.png"
          content={
            <div className="flex justify-center flex-col gap-10 text-light lg:text-right text-xl">
              <span className="">
                <span className="text-accent1 font-bold">3100</span> -
                przynajmniej tyle mieszkań powstało i jeszcze powstanie w
                katowickiej Strefie Kultury do 2028 roku.
              </span>
              <span>
                Postaw na unikatową lokalizację, w otoczeniu której nie powstaną
                tysiące nowych mieszkań, z którymi będzie musiał konkurować ceną
                w momencie sprzedaży nieruchomości na rynku wtórnym.
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
        ></TextPlusSinglePhoto>
        {/* Eigth Section - Info text */}
        <InfoBlocks
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
