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
  InterchangeableImages,
  SpiralPhotos4,
} from "@/components/customElements/texts-images";
import { cn } from "@/lib/utils";
import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";
import { getDictionary, Locales } from "@/app/dictionaries";
import {
  ImageCarouselCustom,
  ImageCarouselCustomVertical,
  ImageCarouselFader,
} from "@/components/customElements/carousels";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DOMPurify from "isomorphic-dompurify";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ContactForm } from "@/components/customElements/forms";

const Home = async ({
  params: { locale },
}: {
  params: { locale: Locales };
}) => {
  const dict = await getDictionary(locale as Locales);
  if (!dict) {
    return;
  }

  return (
    <>
      {/* Sticky HEader main */}
      <MainStickyHeader dict={dict} />
      <div className="landing-page">
        {/* First Section - Breathing image */}
        {/* <BreathingBackgroundImage
          className="bg-darkerGray/90 text-websiteBackground2"
          bgSizes={["50%", "40%"]}
          interval={4000}
          img="/images/mainpage/deweloperskie-logo-corner-szare.webp"
        >
          <div className="limited-width flex flex-col gap-4 w-full h-full items-start justify-end pb-10 py-20">
            <h1 className="text-2xl md:text-5xl">
              {dict.Landing_Page.breathing_background_image_01.header}
            </h1>
            <h2 className="text-xl font-light xl:max-w-[1200px] text-left flex flex-col gap-4">
              <span>
                {dict.Landing_Page.breathing_background_image_01.paragraph_01}
              </span>
              <span>
                {dict.Landing_Page.breathing_background_image_01.paragraph_02}
              </span>
            </h2>
          </div>
        </BreathingBackgroundImage> */}

        <div className="w-full h-fit relative flex items-center justify-center">
          <Image
            alt="image"
            src={"/images/mainpage/backgroundbuilding.jpg"}
            width={1920}
            height={1080}
            className="top-0 left-0 absolute object-cover h-full w-full opacity-35 object-right-top"
          />
          <div className="limited-width flex flex-col gap-4 w-full h-full items-start justify-end pb-[60px] pt-[160px] z-10 opacity-85">
            <h1 className="text-2xl md:text-5xl">
              {dict.Landing_Page.breathing_background_image_01.header}
            </h1>
            <h2 className="text-xl font-light xl:max-w-[1200px] text-left flex flex-col gap-4">
              <span>
                {dict.Landing_Page.breathing_background_image_01.paragraph_01}
              </span>
              <span>
                {dict.Landing_Page.breathing_background_image_01.paragraph_02}
              </span>
            </h2>
          </div>
        </div>

        <SectionHeading
          className="md:-my-10 -mb-2"
          top={dict.Landing_Page.offer_blocks.header_top}
          bottom={dict.Landing_Page.offer_blocks.header_bottom}
          wideParent
        />

        {/* Second Section - Icons */}
        <IconsModule
          accent="text-accent1"
          isBold
          className="-mt-4 lg:-mt-14 w-full"
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
        <div className="flex justify-between flex-row flex-wrap gap-10 w-fit h-fit max-w-screen-lg padding-element lg:p-0 -mt-10 lg:-mt-24">
          <Link
            href={"/oferta"}
            className="aspect-[4/3] lg:max-w-[48%] h-auto w-full relative flex group items-end"
          >
            <Image
              alt="alt"
              src={"/mainpage/Dla-kazdego.jpg"}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={cn(
                "aboslute object-cover inset-0 lg:group-hover:opacity-80 transition-all duration-200"
              )}
            />
            <div className="w-full h-fit flex flex-col gap-4 z-[1] p-4 lg:p-6 lg:pb-8 text-xl lg:opacity-80 md:group-hover:opacity-100  transition-all duration-200 bg-dark/75">
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    dict.Landing_Page.offer_blocks.offer_katowice_4.paragraph_01
                  ),
                }}
              />
              <span className="italic">
                {dict.Landing_Page.offer_blocks.offer_katowice_4.paragraph_02}
                <br />
                <span className="text-accent1">
                  {dict.Landing_Page.offer_blocks.see_offer}
                </span>
              </span>
            </div>
          </Link>
          <Link
            href="/katowice-2"
            className="aspect-[4/3] lg:max-w-[48%] h-auto w-full relative flex group items-end"
          >
            <Image
              alt="alt"
              src={"/mainpage/Dla-niego.jpg"}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={cn(
                "aboslute object-cover inset-0 lg:group-hover:opacity-80 transition-all duration-200"
              )}
            />
            <div className="w-full h-fit flex flex-col gap-4 z-[1] p-4 lg:p-6 lg:pb-8 text-xl lg:opacity-80 md:group-hover:opacity-100  transition-all duration-200 bg-dark/75">
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    dict.Landing_Page.offer_blocks.offer_katowice_2.paragraph_01
                  ),
                }}
              />
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
            className="aspect-[4/3] lg:max-w-[48%] h-auto w-full relative flex group items-end"
          >
            <Image
              alt="alt"
              src={"/mainpage/Dla-niej.jpg"}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={cn(
                "aboslute object-cover inset-0 lg:group-hover:opacity-80 transition-all duration-200"
              )}
            />
            <div className="w-full h-fit flex flex-col gap-4 z-[1] p-4 lg:p-6 lg:pb-8 text-xl lg:opacity-80 md:group-hover:opacity-100  transition-all duration-200 bg-dark/75">
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    dict.Landing_Page.offer_blocks.offer_katowice_1.paragraph_01
                  ),
                }}
              />
              <span className="italic">
                {dict.Landing_Page.offer_blocks.offer_katowice_1.paragraph_02}
                <br />
                <span className="text-accent1">
                  {dict.Landing_Page.offer_blocks.see_offer}
                </span>
              </span>
            </div>
          </Link>
          <Link
            href={"/katowice-3"}
            className="aspect-[4/3] lg:max-w-[48%] h-auto w-full relative flex group items-end"
          >
            <Image
              alt="alt"
              src={"/mainpage/Dla-nich.jpg"}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={cn(
                "aboslute object-cover inset-0 lg:group-hover:opacity-80 transition-all duration-200"
              )}
            />
            <div className="w-full h-fit flex flex-col gap-4 z-[1] p-4 lg:p-6 lg:pb-8 text-xl lg:opacity-80 md:group-hover:opacity-100  transition-all duration-200 bg-dark/75">
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    dict.Landing_Page.offer_blocks.offer_katowice_3.paragraph_01
                  ),
                }}
              />
              <span className="italic">
                {dict.Landing_Page.offer_blocks.offer_katowice_3.paragraph_02}
                <br />
                <span className="text-accent1">
                  {dict.Landing_Page.offer_blocks.see_offer}
                </span>
              </span>
            </div>
          </Link>
        </div>
        {/* ??????????????????? */}

        <div className="flex w-full h-fit flex-col gap-10 limited-width items-center">
          <div className="bg-dark p-10 flex items-center flex-col gap-10">
            <Image
              alt="icon"
              src={"/images/mainpage/house-magni-icon.png"}
              width={60}
              height={60}
              className="size-10 md:size-20"
            />
            <div className="flex flex-col gap-6">
              <span className="font-light text-2xl md:text-4xl">
                {dict.Landing_Page.company_properties_01.header}
              </span>
              <ul className="informacje-list-bullet-common  text-lg md:text-xl flex flex-col gap-6">
                <li>{dict.Landing_Page.company_properties_01.text_01}</li>
                <li>{dict.Landing_Page.company_properties_01.text_02}</li>
                <li>{dict.Landing_Page.company_properties_01.text_03}</li>
                <li>{dict.Landing_Page.company_properties_01.text_04}</li>
                <li>{dict.Landing_Page.company_properties_01.text_05}</li>
              </ul>
            </div>
          </div>
          {/* <IconsModule icons={dict.Landing_Page.icons_module_02.icons} /> */}
        </div>

        {/* <div className="limited-width flex flex-col w-full gap-10 items-center">
          <SectionHeading
            top={dict.Landing_Page.post_carousels_header.header_top}
            bottom={dict.Landing_Page.post_carousels_header.header_bottom}
          />
          <div className="max-w-screen-lg h-fit flex flex-col md:flex-row gap-6 size-auto md:aspect-[18/17]  self-center w-full">
            <ImageCarouselFader
              className="h-full flex-grow"
              autoplay
              duration={6000}
              images={dict.Landing_Page.image_carousel_fader_01.images}
            />
            <div className="flex flex-col w-full h-full md:aspect-[1/2] flex-1 gap-6">
              <div className="flex-1 h-fit">
                <ImageCarouselFader
                  className="h-fit max-h-fit aspect-square"
                  objectFit
                  autoplay
                  duration={6000}
                  images={dict.Landing_Page.image_carousel_fader_02.images}
                />
              </div>
              <div className="bg-dark/50 hover:bg-dark/25 transition-all duration-150 flex-1 font-light flex flex-col items-center justify-center text-3xl hover:text-accent1">
                <Drawer>
                  <DrawerTrigger className="w-full h-full p-10 md:p-6">
                    {dict.Landing_Page.post_carousels_header.form_button}
                  </DrawerTrigger>
                  <DrawerDescription className="hidden">
                    Formularz Kontaktowy
                  </DrawerDescription>
                  <DrawerTitle className="hidden">
                    Formularz Kontaktowy
                  </DrawerTitle>
                  <DrawerContent className="flex-center bg-dark rounded-none max-h-svh">
                    <div className="max-h-[600px]  md:max-h-svh overflow-auto">
                      <ContactForm
                        dict={dict}
                        sendTo={process.env.OFFERCONTACTDESTINATION}
                        oferta={"Landing"}
                        className="pt-6"
                      />
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
        </div> */}
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
        <div className="w-full h-fit relative flex flex-col gap-10">
          <SectionHeading
            wideParent
            top={dict.Landing_Page.youtube_shorts_01.header_top}
            bottom={dict.Landing_Page.youtube_shorts_01.header_bottom}
          />
          {/* Fourth Section - Standalone Photos */}
          {/* <SpiralPhotos4
            images={dict.universal_page_01.section_spiral_01.images}
          /> */}
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
              videoid="J3cjkamDN5g"
              style="width: 270px !important; height: 480px !important; margin: auto; aspectRatio: 9/16"
              height={0}
              width={0}
            />
          </div>
          {/* <InterchangeableImages
            interval={4000}
            mode="carousel"
            elements={[
              dict.universal_page_01.interchangeable_images_01.elements[4],
            ]}
            header={""}
          /> */}
        </div>

        {/* FAQ */}
        <div className="w-full h-fit flex flex-col gap-10 limited-width ">
          <SectionHeading top="FAQ" />
          <div className="flex flex-col gap-4 w-full ">
            <Accordion type="single" collapsible>
              {dict.Landing_Page.FAQ.map(
                (
                  { question, answer }: { question: string; answer: string },
                  i: number
                ) => (
                  <AccordionItem key={i} value={question}>
                    <AccordionTrigger className="hover:bg-darkerGray/20 h-fit !font-normal">
                      <div className="group footer-button-parent h-fit">
                        <div className="footer-button-secondary-container h-fit py-2">
                          <div className="footer-button-leftline group-hover:footer-hover-group-color h-fit"></div>
                          <span
                            className="footer-button-text !no-underline group-hover:!no-underline text-left h-fit !font-normal"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(question),
                            }}
                          />
                        </div>
                        <span className="footer-button-bottomline group-hover:footer-hover-group-color"></span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="padding-element">
                      <p
                        className="text-lg"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(answer),
                        }}
                      />
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
