"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const demoPins: LocationPin[] = [
  {
    pinColor: "dewPrim",
    name: "Lokacja 1",
    description:
      "Lorem ipsum copy copy Lorem ipsum copy copy Lorem ipsum copy copy Lorem ipsum copy copy",
    hoverDescription: "Jestem krótkim opisem",
    left: 50,
    top: 50,
  },
  {
    pinColor: "dewPrim",
    name: "Lokacja 2",
    description:
      "Lorem ipsum copy copy Lorem ipsum copy copy Lorem ipsum copy copy Lorem ipsum copy copy",
    hoverDescription: "Jestem krótkim opisem",
    left: 100,
    top: 100,
  },
];

export type LocationPin = {
  pinColor: string;
  name: string;
  description: string;
  hoverDescription: string;
  top: number;
  left: number;
};

interface LandmarkMapInfoProps {
  src: string;
  locations: LocationPin[];
  classNameMap?: string;
  classNameInfo?: string;
  oneInfoAtATime?: boolean;
  originalDimensions?: [number, number];
}

const LandmarkMapInfo = ({
  src,
  locations,
  classNameMap = "",
  classNameInfo = "",
  oneInfoAtATime = false,
  originalDimensions = [1000, 500],
}: LandmarkMapInfoProps) => {
  const [showInfoIndexes, setShowInfoIndexes] = useState<number[]>([]);
  const [imageScale, setImageScale] = useState<number[]>([]);

  const handleShowInfo = (index: number) => {
    setShowInfoIndexes((prev) => {
      if (oneInfoAtATime) {
        return [index];
      }

      if (prev.includes(index)) {
        return prev.filter((i) => i !== index); // Remove the index
      } else {
        return [...prev, index]; // Add the index
      }
    });
  };

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (entries && entries.length > 0) {
        const entry = entries[0];
        const containerWidth = entry.contentRect.width;
        const containerHeight = entry.contentRect.height;

        // Calculate image dimensions based on object-cover
        if (imageRef.current) {
          const imageWidth = imageRef.current.naturalWidth;
          const imageHeight = imageRef.current.naturalHeight;

          let width = containerWidth;
          let height = containerHeight;

          if (containerWidth / containerHeight > imageWidth / imageHeight) {
            height = containerWidth * (imageHeight / imageWidth);
          } else {
            width = containerHeight * (imageWidth / imageHeight);
          }

          setImageScale([
            width / originalDimensions[0],
            height / originalDimensions[1],
          ]);
        }
      }
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [originalDimensions]);

  return (
    <>
      <div
        className={cn(
          "bg-websiteBackground2 relative overflow-visible object-cover h-[500px] md:h-[500px] md:min-w-[500px] md:w-[500px] xl:min-w-[750px] xl:h-[750px] w-full",
          classNameMap
        )}
      >
        <Image
          ref={imageRef}
          src={src}
          alt="mapa"
          fill
          className="absolute object-cover aspect-auto object-left-top"
        />
        {locations.map((location, index) => {
          const positions = [
            location.top * imageScale[1],
            location.left * imageScale[0],
          ];
          if (isNaN(positions[0])) return;
          return (
            <TooltipProvider key={index}>
              <Tooltip delayDuration={100}>
                <TooltipTrigger
                  className={cn("absolute z-10 object-contain")}
                  style={{
                    top: positions[0] | 0,
                    left: positions[1] | 0,
                  }}
                  onClick={() => handleShowInfo(index)}
                >
                  <span
                    className={`cursor-pointer p-2 rounded-full bg-${location.pinColor} whitespace-nowrap`}
                  >
                    {location.name}
                  </span>
                </TooltipTrigger>
                <TooltipContent className="tooltip border-2">
                  <p>{location.hoverDescription}</p>
                  <p>Kliknij aby dowiedzieć się więcej</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
      <div
        className={cn(
          "bg-websiteBackground2 p-4 flex flex-col items-start justify-center gap-6 w-full h-fit min-h-[300px]",
          classNameInfo
        )}
      >
        {locations.map((location, index) => {
          return (
            showInfoIndexes.includes(index) && (
              <div
                key={location.name}
                className={cn(
                  "flex flex-col gap-1 transition-transform animate-fade-element-in ease-out"
                  // showInfoIndexes.includes(index) ? "opacity-100 scale-y-100 h-fit" : "opacity-0 scale-y-0 h-0"
                )}
              >
                <h1 className="font-bold text-2xl text-dewPrim">
                  {location.name}
                </h1>
                <p className="text-xl text-light">{location.description}</p>
              </div>
            )
          );
        })}
      </div>
    </>
  );
};

export default LandmarkMapInfo;
