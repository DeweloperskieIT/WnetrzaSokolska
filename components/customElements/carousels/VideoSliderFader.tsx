"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useRef, forwardRef } from "react";
import PrevNextButtons from "./PrevNextButtons";
import { ParagraphWithHeading } from "@/types/customTypes";

interface VideoSliderFaderProps extends React.HTMLAttributes<HTMLDivElement> {
  videos: string[];
  children?: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
  texts?: ParagraphWithHeading[] | null;
  textPlacement?: "top" | "right" | "bottom" | "left";
  textBackground?: string;
}

const VideoSliderFader = forwardRef<HTMLDivElement, VideoSliderFaderProps>(
  (
    {
      videos,
      children,
      overlay = true,
      overlayClassName,
      className,
      autoplay = true,
      direction = "down",
      texts = null,
      textPlacement = "top",
      textBackground = "bg-websiteBackground2/50",
      ...rest
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loadedVideos, setLoadedVideos] = useState<string[]>([]);
    const videoRef = useRef<HTMLVideoElement>(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === videos.length ? 0 : prevIndex + 1
      );
    };

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? videos.length - 1 : prevIndex - 1
      );
    };

    useEffect(() => {
      loadVideos();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadVideos = () => {
      setLoading(true);
      const loadPromises = videos.map((video) => {
        return new Promise((resolve, reject) => {
          const vid = document.createElement("video");
          vid.src = video;
          vid.onloadeddata = () => resolve(video);
          vid.onerror = reject;
        });
      });

      Promise.all(loadPromises)
        .then((loadedVideos) => {
          setLoadedVideos(loadedVideos as string[]);
          setLoading(false);
        })
        .catch((error) => console.error("Failed to load videos", error));
    };

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }

      let interval: any;
      if (autoplay) {
        interval = setInterval(() => {
          handleNext();
        }, 5000);
      }

      return () => {
        clearInterval(interval);
      };
    }, [autoplay, currentIndex, handleNext]);

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
          return "";
      }
    };

    const areVideosLoaded = loadedVideos.length > 0;

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden h-full w-full relative flex items-center justify-center",
          className
        )}
        style={{
          perspective: "1000px",
        }}
        {...rest}
      >
        <div className="z-10 absolute w-full h-full flex justify-between items-center flex-col md:flex-row">
          <PrevNextButtons
            visible={true}
            handleClickBack={handlePrev}
            handleClickNext={handleNext}
          />
        </div>
        {texts?.length === videos.length && (
          <div
            className={cn(
              "absolute z-20 p-4 md:p-8 flex gap-6",
              textBackground,
              orientation()
            )}
          >
            <h1 className="font-bold text-4xl">
              {texts[currentIndex].heading}
            </h1>
            <p className="text-2xl">{texts[currentIndex].paragraph}</p>
          </div>
        )}
        {areVideosLoaded && overlay && (
          <div
            className={cn("absolute inset-0 bg-dark/60 z-40", overlayClassName)}
          />
        )}
        {areVideosLoaded && (
          <AnimatePresence>
            <motion.video
              key={currentIndex}
              ref={videoRef}
              src={loadedVideos[currentIndex]}
              initial="initial"
              animate="visible"
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={slideVariants}
              className="video h-full w-full absolute inset-0 object-cover object-center"
              autoPlay
              loop
              muted
            />
          </AnimatePresence>
        )}
      </div>
    );
  }
);

VideoSliderFader.displayName = "VideoSliderFader";

export default VideoSliderFader;
