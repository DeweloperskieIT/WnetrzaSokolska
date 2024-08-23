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
import {
  BreathingBackgroundImageData,
  FooterSectionData,
  IconsSectionData,
  InfoBlocksSectionData,
  LandingPageOffersSectionData,
} from "@/data/content/Landing";
import { YouTubeEmbed } from "@next/third-parties/google";

const Home = () => {
  return (
    <>
      {/* Sticky HEader main */}
      <MainStickyHeader />
      <div className="landing-page">
        {/* First Section - Breathing image */}
        <BreathingBackgroundImage {...BreathingBackgroundImageData} />
        {/* Second Section - Icons */}
        <IconsModule {...IconsSectionData} />
        {/* Eigth Section - Info text */}
        <InfoBlocks {...InfoBlocksSectionData} />
        {/* Eigth Section - Info text */}
        <LandingPageOffers {...LandingPageOffersSectionData} />
        {/* Section something */}
        <div className="w-full h-full relative limited-width flex flex-col gap-10">
          <SectionHeading top="PONADCZASOWY " bottom="BUDYNEK" />
          <YouTubeEmbed
            videoid="nGX38x34HK8"
            style="height: 100% !important; width: 100% !important; margin: auto;"
            height={0}
            width={0}
          />
        </div>
        {/* footer */}
        <Footer {...FooterSectionData} />
      </div>
    </>
  );
};

export default Home;
