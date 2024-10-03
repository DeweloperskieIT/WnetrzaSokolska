import { ImageCarouselCustom } from "@/components/customElements/carousels";
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
  RzutMieszkaniaCarousel,
  SpiralPhotos4,
  TextPlusSingleVideo,
  TextPlusSingleVideoModular,
} from "@/components/customElements/texts-images";
import { VideoBackground } from "@/components/customElements/video";
import { getDictionary, Locales } from "../../../dictionaries";

const page = async ({
  params: { locale },
}: {
  params: { locale: Locales };
}) => {
  const dict = await getDictionary(locale);

  if (!dict) {
    return;
  }

  return (
    <>
      {/* Header */}
      <OfferStickyHeader
        oferta={dict.universal_page_01.Footer_1.oferta}
        dict={dict}
      />
      <div className="landing-page text-light">
        {/* Video */}
        <VideoBackground
          src="/universal/video/showreel.mp4"
          className="aspect-[4/3] md:aspect-video max-h-[1024px] h-full md:-mb-10 lg:-mb-20 flex items-end"
        />
        {/* First Section - Icons Module */}
        <IconsModule
          className=""
          header={
            <SectionHeading
              className="w-2/3 md:w-full"
              top={dict.universal_page_01.section_icons_01.header_top}
              topClass="text-2xl md:text-[48px] font-bold"
              bottom={dict.universal_page_01.section_icons_01.header_bottom}
              bottomClass="text-xl md:text-[38px] font-bold md:font-normal leading-7"
            />
          }
          icons={dict.universal_page_01.section_icons_01.icons}
        />
        {/* Second Section - Carousel custom slider */}
        <FullscreenCarouselContainer>
          <SectionHeading
            wideParent
            top={dict.universal_page_01.section_carousel_01.header_top}
            bottom={dict.universal_page_01.section_carousel_01.header_bottom}
          />
          <ImageCarouselCustom
            className=""
            autoplay
            interval={4000}
            images={dict.universal_page_01.section_carousel_01.images}
          />
        </FullscreenCarouselContainer>
        {/* Third Section - Rzut Mieszkania */}
        {/* Third Section - Rzut Mieszkania */}
        <RzutMieszkaniaCarousel
          locale={locale}
          items={dict.universal_page_01.section_rzut_carousel_01.items}
          header={
            <SectionHeading
              className=""
              top={dict.universal_page_01.section_rzut_carousel_01.header_top}
              bottom={
                dict.universal_page_01.section_rzut_carousel_01.header_bottom
              }
            />
          }
        />
        {/* Section 5 - Custom text 1 */}
        <PlainParagraphText
          texts={[dict.Katowice_03.custom_text_section_01.texts[0]]}
          header={
            <SectionHeading
              topClass="font-bold"
              top={dict.Katowice_03.custom_text_section_01.header_top}
              bottom={dict.Katowice_03.custom_text_section_01.header_bottom}
            />
          }
        >
          <IconsModule icons={dict.universal_page_01.custom_icons} />
          <PlainParagraphText
            masterClassName="!p-0"
            texts={[dict.Katowice_03.custom_text_section_01.texts[1]]}
          />
        </PlainParagraphText>
        {/* Fourth Section - Standalone Photos */}
        <SpiralPhotos4
          images={dict.universal_page_01.section_spiral_01.images}
        />
        {/* Second carousel*/}
        <FullscreenCarouselContainer>
          <SectionHeading
            wideParent
            top={dict.universal_page_01.section_carousel_02.header_top}
            bottom={dict.universal_page_01.section_carousel_02.header_bottom}
          />
          <ImageCarouselCustom
            className=""
            autoplay
            interval={4000}
            images={dict.universal_page_01.section_carousel_02.images}
          />
        </FullscreenCarouselContainer>
        {/* Fifth Section - Interchangeable images */}
        <InterchangeableImages
          interval={4000}
          mode="carousel"
          elements={dict.universal_page_01.interchangeable_images_01.elements}
          header={
            <SectionHeading
              wideParent
              top={dict.universal_page_01.interchangeable_images_01.header_top}
              bottom={
                dict.universal_page_01.interchangeable_images_01.header_bottom
              }
            />
          }
        />
        {/* Sixth Section - Info with video */}
        <TextPlusSingleVideoModular
          src={dict.universal_page_01.section_text_video_01.source}
          content={dict.universal_page_01.section_text_video_01.content}
          header={
            <SectionHeading
              className=""
              topClass="font-bold"
              top={dict.universal_page_01.section_text_video_01.header_top}
              bottom={
                dict.universal_page_01.section_text_video_01.header_bottom
              }
            />
          }
        />
        {/* Seventh Section - Info text */}
        <InfoBlocks
          info={dict.universal_page_01.section_info_01.info}
          header={
            <SectionHeading
              top={dict.universal_page_01.section_info_01.header_top}
              bottom={dict.universal_page_01.section_info_01.header_bottom}
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
              top={dict.Katowice_02.Footer_1.header_top}
              bottom={dict.Katowice_02.Footer_1.header_bottom}
            />
          }
          oferta="Katowice 2"
        />
      </div>
    </>
  );
};

export default page;
