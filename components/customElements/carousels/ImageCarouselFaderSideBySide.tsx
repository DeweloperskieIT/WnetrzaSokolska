"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ImageAltMergeParagraphWithHeading } from "@/types/customTypes";
import { cn } from "@/lib/utils";
import { animationStyle } from "@/types/customTypes";
import { useIsVisible } from "@/lib/hooks/useIsVisible";
import { PrevNextButtons } from "@/components/customElements/buttons";
import { array } from "zod";

export interface ImageCarouselFaderSideBySideProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  images: ImageAltMergeParagraphWithHeading[];
  textPlacement?: "top" | "right" | "bottom" | "left" | undefined;
  textBackground?: string;
  animations?: animationStyle;
  buttonsVisible?: boolean;
  stepsVisible?: boolean;
  autoplay?: boolean;
  duration?: number;
  dotsEnabled?: boolean;
  dotsEnabledOnlyVisible?: boolean;
  dotsClassName?: string;
  controlsDisabled?: boolean;
  sizes?: string;
}

export const ImageCarouselFaderSideBySide = ({
  className,
  images,
  textPlacement,
  textBackground = "bg-gradient-to-t from-dark via-dark/75 to-dark/0",
  stepsVisible = false,
  animations = {
    in: "animate-fade-element-in",
    out: "animate-fade-element-out",
  },
  buttonsVisible = false,
  autoplay = false,
  duration = 5000,
  dotsEnabled = false,
  dotsEnabledOnlyVisible,
  dotsClassName,
  controlsDisabled = false,
  sizes = "100vw",
  ...rest
}: ImageCarouselFaderSideBySideProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [arrayIndex, setArrayIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | undefined>();
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);
  const [textAnimationClass, setTextAnimationClass] = useState<string>("");

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(currentIndex);
  const currentArrayIndexRef = useRef(arrayIndex);

  const ref = useRef() as React.RefObject<HTMLDivElement>;
  const { isIntersecting, disconnectObserver } = useIsVisible(ref);

  const orientation = () => {
    switch (textPlacement) {
      case "top":
        return "w-full h-fit flex-col items-center";
      case "right":
        return "right-0 w-[400px] h-full flex-col items-center justify-start";
      case "left":
        return "left-0 w-[400px] h-full flex-col items-center justify-start";
      case "bottom":
        return `bottom-0 w-full h-fit md:mb-0 `;
      default:
        return "w-full h-fit flex-col items-center";
    }
  };

  const handleNext = () => {
    if (isAnimating) return;
    if (autoplay && !isIntersecting) return;

    setIsAnimating(true);
    setTextAnimationClass(animations.out);

    const newIndex = (currentIndexRef.current + 2) % (images.length / 2);
    const newArrayIndex =
      (currentArrayIndexRef.current + 1) % (images.length / 2);
    setPrevIndex(currentIndexRef.current);
    currentIndexRef.current = newIndex;
    currentArrayIndexRef.current = newArrayIndex;

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setArrayIndex(newArrayIndex);
      setTextAnimationClass(animations.in);

      setIsAnimating(false);
    }, 450);
  };

  const handlePrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTextAnimationClass(animations.out);

    const newIndex =
      (currentIndexRef.current - 2 + images.length) % images.length;
    const newArrayIndex =
      (currentArrayIndexRef.current + 1) % (images.length / 2);
    setPrevIndex(currentIndexRef.current);
    setArrayIndex((previous) => previous - (1 % images.length));
    currentIndexRef.current = newIndex;
    currentArrayIndexRef.current = newArrayIndex;

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setArrayIndex(newArrayIndex);
      setTextAnimationClass(animations.in);
      setIsAnimating(false);
    }, 450);
  };

  const handleManualChange = (index: number) => {
    if (isAnimating) return;
    if (index === currentIndexRef.current) return;

    setIsAnimating(true);
    setTextAnimationClass(animations.out);

    setPrevIndex(currentIndexRef.current);
    currentIndexRef.current = index;

    setTimeout(() => {
      setCurrentIndex(index);
      setTextAnimationClass(animations.in);
      setIsAnimating(false);
    }, 450);
  };

  useEffect(() => {
    if (isAutoplay && isIntersecting) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, duration);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoplay, duration, isIntersecting]);

  useEffect(() => {
    if (!isAutoplay) {
      disconnectObserver();
    }
  }, [disconnectObserver, isAutoplay]);

  const handleClickBack = () => {
    handlePrev();
    setIsAutoplay(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleClickNext = () => {
    handleNext();
    setIsAutoplay(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div
      className={cn(
        "relative w-full bg-websiteBackground2 max-h-svh h-svh !aspect-[1/1] md:!aspect-video min-h-[440px] md:min-h-[520px] lg:min-h-[660px]",
        className
      )}
      ref={ref as React.LegacyRef<HTMLDivElement>}
      {...rest}
    >
      <PrevNextButtons
        dotsEnabledOnlyVisible={dotsEnabledOnlyVisible}
        controlsDisabled={controlsDisabled}
        dotsClassName={dotsClassName}
        dotsEnabled={dotsEnabled}
        setCurrentIndex={handleManualChange}
        currentIndex={arrayIndex}
        visible={buttonsVisible}
        itemsLength={images.length / 2}
        handleClickBack={handleClickBack}
        handleClickNext={handleClickNext}
      />

      {textPlacement && (
        <div
          className={cn(
            "absolute w-full h-fit z-10 p-8 pb-10 md:p-12 flex justify-start",
            textBackground,
            orientation()
          )}
        >
          <div
            className={`relative transition-all duration-500 gap-4 flex flex-col h-fit ${textAnimationClass}`}
          >
            <h1
              className={cn(
                "carousel-text-heading",
                images[currentIndex].headingStyle
              )}
            >
              {images[currentIndex].heading}
            </h1>
            {images[currentIndex].paragraph && (
              <p
                className={cn(
                  "carousel-text-paragraph",
                  images[currentIndex].paragraphStyle
                )}
              >
                {images[currentIndex].paragraph}
              </p>
            )}
          </div>
        </div>
      )}

      {Array.from({ length: images.length / 2 }).map((_, i) => (
        <div
          className={cn(
            "absolute top-0 left-0 flex flex-col md:flex-row w-full h-full transition-all duration-500",
            i === currentIndex
              ? `opacity-100 z-[1]
               ${isAnimating && "opacity-10"}
              `
              : i === prevIndex
              ? "opacity-10 z-[0]"
              : `opacity-0`
          )}
          key={i}
        >
          <Image
            placeholder="blur"
            blurDataURL="/images/blur.png"
            loading="lazy"
            src={images[i].img}
            alt={images[i].alt}
            sizes={sizes}
            width={1366}
            height={768}
            className={cn(
              "flex-1 w-full h-1/2 md:w-1/2 md:h-full object-cover"
            )}
          />
          <Image
            placeholder="blur"
            blurDataURL="/images/blur.png"
            loading="lazy"
            src={images[i + 1].img}
            alt={images[i + 1].alt}
            sizes={sizes}
            width={1366}
            height={768}
            className={cn(
              "flex-1 w-full h-1/2 md:w-1/2 md:h-full object-cover"
            )}
          />
        </div>
      ))}

      {/* {images.map(({ img, alt }, i) => (
        <Image
          placeholder="blur"
          blurDataURL="/images/blur.png"
          loading="lazy"
          key={i}
          src={img}
          alt={alt}
          sizes={sizes}
          width={1366}
          height={768}
          className={cn(
            `w-full h-full object-cover transition-all duration-500`,
            i === currentIndex || i === currentIndex + 1
              ? "opacity-100 w-full h-1/2 md:w-1/2 md:h-full"
              : prevIndex && (i === prevIndex || i === prevIndex + 1)
              ? `opacity-10, ${isAnimating ? "size-0" : "size-0"}`
              : `opacity-0  ${isAnimating ? "size-0" : "size-0"}`

            //
            //i === currentIndex || i === currentIndex + 1
            //  ? "opacity-100 w-full h-1/2 md:w-1/2 md:h-full"
            //  : `opacity-0  ${isAnimating ? "size-0" : "size-0"}`
          )}
        />
      ))} */}
    </div>
  );
};
