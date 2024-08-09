import Footer from "@/components/customElements/custom-ui/OfferFooter";
import IconsModule from "@/components/customElements/texts-images/IconsModule";
import ImageCarouselFader from "@/components/customElements/carousels/ImageCarouselFader";
import InfoBlocks from "@/components/customElements/texts-images/InfoBlocks";
import InterchangeableImages from "@/components/customElements/texts-images/InterchangeableImages";
import RzutMieszkania from "@/components/customElements/texts-images/RzutMieszkania";
import SectionHeading from "@/components/customElements/custom-ui/SectionHeading";
import SpiralPhotos4 from "@/components/customElements/texts-images/SpiralPhotos4";
import OfferStickyHeader from "@/components/customElements/custom-ui/OfferStickyHeader";
import VideoBackground from "@/components/customElements/video/VideoBackground";
import TextPlusSingleVideo from "@/components/customElements/texts-images/TextPlusSingleVideo";

let oferta = "Apartament 103";

const page = () => {
  return (
    <>
      {/* Header */}
      <OfferStickyHeader oferta={oferta} />

      <div className="landing-page">
        {/* Video */}
        <VideoBackground
          src="/apartament126/s1/version1.mp4"
          className="md:aspect-[16/9] max-h-[1024px] !h-[80svh] md:h-full md:-mb-10 lg:-mb-20 flex items-end"
        >
          <div className="w-full h-fit relative z-10 flex flex-col gap-0 items-start justify-end text-light padding-element py-6 from-dark/60 to-transparent bg-gradient-to-t">
            <span className="font-base text-6xl">LUKSUS</span>
            <span className="font-extralight text-6xl">KTÓRY CIĘ WYRÓŻNI</span>
          </div>
        </VideoBackground>
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
            duration={6000}
            itemsLength={15}
            dotsEnabledOnlyVisible
            dotsClassName={""}
            textBackground="bg-gradient-to-t from-dark to-transparent"
            className="md:aspect-[16/9] max-h-[1024px] !h-[80svh] md:h-full"
            textPlacement="bottom"
            texts={[
              {
                heading: "CAŁE MIASTO W ZASIĘGU",
              },
              {
                heading: "WYGODA DWÓCH ŁAZIENEK",
              },
              {
                heading: "PRYSZNIC I WANNA DLA CIEBIE",
              },
              {
                heading: "PRZESTRONNE LUSTRA",
              },
              {
                heading: "ŚWIĄTYNIA RELAKSU",
              },
              {
                heading: "POKÓJ DLA TWOICH PASJI",
              },
              {
                heading: "PRZESTRZEŃ OSOBISTA",
              },
              {
                heading: "OKNO NA ŚWIAT",
              },
              {
                heading: "ESENCJA NOWOCZESNOŚCI",
              },
              {
                heading: "MIEJSCE DO ROZKWITANIA",
              },
              {
                heading: "DOPRACOWANY STYL",
              },
              {
                heading: "WIECZÓR PO TWOJEMU",
              },
              {
                heading: "ZACHWYCAJĄCE WNĘTRZE",
              },
              {
                heading: "W ŚWIETLE ZACHODZĄCEGO SŁOŃCA",
              },
              {
                heading: "MIEJSCE NA KAŻDĄ HISTORIĘ",
              },
            ]}
            images={[
              "/apartament126/s3/01.jpg",
              "/apartament126/s3/02.jpg",
              "/apartament126/s3/03.jpg",
              "/apartament126/s3/04.jpg",
              "/apartament126/s3/05.jpg",
              "/apartament126/s3/06.jpg",
              "/apartament126/s3/07.jpg",
              "/apartament126/s3/08.jpg",
              "/apartament126/s3/09.jpg",
              "/apartament126/s3/10.jpg",
              "/apartament126/s3/11.jpg",
              "/apartament126/s3/12.jpg",
              "/apartament126/s3/13.jpg",
              "/apartament126/s3/14.jpg",
              "/apartament126/s3/15.jpg",
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
            "/apartament126/s5/10.jpg",
            "/apartament126/s5/3.jpg",
            "/apartament126/s5/5.jpg",
            "/apartament126/s5/4.jpg",
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
                "/apartament126/s6/1/1.jpeg",
                "/apartament126/s6/1/2.jpeg",
                "/apartament126/s6/1/3.jpeg",
                "/apartament126/s6/1/4.jpeg",
                "/apartament126/s6/1/5.jpeg",
              ],
              header: "APARTAMENT XXI WIEKU",
              paragraph:
                "Podąrzaj za trendami budownictwa mieszkaniowego i zainwestuj w nieruchomość projektowaną z myślą o nowoczesnych technologiach.",
            },
            {
              image: "/apartament126/s6/2/1.jpeg",
              images: [
                "/apartament126/s6/2/1.jpeg",
                "/apartament126/s6/2/2.jpeg",
                "/apartament126/s6/2/3.jpeg",
                "/apartament126/s6/2/4.jpeg",
                "/apartament126/s6/2/5.jpeg",
              ],
              header: "SPEKTAKULARNE OŚWIETLENIE",
              paragraph:
                "Odkryj magię światła, nadającego Twoim wnętrzom unikalny charakter w zależności od pory dnia.",
            },
            {
              image: "/apartament126/s6/3/1.jpeg",
              images: [
                "/apartament126/s6/3/1.jpg",
                "/apartament126/s6/3/2.jpg",
                "/apartament126/s6/3/3.jpg",
                "/apartament126/s6/3/4.jpeg",
                "/apartament126/s6/3/5.jpg",
              ],
              header: `SPÓJNE WNĘTRZE`,
              paragraph:
                "Wybierz ponadczasowy design, przewijający się przez szereg spójnych architektonicznie detali.",
            },
            {
              image: "/apartament126/s6/4/1.jpeg",
              images: [
                "/apartament126/s6/4/1.jpg",
                "/apartament126/s6/4/2.jpg",
                "/apartament126/s6/4/3.jpg",
                "/apartament126/s6/4/4.jpg",
                "/apartament126/s6/4/5.jpg",
                "/apartament126/s6/4/6.jpg",
              ],
              header: "MARKI PREMIUM",
              paragraph:
                "Wyposażenie oraz materiały najlepszych producentów: stolarka Dewro, ceramika Villeroy & Boch, trójwarstwowa deska podłogowa Barlinek oraz włoskie płytki Marazzi.",
            },
            {
              image: "/apartament126/s6/5/1.jpeg",
              images: [
                "/apartament126/s6/5/1.jpg",
                "/apartament126/s6/5/2.jpg",
                "/apartament126/s6/5/3.jpg",
                "/apartament126/s6/5/4.jpg",
                "/apartament126/s6/5/5.jpg",
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
