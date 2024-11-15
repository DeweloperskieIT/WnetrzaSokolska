import { ImageCarouselFader } from "@/components/customElements/carousels";
import {
  Footer,
  FullscreenCarouselContainer,
  OfferStickyHeader,
  SectionHeading,
} from "@/components/customElements/custom-ui";
import {
  IconsModule,
  InfoBlocks,
  InterchangeableImages,
  PlainParagraphText,
  RzutMieszkania,
  SpiralPhotos4,
  TextPlusSingleVideo,
  TextPlusSingleVideoModular,
} from "@/components/customElements/texts-images";
import { VideoBackground } from "@/components/customElements/video";
import { getDictionary, Locales } from "@/app/dictionaries";
import { ImageCarouselFaderSideBySide } from "@/components/customElements/carousels/ImageCarouselFaderSideBySide";

const page = async ({
  params: { locale },
}: {
  params: { locale: Locales };
}) => {
  const dict = await getDictionary(locale);
  return (
    <>
      {/* Header */}
      <OfferStickyHeader
        oferta={dict.Katowice_03.Footer_1.oferta}
        dict={dict}
        customAccent="text-accent2"
      />
      <div className="landing-page">
        {/* Video */}
        <VideoBackground
          src="/universal/video/showreel-old.mp4"
          className="aspect-[4/3] md:aspect-video max-h-[1024px] h-full md:-mb-10 lg:-mb-20 flex items-end"
        />
        {/* Section 1 - Icons Module */}
        <IconsModule
          className=""
          header={
            <SectionHeading
              className="w-2/3 md:w-full"
              top={dict.Katowice_03.icons_module_01.header_top}
              topClass="text-2xl md:text-6xl font-bold text-accent2 pb-2"
              bottom={dict.Katowice_03.icons_module_01.header_bottom}
              bottomClass="text-xl md:!text-4xl font-bold md:font-normal"
            />
          }
          icons={dict.Katowice_03.icons_module_01.icons}
        />
        {/* Section 2 - Carousel fader */}
        <FullscreenCarouselContainer>
          <SectionHeading
            wideParent
            top={dict.Katowice_03.image_carousel_fader_01.header_top}
            topClass="text-accent2 font-bold md:mb-2"
            bottom={dict.Katowice_03.image_carousel_fader_01.header_bottom}
          />
          <ImageCarouselFader
            autoplay={true}
            duration={6000}
            dotsEnabledOnlyVisible={true}
            // textBackground="bg-gradient-to-t from-dark via-dark/75 to-dark/0"
            className="aspect-[16/9] max-h-[svh]"
            images={dict.Katowice_03.image_carousel_fader_01.images}
          />
        </FullscreenCarouselContainer>
        {/* Section 3 - Interchangeable images */}
        <InterchangeableImages
          interval={4000}
          mode="carousel"
          // elements={dict.universal_page_01.interchangeable_images_01.elements}
          elements={[
            dict.universal_page_01.interchangeable_images_01.elements[2],
            dict.universal_page_01.interchangeable_images_01.elements[3],
            dict.universal_page_01.interchangeable_images_01.elements[4],
            dict.universal_page_01.interchangeable_images_01.elements[1],
            dict.universal_page_01.interchangeable_images_01.elements[0],
          ]}
          header={
            <SectionHeading
              wideParent
              topClass="text-accent2 font-bold"
              top={dict.Katowice_03.interchangeable_header.header_top}
              bottom={dict.Katowice_03.interchangeable_header.header_bottom}
            />
          }
        />
        {/* Section 4 - Carousel fader again */}
        <FullscreenCarouselContainer>
          <SectionHeading
            wideParent
            top={dict.Katowice_03.image_carousel_fader_02.header_top}
            topClass="text-accent2 font-bold md:mb-2"
            bottom={dict.Katowice_03.image_carousel_fader_02.header_bottom}
          />
          <ImageCarouselFader
            autoplay={true}
            duration={6000}
            dotsEnabledOnlyVisible={true}
            className="aspect-[16/9] max-h-[svh]"
            images={dict.Katowice_03.image_carousel_fader_02.images}
          />
        </FullscreenCarouselContainer>

        {/* Section 5 - Custom text 1 */}
        <PlainParagraphText
          texts={[dict.Katowice_03.custom_text_section_01.texts[0]]}
          header={
            <SectionHeading
              topClass="text-accent2 font-bold"
              top={dict.Katowice_03.custom_text_section_01.header_top}
              bottom={dict.Katowice_03.custom_text_section_01.header_bottom}
            />
          }
        >
          <IconsModule icons={dict.Katowice_03.custom_text_section_01.icons} />
          <PlainParagraphText
            texts={[dict.Katowice_03.custom_text_section_01.texts[1]]}
          />
        </PlainParagraphText>
        {/* Section 6 - new side by side carousel */}
        <FullscreenCarouselContainer>
          <ImageCarouselFaderSideBySide
            dotsEnabledOnlyVisible
            images={dict.Katowice_03.image_carousel_fader_sidebyside_01.images}
          />
        </FullscreenCarouselContainer>
        {/* Section 7 - Rzut Mieszkania */}
        <RzutMieszkania
          customAccent="text-accent2"
          locale={locale}
          cena={dict.Katowice_03.rzut_mieszkania_01.price}
          powierzchnia={dict.Katowice_03.rzut_mieszkania_01.area}
          img={dict.Katowice_03.rzut_mieszkania_01.images}
          floor={dict.Katowice_03.rzut_mieszkania_01.floor}
          header={
            <SectionHeading
              className=""
              topClass="text-accent2 pb-2 font-bold"
              top={dict.Katowice_03.rzut_mieszkania_01.header_top}
              bottom={dict.Katowice_03.rzut_mieszkania_01.header_bottom}
            />
          }
        />
        <PlainParagraphText
          texts={dict.Katowice_03.rzut_mieszkania_01.texts}
          className=" md:-mt-16"
        />
        {/* Section 8 - Info with video */}
        <TextPlusSingleVideoModular
          src={dict.Katowice_03.text_plus_single_video_01.source}
          content={dict.Katowice_03.text_plus_single_video_01.content}
          customAccent="text-accent2"
          header={
            <SectionHeading
              className=""
              topClass="text-accent2 font-bold"
              top={dict.Katowice_03.text_plus_single_video_01.header_top}
              bottom={dict.Katowice_03.text_plus_single_video_01.header_bottom}
            />
          }
        />
        {/* Section 9 - Info Texts */}
        <InfoBlocks
          info={dict.Katowice_03.InfoBlocks_1.info}
          backgroundClass="bg-transparent md:items-start p-4 md:p-8 w-full"
          itemSpacing="gap-6"
          headerClass="font-normal md:pt-2"
          header={
            <SectionHeading
              topClass="text-accent2 font-bold"
              top={dict.Katowice_03.InfoBlocks_1.header_top}
              bottom={dict.Katowice_03.InfoBlocks_1.header_bottom}
            />
          }
        />
        {/* Eighth Section - Footer */}
        <Footer
          dict={dict}
          header={
            <SectionHeading
              wideParent
              className="gap-3 md:gap-2 md:flex hidden"
              topClass="text-accent2 font-bold"
              top={dict.Katowice_03.Footer_1.header_top}
              bottom={dict.Katowice_03.Footer_1.header_bottom}
            />
          }
          oferta={dict.Katowice_03.Footer_1.oferta}
        />
      </div>
    </>
  );
};

export default page;
