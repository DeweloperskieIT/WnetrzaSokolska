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
import { cn } from "@/lib/utils";
import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";
import { getDictionary, Locales } from "@/app/dictionaries";

const Home = async ({
  params: { locale },
}: {
  params: { locale: Locales };
}) => {
  const dict = await getDictionary(locale as Locales);
  return (
    <>
      {/* Sticky HEader main */}
      <MainStickyHeader dict={dict} />
      <div className="landing-page">
        {/* First Section - Breathing image */}
        <BreathingBackgroundImage
          className="bg-darkerGray/90 text-dark"
          bgSizes={["100%", "70%"]}
          interval={5000}
          img="/images/mainpage/deweloperskie-logo-corner-szare.webp"
        >
          <div className="limited-width flex flex-col md:gap-4 w-full h-full items-start justify-end pb-6 pt-20 md:py-40 md:pb-20">
            <h1 className="text-xl md:text-5xl">
              {dict.Landing_Page.breathing_background_image_01.header}
            </h1>
            <h2 className="text-xl md:text-xl font-light max-w-[800px] text-left">
              {dict.Landing_Page.breathing_background_image_01.paragraph}
            </h2>
          </div>
        </BreathingBackgroundImage>
        {/* Second Section - Icons */}
        <IconsModule
          header=""
          icons={
            dict.Landing_Page.icons_module_01.icons
            //   [
            //   {
            //     icon: "/images/mainpage/PolemanIcon.png",
            //     text: dict.Landing_Page.icons_module_01.icon_01_text,
            //   },
            //   {
            //     icon: "/images/mainpage/DangleKeysIcon.png",
            //     text: dict.Landing_Page.icons_module_01.icon_02_text,
            //   },
            //   {
            //     icon: "/images/mainpage/BuildingIcon.png",
            //     text: dict.Landing_Page.icons_module_01.icon_03_text,
            //   },
            //   {
            //     icon: "/images/mainpage/BedIcon.png",
            //     text: dict.Landing_Page.icons_module_01.icon_04_text,
            //   },
            // ]
          }
        />
        {/* ??????????????????? */}

        <div className="flex justify-center flex-row flex-wrap gap-10 w-fit h-fit md:padding-element max-w-screen-lg">
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
                {dict.Landing_Page.offer_blocks.offer_katowice_2.paragraph_01}
              </span>
              <span className="italic">
                {dict.Landing_Page.offer_blocks.offer_katowice_2.paragraph_02}
                <br />
                <span className="text-accent1">
                  {dict.Landing_Page.offer_blocks.see_offer}
                </span>
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
                {dict.Landing_Page.offer_blocks.offer_katowice_1.paragraph_01}
              </span>
              <span className="italic">
                {dict.Landing_Page.offer_blocks.offer_katowice_1.paragraph_02}
                <br />
                <span className="text-accent1">
                  {dict.Landing_Page.offer_blocks.see_offer}
                </span>
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
                {dict.Landing_Page.offer_blocks.offer_katowice_4.paragraph_01}
              </span>
              <span className="italic">
                {dict.Landing_Page.offer_blocks.offer_katowice_4.paragraph_02}
                <br />
                {dict.Landing_Page.offer_blocks.premieres} 30.08
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
                {dict.Landing_Page.offer_blocks.offer_katowice_3.paragraph_01}
              </span>
              <span className="italic">
                {dict.Landing_Page.offer_blocks.offer_katowice_3.paragraph_02}
                <br />
                {dict.Landing_Page.offer_blocks.premieres} 30.08
              </span>
            </div>
          </div>
        </div>

        {/* Eigth Section - Info text */}
        <InfoBlocks
          info={[
            {
              icon: "/images/mainpage/BuildingIcon.png",
              header: dict.Landing_Page.info_blocks_01.info_01.header,
              paragraph: dict.Landing_Page.info_blocks_01.info_01.paragraph,
            },
            {
              icon: "/images/mainpage/DangleKeysIcon.png",
              header: dict.Landing_Page.info_blocks_01.info_02.header,
              paragraph: dict.Landing_Page.info_blocks_01.info_02.paragraph,
            },
            {
              icon: "/images/mainpage/HomeMagnifyingGlass.png",
              header: dict.Landing_Page.info_blocks_01.info_03.header,
              paragraph: dict.Landing_Page.info_blocks_01.info_03.paragraph,
            },
          ]}
          header={
            <SectionHeading
              topClass=""
              top={dict.Landing_Page.info_blocks_01.header_top}
              bottom={dict.Landing_Page.info_blocks_01.header_bottom}
            />
          }
        />
        {/* Section something */}
        <div className="w-full h-fit relative limited-width flex flex-col gap-10">
          <SectionHeading
            top={dict.Landing_Page.youtube_shorts_01.header_top}
            bottom={dict.Landing_Page.youtube_shorts_01.header_bottom}
          />
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
        <Footer
          dict={dict}
          oferta={dict.Landing_Page.Footer_1.oferta}
          header={
            <SectionHeading
              className="gap-3 md:gap-2 md:flex hidden"
              top={dict.Landing_Page.Footer_1.header_top}
              bottom={dict.Landing_Page.Footer_1.header_bottom}
            />
          }
        />
      </div>
    </>
  );
};

export default Home;
