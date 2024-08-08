"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import PrevNextButtons from "../customElements/buttons/PrevNextButtons";
import { ParagraphWithHeading } from "@/types/customTypes";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "down",
  duration = 5000,
  texts = null,
  textPlacement = "top",
  textBackground = "bg-websiteBackground2/50",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
  duration: number;
  texts?: ParagraphWithHeading[] | null;
  textPlacement?: "top" | "right" | "bottom" | "left";
  textBackground?: string;
}) => {
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
    }
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center max-h-svh",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      <div className="z-10 absolute w-full h-full flex justify-between items-center flex-col md:flex-row">
        <PrevNextButtons
          visible={true}
          handleClickBack={handlePrev}
          handleClickNext={handleNext}
        />
      </div>
      {areImagesLoaded && children}
      {texts?.length === images.length && (
        <div
          className={cn(
            "absolute z-20 p-4 md:p-8 flex gap-6",
            textBackground,
            orientation()
          )}
        >
          <h1 className={` font-bold text-4xl`}>
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
};
