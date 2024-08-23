import { SectionHeading } from "@/components/customElements/custom-ui";
import { TextPlusSingleVideoProps } from "@/components/customElements/texts-images";

export const TextPlusSingleVideoData: TextPlusSingleVideoProps = {
  src: "/apartament126/s7/360V2.mp4",
  content: (
    <div className="flex justify-center flex-col gap-10 text-light lg:text-right text-xl">
      <span className="">
        <span className="text-accent1 font-bold">3500</span> - przynajmniej tyle
        mieszkań powstało i jeszcze powstanie w katowickiej Strefie Kultury do
        2028 roku.
      </span>
      <span>
        Postaw na unikatową lokalizację, w otoczeniu której nie powstaną tysiące
        nowych mieszkań, z którymi będziesz musiał konkurować ceną w momencie
        sprzedaży nieruchomości na rynku wtórnym.
      </span>
      <span>
        Wybierz narożny apartament na XV piętrze ponadczasowego budynku&nbsp;
        <span className="text-accent1 font-bold">Sokolska Towers.</span>
      </span>
    </div>
  ),
  header: (
    <SectionHeading
      className=""
      top="LIMITOWANY LUKSUS"
      bottom="W SERCU MIASTA"
    />
  ),
};
