"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, forwardRef, ReactNode } from "react";
import PrevNextButtons from "@/components/customElements/buttons/PrevNextButtons";
import { ParagraphWithHeading } from "@/types/customTypes";

interface ImagesSliderBounceProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
  children?: ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
  duration?: number;
  texts?: ParagraphWithHeading[] | null;
  textPlacement?: "top" | "right" | "bottom" | "left";
  textBackground?: string;
  buttonsVisible?: boolean;
}

const ImagesSliderBounce = forwardRef<HTMLDivElement, ImagesSliderBounceProps>(
  (
    {
      images,
      children,
      overlay = false,
      overlayClassName,
      className,
      autoplay = false,
      direction = "down",
      duration = 5000,
      texts = null,
      textPlacement = "top",
      textBackground = "bg-websiteBackground2/50",
      buttonsVisible = false,
      ...rest
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loadedImages, setLoadedImages] = useState<string[]>([]);

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    };

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
    };

    useEffect(() => {
      loadImages();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadImages = () => {
      setLoading(true);
      const loadPromises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
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

    useEffect(() => {
      // autoplay
      let interval: any;
      if (autoplay) {
        interval = setInterval(() => {
          handleNext();
        }, duration);
      }

      return () => {
        clearInterval(interval);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);

    const slideVariants = {
      initial: {
        scale: 0,
        opacity: 0,
        rotateX: 45,
      },
      visible: {
        scale: 1,
        rotateX: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: [0.645, 0.045, 0.355, 1.0],
        },
      },
      upExit: {
        opacity: 1,
        y: "-150%",
        transition: {
          duration: 1,
        },
      },
      downExit: {
        opacity: 1,
        y: "150%",
        transition: {
          duration: 1,
        },
      },
    };

    const orientation = () => {
      switch (textPlacement) {
        case "top":
          return "w-full h-fit flex-col items-center";
        case "right":
          return "right-0 w-[400px] h-full flex-col items-center justify-start";
        case "left":
          return "left-0 w-[400px] h-full flex-col items-center justify-start";
        case "bottom":
          return "bottom-0 w-full h-fit flex-col items-center";
        default:
          return "w-full h-fit flex-col items-center";
      }
    };

    const areImagesLoaded = loadedImages.length > 0;

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden h-full w-full relative flex items-center justify-center max-h-svh",
          className
        )}
        style={{
          perspective: "1000px",
        }}
        {...rest}
      >
        <PrevNextButtons
          visible={buttonsVisible}
          handleClickBack={handlePrev}
          handleClickNext={handleNext}
        />

        {areImagesLoaded && children}

        {texts?.length === images.length && (
          <div
            className={cn(
              "absolute z-20 p-4 md:p-8 flex gap-6",
              textBackground,
              orientation()
            )}
          >
            <h1 className={`font-bold text-4xl`}>
              {texts[currentIndex].heading}
            </h1>
            <p className="text-2xl">{texts[currentIndex].paragraph}</p>
          </div>
        )}

        {areImagesLoaded && overlay && (
          <div
            className={cn("absolute inset-0 bg-dark/60 z-40", overlayClassName)}
          />
        )}

        {areImagesLoaded && (
          <div className="absolute bottom-0 pb-4 w-full flex-center flex-row gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => currentIndex != i && setCurrentIndex(i)}
                className={cn(
                  "rounded-full size-5 border-2 bg-transparent border-light transition-all hover:bg-dark cursor-pointer z-20",
                  i === currentIndex
                    ? "bg-light "
                    : "bg-transparent hover:bg-dark"
                )}
              ></div>
            ))}
          </div>
        )}

        {areImagesLoaded && (
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={loadedImages[currentIndex]}
              initial="initial"
              animate="visible"
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={slideVariants}
              className="image h-full w-full absolute inset-0 object-cover object-center"
            />
          </AnimatePresence>
        )}
      </div>
    );
  }
);

ImagesSliderBounce.displayName = "ImagesSliderBounce";

export default ImagesSliderBounce;
