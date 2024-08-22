import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ImageCarouselFader from "@/components/customElements/carousels/ImageCarouselFader";
import { ImageAlt, ParagraphWithHeading } from "@/types/customTypes";

export type InterchangeableImagesSingleElement = {
  image: string;
  images?: ImageAlt[];
  header: string;
  paragraph: string;
};

interface InterchangeableImagesProps {
  className?: string;
  header?: React.ReactNode;
  elements: InterchangeableImagesSingleElement[];
  mode?: "single" | "carousel";
  interval?: number;
}

const InterchangeableImages = ({
  className,
  header,
  elements,
  mode = "single",
  interval = 5000,
}: InterchangeableImagesProps) => {
  return (
    <div className={cn("flex flex-col section-header-gap w-full", className)}>
      {header}

      {/* Vestige display for mobile */}
      {/* <div className={cn("flex md:hidden")}>
        <ImageCarouselFader
          dotsEnabled
          itemsLength={elements.length}
          dotsClassName={"md:hidden"}
          images={elements.reduce<string[]>((acc, element) => {
            acc.push(element.image!);
            return acc;
          }, [])}
          className="h-[600px]"
          textPlacement="bottom"
          texts={elements.reduce<ParagraphWithHeading[]>((acc, element) => {
            acc.push({
              heading: element.header,
              paragraph: element.paragraph,
            });
            return acc;
          }, [])}
          textBackground="bg-dark/30 pb-12"
        />
      </div> */}

      <div className=" flex-col flex-center gap-10 md:gap-0 w-full h-full limited-width self-center">
        {elements.map((e, i) => (
          <div
            key={i}
            className={cn(
              " flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 w-full",
              i % 2 ? "md:flex-row-reverse" : ""
            )}
          >
            <div
              className={cn(
                "padding-element flex flex-col basis-1/2 gap-2",
                i % 2 ? "md:pl-16" : "md:pr-16"
              )}
            >
              <span
                className={cn(
                  "w-full text-3xl font-bold text-light text-left",
                  i % 2 ? "md:text-left" : "md:text-right"
                )}
              >
                {e.header}
              </span>
              <span
                className={cn(
                  "w-full text-lg font-light text-light text-left max-w-[420px]",
                  i % 2 ? "md:text-left" : "md:text-right self-end"
                )}
              >
                {e.paragraph}
              </span>
            </div>
            {mode === "single" ? (
              <Image
                src={e.image!}
                alt="img"
                width={768}
                height={768}
                className="w-full h-full basis-1/2 object-cover xl:max-h-[768px]"
              />
            ) : (
              <div
                className={cn(
                  "w-full aspect-video md:aspect-auto  md:h-[460px] md:basis-1/2 ",
                  i % 2 ? "md:text-left" : "md:text-right self-end"
                )}
              >
                <ImageCarouselFader
                  sizes="(max-width: 768px) 100vw, 75vw"
                  className="object-contain"
                  dotsEnabledOnlyVisible
                  itemsLength={e.images!.length}
                  autoplay
                  duration={interval}
                  images={e.images!}
                  buttonsVisible={false}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterchangeableImages;
