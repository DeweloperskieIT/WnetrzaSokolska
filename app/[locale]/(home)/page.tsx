import {
  Footer,
  FullscreenCarouselContainer,
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
import { ImageCarouselCustom } from "@/components/customElements/carousels";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "lucide-react";

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
            <ul className="informacje-list-bullet-common">
              <li>
                {dict.Landing_Page.breathing_background_image_01.list_item_01}
              </li>
              <li>
                {dict.Landing_Page.breathing_background_image_01.list_item_02}
              </li>
              <li>
                {dict.Landing_Page.breathing_background_image_01.list_item_03}
              </li>
            </ul>
            <h3 className="pt-4">
              {dict.Landing_Page.breathing_background_image_01.subheader}
            </h3>
            <p className="text-xl md:text-xl font-light max-w-[800px] text-left">
              {dict.Landing_Page.breathing_background_image_01.subparagraph}
            </p>
          </div>
        </BreathingBackgroundImage>

        <SectionHeading
          className="-my-10"
          top={dict.Landing_Page.offer_blocks.header}
          wideParent
        />
        <div className="flex justify-center flex-row flex-wrap gap-10 w-fit h-fit md:padding-element max-w-screen-lg">
          <Link
            href="/katowice-2"
            className="aspect-[4/3] lg:max-w-[45%] h-auto w-full relative flex group items-end"
          >
            <Image
              alt="alt"
              src={"/images/mainpage/grid-apartament-1.png"}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
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
              sizes="(max-width: 768px) 100vw, 50vw"
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
              sizes="(max-width: 768px) 100vw, 50vw"
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
                {dict.Landing_Page.offer_blocks.premieres}
              </span>
            </div>
          </div>
          <div className="aspect-[4/3] lg:max-w-[45%] h-auto w-full relative flex group items-end">
            <Image
              alt="alt"
              src={"/images/mainpage/grid-sokolska-towers-budynek.jpg"}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
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
                {dict.Landing_Page.offer_blocks.premieres}
              </span>
            </div>
          </div>
        </div>
        {/* Second Section - Icons */}
        {/* <IconsModule
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
        /> */}
        {/* ??????????????????? */}

        <div className="flex w-full h-fit flex-col gap-10 padding-element limited-width">
          <SectionHeading
            top={dict.Landing_Page.company_properties_01.header}
          />
          <div>
            <ul className="informacje-list-bullet-common text-2xl">
              <li>{dict.Landing_Page.company_properties_01.text_01}</li>
              <li>{dict.Landing_Page.company_properties_01.text_02}</li>
              <li>{dict.Landing_Page.company_properties_01.text_03}</li>
              <li>{dict.Landing_Page.company_properties_01.text_04}</li>
              <li>{dict.Landing_Page.company_properties_01.text_05}</li>
              <li>{dict.Landing_Page.company_properties_01.text_06}</li>
              <li>{dict.Landing_Page.company_properties_01.text_07}</li>
            </ul>
          </div>
        </div>

        <FullscreenCarouselContainer className="h-full">
          <ImageCarouselCustom
            className=""
            aspectCustom="aspect-[9/16]"
            images={dict.Landing_Page.image_carousel_custom_01.images}
          />
        </FullscreenCarouselContainer>

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

        {/* FAQ */}
        <div className="w-full h-fit flex flex-col gap-10 limited-width ">
          <SectionHeading top="FAQ" wideParent />
          <div className="flex flex-col gap-4 w-full ">
            <Accordion type="single" collapsible>
              {dict.Landing_Page.FAQ.map(
                (
                  { question, answer }: { question: string; answer: string },
                  i: number
                ) => (
                  <AccordionItem key={i} value={question}>
                    <AccordionTrigger className="hover:bg-darkerGray/20 h-fit">
                      <div className="group footer-button-parent h-fit">
                        <div className="footer-button-secondary-container h-fit py-2">
                          <div className="footer-button-leftline group-hover:footer-hover-group-color h-fit"></div>
                          <span className="footer-button-text !no-underline group-hover:!no-underline text-left h-fit">
                            {question}
                          </span>
                        </div>
                        <span className="footer-button-bottomline group-hover:footer-hover-group-color"></span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="padding-element">
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                )
              )}
            </Accordion>
          </div>
        </div>

        {/* footer */}
        <Footer
          dict={dict}
          oferta={dict.Landing_Page.Footer_1.oferta}
          header={
            <SectionHeading
              wideParent
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
