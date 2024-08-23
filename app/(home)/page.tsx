import {
  Footer,
  MainStickyHeader,
  SectionHeading,
} from "@/components/customElements/custom-ui";
import {
  BreathingBackgroundImage,
  IconsModule,
  InfoBlocks,
} from "@/components/customElements/texts-images";
import LandingPageOffers from "@/components/customElements/texts-images/LandingPageOffers";
import { YoutubeContainer } from "@/components/customElements/video";
import {
  BreathingBackgroundImageData,
  FooterSectionData,
  IconsSectionData,
  InfoBlocksSectionData,
  LandingPageOffersSectionData,
} from "@/data/content/Landing";
import { cn } from "@/lib/utils";
import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* Sticky HEader main */}
      <MainStickyHeader />
      <div className="landing-page">
        {/* First Section - Breathing image */}
        <BreathingBackgroundImage
          {...BreathingBackgroundImageData}
          // className="bg-darkerGray/90 text-dark"
          // bgSizes={["100%", "70%"]}
          // interval={5000}
          // img="/images/mainpage/deweloperskie-logo-corner-szare.webp"
        >
          {/* <div className="limited-width flex flex-col md:gap-4 w-full h-full items-start justify-end pb-6 pt-20 md:py-40 md:pb-20">
            <h1 className="text-xl md:text-5xl">NASZĄ PASJĄ JEST JAKOŚĆ</h1>
            <h2 className="text-xl md:text-xl font-light max-w-[800px] text-left">
              Aranżacja własnego apartamentu jest jak kolacja: możesz spędzić
              wieczór przyrządzając ją samodzielnie, albo zaufać
              profesjonalistom i delektować się posiłkiem serwowanym przez szefa
              kuchni.
            </h2>
          </div> */}
        </BreathingBackgroundImage>
        {/* Second Section - Icons */}
        <IconsModule {...IconsSectionData} />
        {/* ??????????????????? */}

        <div className="flex justify-center flex-row flex-wrap gap-10 w-fit h-fit md:padding-element">
          <Link
            href="/katowice-2"
            className="aspect-[4/3] lg:max-w-[45%] h-auto w-full relative flex group items-end"
          >
            <Image
              alt="alt"
              src={"/images/mainpage/grid-apartament-1.png"}
              fill
              className={cn(
                "aboslute inset-0 lg:group-hover:opacity-20 transition-all duration-200"
              )}
            />
            <div className="w-full h-fit flex flex-col gap-4 z-[1] p-6 lg:p-10 lg:pb-12 text-xl lg:opacity-0 md:group-hover:opacity-100  transition-all duration-200 bg-dark/50">
              <span>
                Apartament zaaranżowany z myślą o osobach, które pragną
                korzystać z potencjału Katowic na swoich zasadach.
              </span>
              <span className="italic">
                Luksus, który wzbudza pożądanie
                <br />
                <span className="text-accent1">Zobacz ofertę</span>
              </span>
            </div>
          </Link>
          <Link
            href="/katowice-1"
            className="aspect-[4/3] lg:max-w-[45%] h-auto w-full relative flex group items-end"
          >
            <Image
              alt="alt"
              src={"/images/mainpage/grid-apartament-2.png"}
              fill
              className={cn(
                "aboslute inset-0 lg:group-hover:opacity-20 transition-all duration-200"
              )}
            />
            <div className="w-full h-fit flex flex-col gap-4 z-[1] p-6 lg:p-10 lg:pb-12 text-xl lg:opacity-0 md:group-hover:opacity-100  transition-all duration-200 bg-dark/50">
              <span>
                Najwyżej usytuowany apartament z wygodną loggią dla osób, które
                cenią sobie wyjątkowość.
              </span>
              <span className="italic">
                Luksus, który Cię wyróżni
                <br />
                <span className="text-accent1">Zobacz ofertę</span>
              </span>
            </div>
          </Link>
          <div className="aspect-[4/3] lg:max-w-[45%] h-auto w-full relative flex group items-end">
            <Image
              alt="alt"
              src={"/images/mainpage/grid-sokolska-towers-budynek.jpg"}
              fill
              className={cn(
                "aboslute inset-0 lg:group-hover:opacity-20 transition-all duration-200"
              )}
            />
            <div className="w-full h-fit flex flex-col gap-4 z-[1] p-6 lg:p-10 lg:pb-12 text-xl lg:opacity-0 md:group-hover:opacity-100  transition-all duration-200 bg-dark/50">
              <span className="">
                Nowoczesny apartament dla osób, które chcą mieć wszystko w
                zasięgu ręki.
              </span>
              <span className="italic">
                Przyjmij nową perspektywę
                <br />
                Premiera 30.08
              </span>
            </div>
          </div>
          <div className="aspect-[4/3] lg:max-w-[45%] h-auto w-full relative flex group items-end">
            <Image
              alt="alt"
              src={"/images/mainpage/grid-sokolska-towers-budynek.jpg"}
              fill
              className={cn(
                "aboslute inset-0 lg:group-hover:opacity-20 transition-all duration-200"
              )}
            />
            <div className="w-full h-fit flex flex-col gap-4 z-[1] p-6 lg:p-10 lg:pb-12 text-xl lg:opacity-0 md:group-hover:opacity-100  transition-all duration-200 bg-dark/50">
              <span className="">
                Twój mały dom na XIV piętrze, z przestronnym salonem z kuchnią,
                gabinetem, sypialnią, pralnią, garderobą oraz pojemną komórką
                lokatorską na piętrze.
              </span>
              <span className="italic">
                Twoja oaza spokoju w sercu miasta
                <br />
                Premiera 30.08
              </span>
            </div>
          </div>
        </div>

        {/* Eigth Section - Info text */}
        <InfoBlocks {...InfoBlocksSectionData} />
        {/* Eigth Section - Info text */}
        {/* <LandingPageOffers {...LandingPageOffersSectionData} /> */}
        {/* Section something */}
        <div className="w-full h-fit relative limited-width flex flex-col gap-10">
          <SectionHeading top="PONADCZASOWY " bottom="BUDYNEK" />
          <div className="flex flex-row justify-evenly gap-10 flex-wrap size-auto">
            <YouTubeEmbed
              videoid="AdIdKxq-PTs"
              style="width: 270px !important; height: 480px !important; margin: auto; aspectRatio: 9/16"
              height={0}
              width={0}
            />
            <YouTubeEmbed
              videoid="_Amg5afbXSU"
              style="width: 270px !important; height: 480px !important; margin: auto; aspectRatio: 9/16"
              height={0}
              width={0}
            />
            <YouTubeEmbed
              videoid="7i7Eu6iRRCI"
              style="width: 270px !important; height: 480px !important; margin: auto; aspectRatio: 9/16"
              height={0}
              width={0}
            />
          </div>
        </div>
        {/* footer */}
        <Footer {...FooterSectionData} />
      </div>
    </>
  );
};

export default Home;
