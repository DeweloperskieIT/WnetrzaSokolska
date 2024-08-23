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
        <VideoBackground
          {...VideoSectionData}
          className="aspect-[4/3] md:aspect-video max-h-[1024px] h-full md:-mb-10 lg:-mb-20 flex items-end"
        />
        {/* First Section - Icons Module */}
        <IconsModule className="" {...IconsSectionData}></IconsModule>
        {/* Second Section - Carousel fader */}
        <FullscreenCarouselContainer>
          {BigCarouselSectionHeading}
          <ImageCarouselFader
            {...BigCarouselSectionCarouselFaderData}
            // textBackground="bg-gradient-to-t from-dark via-dark/75  to-dark/0"
            // className="md:aspect-[16/9] max-h-[40svh] md:max-h-full h-svh md:h-full"
          />
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
