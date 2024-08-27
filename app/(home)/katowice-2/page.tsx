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
import {
  BigCarouselSectionCarouselCustomData,
  BigCarouselSectionHeading,
  FooterSectionData,
  IconsSectionData,
  InfoBlocksSectionData,
  InterchangeableImagesSectionData,
  RzutMieszkaniaComponentData,
  SpiralPhotosSectionData,
  TextPlusSingleVideoData,
  VideoSectionData,
} from "@/data/content/katowice-2";

const page = () => {
  return (
    <>
      {/* Header */}
      <OfferStickyHeader oferta={FooterSectionData.oferta} />
      <div className="landing-page text-light">
        {/* Video */}
        <VideoBackground {...VideoSectionData} />
        {/* First Section - Icons Module */}
        <IconsModule className="" {...IconsSectionData} />
        {/* Second Section - Carousel custom slider */}
        <FullscreenCarouselContainer className="">
          {BigCarouselSectionHeading}
          <ImageCarouselCustom
            {...BigCarouselSectionCarouselCustomData}
            className=""
            textClassName="bg-gradient-to-t from-dark via-dark/75 to-dark/0"
          />
        </FullscreenCarouselContainer>
        {/* Third Section - Rzut Mieszkania */}
        <RzutMieszkania {...RzutMieszkaniaComponentData} />
        {/* Fourth Section - Standalone Photos */}
        <SpiralPhotos4 {...SpiralPhotosSectionData} />
        {/* Fifth Section - Interchangeable images */}
        <InterchangeableImages {...InterchangeableImagesSectionData} />
        {/* Sixth Section - Info with photo */}
        <TextPlusSingleVideo {...TextPlusSingleVideoData} />
        {/* Seventh Section - Info text */}
        <InfoBlocks {...InfoBlocksSectionData} />
        {/* Eighth Section - Footer */}
        <Footer {...FooterSectionData}></Footer>
      </div>
    </>
  );
};

export default page;
