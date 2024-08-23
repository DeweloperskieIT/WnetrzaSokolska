import { BreathingBackgroundImageProps } from "@/components/customElements/texts-images";

export const BreathingBackgroundImageData: BreathingBackgroundImageProps = {
  className: "bg-darkerGray/90 text-dark",
  bgSizes: ["100%", "70%"],
  interval: 5000,
  img: "/images/mainpage/deweloperskie-logo-corner-szare.webp",
  children: (
    <div className="limited-width flex flex-col md:gap-4 w-full h-full items-start justify-end pb-6 pt-20 md:py-40 md:pb-20">
      <h1 className="text-xl md:text-5xl">NASZĄ PASJĄ JEST JAKOŚĆ</h1>
      <h2 className="text-xl md:text-xl font-light max-w-[800px] text-left">
        Aranżacja własnego apartamentu jest jak kolacja: możesz spędzić wieczór
        przyrządzając ją samodzielnie, albo zaufać profesjonalistom i delektować
        się posiłkiem serwowanym przez szefa kuchni.
      </h2>
    </div>
  ),
};
