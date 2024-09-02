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
  RzutMieszkania,
  SpiralPhotos4,
  TextPlusSingleVideo,
} from "@/components/customElements/texts-images";
import { VideoBackground } from "@/components/customElements/video";
import { getDictionary, Locales } from "../../../dictionaries";

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
        oferta={dict.Katowice_02.Footer_1.oferta}
        dict={dict}
      />
      <div className="landing-page text-light">
        {/* Video */}
        <VideoBackground
          src="/katowice-1/s1/Opening-offer-showreel.mp4"
          className="aspect-[4/3] md:aspect-video max-h-[1024px] h-full md:-mb-10 lg:-mb-20 flex items-end"
        />
        {/* First Section - Icons Module */}
        <IconsModule
          className=""
          header={
            <SectionHeading
              className="w-2/3 md:w-full"
              top={dict.Katowice_02.icons_module_01.header_top}
              topClass="text-2xl md:text-[48px] font-bold"
              bottom={dict.Katowice_02.icons_module_01.header_bottom}
              bottomClass="text-xl md:text-[38px] font-bold md:font-normal leading-7"
            />
          }
          icons={dict.Katowice_02.icons_module_01.icons}
        />
        {/* Second Section - Carousel custom slider */}
        <FullscreenCarouselContainer className="h-full">
          <SectionHeading
            wideParent
            top={dict.Katowice_02.ImageCarouselCustom_1.header_top}
            bottom={dict.Katowice_02.ImageCarouselCustom_1.header_bottom}
          />
          <ImageCarouselCustom
            className=""
            textClassName="bg-gradient-to-t from-dark via-dark/75 to-dark/0"
            autoplay
            interval={4000}
            images={dict.Katowice_02.ImageCarouselCustom_1.images}
          />
        </FullscreenCarouselContainer>
        {/* Third Section - Rzut Mieszkania */}
        {/* Third Section - Rzut Mieszkania */}
        <RzutMieszkania
          locale={locale}
          cena={dict.Katowice_02.rzut_mieszkania_01.price}
          powierzchnia={dict.Katowice_02.rzut_mieszkania_01.area}
          img={dict.Katowice_02.rzut_mieszkania_01.images}
          header={
            <SectionHeading
              className=""
              top={dict.Katowice_02.rzut_mieszkania_01.header_top}
              bottom={dict.Katowice_02.rzut_mieszkania_01.header_bottom}
            />
          }
        />
        {/* Fourth Section - Standalone Photos */}
        <SpiralPhotos4 images={dict.Katowice_02.spiral_photos_01.images} />
        {/* Fifth Section - Interchangeable images */}
        <InterchangeableImages
          interval={4000}
          mode="carousel"
          elements={dict.Katowice_02.interchangeable_images_01.elements}
          header={
            <SectionHeading
              wideParent
              top={dict.Katowice_02.interchangeable_images_01.header_top}
              bottom={dict.Katowice_02.interchangeable_images_01.header_bottom}
            />
          }
        />
        {/* Sixth Section - Info with video */}
        <TextPlusSingleVideo
          src={dict.Katowice_02.text_plus_single_video_01.source}
          content={dict.Katowice_02.text_plus_single_video_01.content}
          header={
            <SectionHeading
              className=""
              top={dict.Katowice_02.text_plus_single_video_01.header_top}
              bottom={dict.Katowice_02.text_plus_single_video_01.header_bottom}
            />
          }
        />
        {/* Seventh Section - Info text */}
        <InfoBlocks
          info={dict.Katowice_02.InfoBlocks_1.info}
          header={
            <SectionHeading
              top={dict.Katowice_02.InfoBlocks_1.header_top}
              bottom={dict.Katowice_02.InfoBlocks_1.header_bottom}
            />
          }
        />
        {/* Eighth Section - Footer */}
        <Footer
          dict={dict}
          header={
            <SectionHeading
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
