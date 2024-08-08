"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../custom-ui/popover";

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
  img?: string;
  description: string;
  descriptionHeader?: string;
  hoverDescription?: string;
  top: number;
  left: number;
};

interface LandmarkMapInfoProps {
  src?: string;
  locations: LocationPin[];
  className?: string;
  originalDimensions?: [number, number];
}

const LandmarkMapOnly = ({
  src = "/images/kat_map_ph.jpg",
  locations,
  className,
  originalDimensions = [1000, 500],
}: LandmarkMapInfoProps) => {
  const [imageScale, setImageScale] = useState<number[]>([]);

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

          // console.log(imageScale);

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
  }, [, originalDimensions]);

  return (
    <div
      className={cn(
        "bg-websiteBackground2 relative w-full h-2/3 max-h-[768px]",
        className
      )}
    >
      <Image
        ref={imageRef}
        src={src}
        alt="mapa"
        fill
        className="absolute object-cover object-left-top h-2/3 max-h-[768px]"
      />
      {locations.map((location, index) => {
        const positions = [
          location.top * imageScale[1],
          location.left * imageScale[0],
        ];
        if (isNaN(positions[0])) return;
        return (
          <Popover key={index}>
            <PopoverTrigger
              className={cn("absolute z-10 object-contain hover:animate-pulse")}
              style={{
                top: positions[0] | 0,
                left: positions[1] | 0,
              }}
            >
              <span
                className={`cursor-pointer p-2 rounded-full bg-${location.pinColor} whitespace-nowrap`}
              >
                {location.name}
              </span>
            </PopoverTrigger>
            <PopoverContent className="bg-websiteBackground2 border-2">
              {location.img && (
                <div className="max-h-[200px] min-h-[200px] h-full w-full overflow-hidden relative">
                  <Image
                    src={location.img}
                    alt={location.img}
                    fill
                    className="inset-0 absolute object-cover w-full object-center h-full"
                  />
                </div>
              )}
              <div className="p-2">
                {location.descriptionHeader && (
                  <h1>{location.descriptionHeader}</h1>
                )}
                {location.description && <p>{location.description}</p>}
              </div>
            </PopoverContent>
          </Popover>
        );
      })}
    </div>
  );
};

export default LandmarkMapOnly;
