"use client";

import { Locales } from "@/app/dictionaries";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { PrevNextButtons } from "../buttons";

export type RzutItem = {
  mobile: string;
  desktop: string;
  price: string;
  area: string;
  floor: string;
};

export interface RzutMieszkaniaCarouselProps {
  className?: string;
  items: RzutItem[];
  header?: React.ReactNode;
  locale?: Locales;
  customAccent?: string;
}

export const RzutMieszkaniaCarousel = ({
  className,
  items,
  header,
  locale = "pl",
  customAccent = "text-accent1",
}: RzutMieszkaniaCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (items.length === 0) return; // Safeguard against empty array
    setCurrentIndex(
      (previousIndex) => (previousIndex - 1 + items.length) % items.length
    );
  };

  const handleNext = () => {
    if (items.length === 0) return; // Safeguard against empty array
    setCurrentIndex((previousIndex) => (previousIndex + 1) % items.length);
  };

  return (
    <div
      className={cn(
        "flex section-header-gap flex-col limited-width w-full",
        className
      )}
    >
      {header}
      <div className="relative w-full flex flex-col gap-10">
        {items.map(({ mobile }, i) => (
          <Image
            key={i}
            src={mobile}
            alt="Rzut mieszkania na urządzeniu mobilnym"
            width={768}
            height={768}
            sizes="(max-width: 768px) 100vw, 10vw"
            className={cn(
              "block md:hidden min-h-[400px] max-h-[400px] h-full w-full object-contain px-10",
              currentIndex != i && "hidden"
            )}
          />
        ))}
        {items.map(({ mobile }, i) => (
          <Image
            key={i}
            src={items[currentIndex].desktop}
            alt="Rzut mieszkania na urządzeniu desktopowym"
            width={1080}
            height={1080}
            sizes="(min-width: 768px) 100vw, 10vw"
            className={cn(
              "hidden md:object-top md:block h-[500px] lg:h-[600px] xl:h-[700px] md max-h-[900px] w-full object-contain px-[100px]",
              currentIndex != i && "md:hidden"
            )}
          />
        ))}
        <PrevNextButtons
          handleClickNext={handleNext}
          handleClickBack={handlePrev}
          visible
          visibleButtonsClass="relative md:absolute h-fit md:h-full"
        />
        <div className="md:absolute md:left-0 md:bottom-0 relative text-2xl text-light flex flex-col gap-6 md:gap-5">
          <div className="flex flex-col md:gap-2">
            <span className={cn("text-xl font-bold", customAccent)}>
              {locale === "pl" && "POWIERZCHNIA / PIĘTRO"}
              {locale === "en" && "AREA / FLOOR"}
            </span>
            <span className="text-light font-light text-3xl md:text-3xl">
              {items[currentIndex].area} m<sup>2</sup>
              {` / `}
              {items[currentIndex].floor}p.
            </span>
          </div>
          <div className="flex flex-col md:gap-2">
            <span className={cn(" text-xl font-bold", customAccent)}>
              {locale === "pl" && "CENA"}
              {locale === "en" && "PRICE"}
            </span>
            <span className="text-light font-light text-3xl md:text-3xl">
              {items[currentIndex].price}
            </span>
          </div>

          {/* <Button
            className={cn(
              "md:hidden bg-accent1 font-bold !py-6 rounded-none p-4 w-full text-dark hover:bg-accent1/60"
            )}
            asChild
          >
            <a href="/documents/Katalog.pdf" download="Katalog.pdf">
              POBIERZ KATALOG
            </a>
          </Button> */}
        </div>
      </div>
    </div>
  );
};
