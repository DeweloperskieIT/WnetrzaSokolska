"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import PrevNextButtons from "@/components/customElements/buttons/PrevNextButtons"; // Assuming the PrevNextButtons component is in the same directory
import { ParagraphWithHeading } from "@/types/customTypes";
import { cn } from "@/lib/utils";
import { animationStyle } from "@/types/customTypes";
import { Skeleton } from "../../ui/skeleton";
import { useIsVisible } from "@/lib/hooks/useIsVisible";

interface ImageCarouselFaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  images: string[];
  texts?: ParagraphWithHeading[] | null;
  textPlacement?: "top" | "right" | "bottom" | "left";
  textBackground?: string;
  animations?: animationStyle;
  buttonsVisible?: boolean;
  stepsVisible?: boolean;
  autoplay?: boolean;
  duration?: number;
  itemsLength?: number;
  dotsEnabled?: boolean;
  dotsEnabledOnlyVisible?: boolean;
  dotsClassName?: string;
  controlsDisabled?: boolean;
}

const ImageCarouselFader = ({
  className,
  images,
  texts,
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
  itemsLength = 0,
  dotsEnabled = false,
  dotsEnabledOnlyVisible,
  dotsClassName,
  controlsDisabled = false,
  ...rest
}: ImageCarouselFaderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    loadImages(images);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadImages = (images: string[]) => {
    setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new window.Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages as string[]);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };

  const handleNext = () => {
    if (isAnimating) {
      return;
    }
    if (autoplay && !isIntersecting) {
      return;
    }
    setIsAnimating(true);
    setFadeClass(animations.out);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFadeClass(animations.in);
      setTimeout(() => {
        setIsAnimating(false);
      }, 450);
    }, 450); // Match the animation duration
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFadeClass(animations.out);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setFadeClass(animations.in);
      setTimeout(() => {
        setIsAnimating(false);
      }, 450);
    }, 450); // Match the animation duration
  };

  const handleManualChange = (index: number) => {
    if (isAnimating) return;
    if (index === currentIndex) return;
    setIsAnimating(true);
    setFadeClass(animations.out);
    setTimeout(() => {
      setCurrentIndex(index);
      setFadeClass(animations.in);
      setTimeout(() => {
        setIsAnimating(false);
      }, 450);
    }, 450); // Match the an
  };

  useEffect(() => {
    // autoplay
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
    <>
      {loading && (
        <Skeleton className="relative w-full md:h-[768px] h-[512px]" />
      )}

      <div
        className={cn(
          "relative w-full h-full bg-websiteBackground2 max-h-svh overflow-hidden",
          className,
          loading && "opacity-0 !size-0"
        )}
        ref={ref as React.LegacyRef<HTMLDivElement>}
        {...rest}
      >
        {loading ? (
          <Skeleton className="relative w-full md:h-[768px] h-[512px]" />
        ) : (
          <>
            <PrevNextButtons
              dotsEnabledOnlyVisible={dotsEnabledOnlyVisible}
              controlsDisabled={controlsDisabled}
              dotsClassName={dotsClassName}
              dotsEnabled={dotsEnabled}
              setCurrentIndex={handleManualChange}
              currentIndex={currentIndex}
              visible={buttonsVisible}
              itemsLength={itemsLength}
              handleClickBack={handleClickBack}
              handleClickNext={handleClickNext}
            />

            {texts?.length === images.length && (
              <div
                className={cn(
                  "absolute w-full h-fit z-10 p-8 pb-10 md:p-12 flex justify-start ${fadeClass} transition-all duration-500",
                  textBackground,
                  orientation()
                )}
              >
                <div
                  className={`${fadeClass} relative transition-all duration-500 gap-4 flex flex-col h-fit`}
                >
                  <h1
                    className={cn(
                      "carousel-text-heading",
                      texts[currentIndex].headingStyle
                    )}
                  >
                    {texts[currentIndex].heading}
                  </h1>
                  {texts[currentIndex].paragraph && (
                    <p
                      className={cn(
                        "carousel-text-paragraph",
                        texts[currentIndex].paragraphStyle
                      )}
                    >
                      {texts[currentIndex].paragraph}
                    </p>
                  )}
                </div>
              </div>
            )}

            {loadedImages.length > 0 && (
              <Image
                key={currentIndex}
                src={loadedImages[currentIndex]}
                alt={loadedImages[currentIndex]}
                fill
                sizes="(max-width: 768px) 512px, (max-width: 1280px) 768px"
                className={`absolute inset-0 object-cover ${fadeClass} transition-all duration-500`}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

ImageCarouselFader.displayName = "ImageCarouselFader";

export default ImageCarouselFader;
