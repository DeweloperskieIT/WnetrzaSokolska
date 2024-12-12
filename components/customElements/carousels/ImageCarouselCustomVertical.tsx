"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "@/lib/hooks/useIsVisible";
import { ImageTextItem } from "./ImageCarouselCustom";
import PrevNextButtons from "../buttons/PrevNextButtons";

interface ImageCarouselCustomVerticalProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  images: ImageTextItem[];
  textClassName?: string;
  autoplay?: boolean;
  interval?: number;
}

const ImageCarouselCustomVertical = ({
  className,
  images,
  textClassName,
  autoplay = false,
  interval = 5000,
  ...rest
}: ImageCarouselCustomVerticalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const ref = useRef() as React.RefObject<HTMLDivElement>;

  const { isIntersecting, disconnectObserver } = useIsVisible(ref);

  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // autoplay
    if (isAutoplay && isIntersecting) {
      intervalRef.current = setInterval(() => {
        nextImage();
      }, interval);
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
  }, [isAutoplay, interval, isIntersecting]);

  useEffect(() => {
    if (!isAutoplay) {
      disconnectObserver();
    }
  }, [disconnectObserver, isAutoplay]);

  const handleClickBack = () => {
    prevImage();
    setIsAutoplay(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleClickNext = () => {
    nextImage();
    setIsAutoplay(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full transition-all duration-500 max-h-svh",
        className
      )}
      {...rest}
    >
      <PrevNextButtons
        noHoverGradient
        handleHoverBack={setLeftHover}
        handleHoverNext={setRightHover}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        itemsLength={images.length}
        handleClickBack={handleClickBack}
        handleClickNext={handleClickNext}
        dotsClassName={""}
      />
      <div className="relative flex justify-center items-center h-full md:translate-y-0 min-h-[300px] translate-x-[12.5%] max-h-svh xl:max-h-[1024px]">
        <div
          className={cn("flex transition-all duration-500 h-full")}
          style={{
            transform: `translateX(-${currentIndex * 75}%)`,
          }}
        >
          {images.map((item, i) => (
            <div
              key={i}
              className={cn(
                "relative flex-shrink-0 h-auto flex flex-col items-center justify-center md:justify-end"
              )}
              style={{ width: `75%` }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={1920}
                height={768}
                sizes="90vw"
                className={cn(
                  " object-cover block w-[95%] duration-500 transition-all h-full",
                  i === currentIndex ? "grayscale-0 " : "grayscale  h-1/2",
                  i === currentIndex - 1 && leftHover && "grayscale-0 h-full",
                  i === currentIndex + 1 && rightHover && "grayscale-0 h-full"
                )}
              />
              <h1
                className={cn(
                  "absolute bottom-0 p-4 w-[100%] transition-all duration-500 carousel-text-heading",
                  textClassName,
                  i === currentIndex ? "opacity-100" : "opacity-0"
                )}
              >
                {item.text}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* Preload the next image off-screen */}
      <div style={{ display: "none" }}>
        <Image
          src={images[(currentIndex + 1) % images.length].image}
          alt={images[(currentIndex + 1) % images.length].alt}
          width={1920}
          height={768}
          priority
        />
      </div>
    </div>
  );
};

export default ImageCarouselCustomVertical;
