"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ImageAltMergeParagraphWithHeading } from "@/types/customTypes";
import { cn } from "@/lib/utils";
import { animationStyle } from "@/types/customTypes";
import { useIsVisible } from "@/lib/hooks/useIsVisible";
import { PrevNextButtons } from "@/components/customElements/buttons";

export interface ImageCarouselFaderProps
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

export const ImageCarouselFader = ({
  className,
  images,
  textPlacement,
  textBackground,
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
}: ImageCarouselFaderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | undefined>();
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);
  const [textAnimationClass, setTextAnimationClass] = useState<string>("");

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(currentIndex);

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

    const newIndex = (currentIndexRef.current + 1) % images.length;
    setPrevIndex(currentIndexRef.current);
    currentIndexRef.current = newIndex;

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTextAnimationClass(animations.in);

      setTimeout(() => {
        setIsAnimating(false);
      }, 450);
    }, 450);
  };

  const handlePrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTextAnimationClass(animations.out);

    const newIndex =
      (currentIndexRef.current - 1 + images.length) % images.length;
    setPrevIndex(currentIndexRef.current);
    currentIndexRef.current = newIndex;

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTextAnimationClass(animations.in);

      setTimeout(() => {
        setIsAnimating(false);
      }, 450);
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

      setTimeout(() => {
        setIsAnimating(false);
      }, 450);
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
        "relative w-full bg-websiteBackground2 max-h-svh overflow-hidden h-full",
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
        currentIndex={currentIndex}
        visible={buttonsVisible}
        itemsLength={images.length}
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

      {images.map(({ img, alt }, i) => (
        <Image
          placeholder="blur"
          blurDataURL="/images/blur.png"
          loading="lazy"
          key={i}
          src={img}
          alt={alt}
          fill
          sizes={sizes}
          className={cn(
            `absolute inset-0 object-cover transition-all duration-500`,
            i === currentIndex && "opacity-100",
            i === prevIndex && "opacity-10",
            i !== currentIndex && "opacity-0"
          )}
        />
      ))}
    </div>
  );
};
