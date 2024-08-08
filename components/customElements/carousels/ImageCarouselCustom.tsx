"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PrevNextButtons from "@/components/customElements/buttons/PrevNextButtons";
import { useIsVisible } from "@/lib/hooks/useIsVisible";

const placeholders: ImageTextItem[] = [
  {
    image: "/images/phimg1.jpg",
    text: "Image 1",
  },
  {
    image: "/images/phimg2.jpg",
    text: "Image 2",
  },
  {
    image: "/images/phimg3.jpg",
    text: "Image 3",
  },
  // Add more images as needed
];

export type ImageTextItem = {
  image: string;
  text: string;
};

interface ImageCarouselCustomProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  images?: ImageTextItem[];
  textClassName?: string;
  autoplay?: boolean;
  interval?: number;
}

const ImageCarouselCustom = ({
  className,
  images = placeholders,
  textClassName,
  autoplay = false,
  interval = 5000,
  ...rest
}: ImageCarouselCustomProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
    if (isAutoplay) {
      intervalRef.current = setInterval(() => {
        nextImage();
      }, interval);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [isAutoplay, interval]);

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
                src={item.image}
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
                  "absolute bottom-0 p-2 w-[95%] bg-websiteBackground1/60 text-center transition-all duration-500 text-light",
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
