"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PrevNextButtons from "@/components/customElements/buttons/PrevNextButtons";
import { useIsVisible } from "@/lib/hooks/useIsVisible";
import { Skeleton } from "@/components/ui/skeleton";

export type ImageTextItem = {
  image: string;
  text: string;
};

interface ImageCarouselCustomProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  images: ImageTextItem[];
  textClassName?: string;
  autoplay?: boolean;
  interval?: number;
}

const ImageCarouselCustom = ({
  className,
  images,
  textClassName,
  autoplay = false,
  interval = 5000,
  ...rest
}: ImageCarouselCustomProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const ref = useRef() as React.RefObject<HTMLDivElement>;

  const { isIntersecting, disconnectObserver } = useIsVisible(ref);

  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  useEffect(() => {
    loadImages(images);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadImages = (images: ImageTextItem[]) => {
    setLoading(true);
    const loadPromises = images.map(({ image, text }) => {
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

  if (loading) {
    return (
      <div className="w-full h-full">
        <Skeleton className="relative w-full md:h-[768px] h-[512px]" />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full overflow-clip transition-all duration-500 md:h-[768px] h-[512px]",
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
      <div className="relative flex justify-center items-center h-full  md:translate-y-0  translate-x-[10%]">
        <div
          className={cn("flex transition-all duration-500 h-full")}
          style={{
            transform: `translateX(-${currentIndex * 80}%)`,
          }}
        >
          {images.map((item, i) => (
            <div
              key={i}
              className="relative h-full flex-shrink-0 flex flex-col items-center justify-start md:justify-end"
              style={{ width: `80%` }}
            >
              <Image
                src={loadedImages[i]}
                alt={`Image ${i + 1}`}
                width={1920}
                height={768}
                className={cn(
                  "object-cover w-[95%] h-full duration-500",
                  i === currentIndex ? "grayscale-0" : "grayscale",
                  i === currentIndex - 1 && leftHover && "grayscale-0 !h-[75%]",
                  i === currentIndex + 1 && rightHover && "grayscale-0 !h-[75%]"
                )}
                style={{
                  height: i === currentIndex ? "100%" : "50%",
                }}
              />
              <p
                className={cn(
                  "absolute bottom-0 p-2 w-[95%] font-bold text-center transition-all duration-500 text-light",
                  textClassName,
                  i === currentIndex ? "opacity-100" : "opacity-0"
                )}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselCustom;
