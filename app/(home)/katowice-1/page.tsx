import { ImageCarouselFader } from "@/components/customElements/carousels";
import {
  Footer,
  FullscreenCarouselContainer,
  OfferStickyHeader,
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
  BigCarouselSectionCarouselFaderData,
  BigCarouselSectionHeading,
  IconsSectionData,
  RzutMieszkaniaComponentData,
  SpiralPhotosSectionData,
  VideoSectionData,
  InfoBlocksSectionData,
  InterchangeableImagesSectionData,
  TextPlusSingleVideoData,
  FooterSectionData,
} from "@/data/content/katowice-1";

const page = () => {
  return (
    <>
      {/* Header */}
      <OfferStickyHeader oferta={FooterSectionData.oferta} />
      <div className="landing-page">
        {/* Video */}
        <VideoBackground {...VideoSectionData}></VideoBackground>
        {/* First Section - Icons Module */}
        <IconsModule className="" {...IconsSectionData}></IconsModule>
        {/* Second Section - Carousel fader */}
        <FullscreenCarouselContainer>
          {BigCarouselSectionHeading}
          <ImageCarouselFader {...BigCarouselSectionCarouselFaderData} />
        </FullscreenCarouselContainer>
        {/* Third Section - Rzut Mieszkania */}
        <RzutMieszkania {...RzutMieszkaniaComponentData} />
        {/* Fourth Section - Standalone Photos */}
        <SpiralPhotos4 {...SpiralPhotosSectionData} />
        {/* Fifth Section - Interchangeable images */}
        <InterchangeableImages {...InterchangeableImagesSectionData} />
        {/* Sixth Section - Info with video */}
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
