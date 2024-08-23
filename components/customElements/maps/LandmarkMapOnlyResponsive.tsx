"use client";
import { forwardRef, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LocationPin } from "@/types/customTypes";

const demoPins: LocationPin[] = [
  {
    pinClass: "dewPrim",
    name: "Lokacja 1",
    description:
      "Lorem ipsum copy copy Lorem ipsum copy copy Lorem ipsum copy copy Lorem ipsum copy copy",
    hoverDescription: "Jestem krótkim opisem",
    left: 50,
    top: 50,
  },
  {
    pinClass: "dewPrim",
    name: "Lokacja 2",
    description:
      "Lorem ipsum copy copy Lorem ipsum copy copy Lorem ipsum copy copy Lorem ipsum copy copy",
    hoverDescription: "Jestem krótkim opisem",
    left: 100,
    top: 100,
  },
];

export interface LandmarkMapInfoProps
  extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  locations?: LocationPin[];
  originalDimensions?: [number, number];
}

export const LandmarkMapOnlyResponsive = forwardRef<
  HTMLDivElement,
  LandmarkMapInfoProps
>(
  (
    { src, locations, className, originalDimensions = [1000, 500], ...rest },
    ref
  ) => {
    const [imageScale, setImageScale] = useState<number>(-1);

    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
      const observer = new ResizeObserver((entries) => {
        if (entries && entries.length > 0) {
          const entry = entries[0];
          const containerWidth = entry.contentRect.width;
          const containerHeight = entry.contentRect.height;

          // Calculate image dimensions based on object-cover
          if (imageRef.current) {
            const widthScale = containerWidth / originalDimensions[0];
            const heightScale = containerHeight / originalDimensions[1];

            // Use the minimum scale to ensure the image fits within the container
            const scale = Math.min(widthScale, heightScale);

            setImageScale(scale);
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
      <div
        ref={ref}
        className={cn("bg-websiteBackground2 relative w-full", className)}
        style={{
          maxHeight: `${imageScale * originalDimensions[1]}px`,
          height: `${imageScale * originalDimensions[1]}px`,
        }}
        {...rest}
      >
        <Image
          ref={imageRef}
          src={src || ""}
          alt="mapa"
          fill
          className="absolute object-contain object-left-top !h-fit"
        />
        {locations?.map((location, index) => {
          const positions = [
            location.top * imageScale,
            location.left * imageScale,
          ];
          if (isNaN(positions[0])) return null;
          return (
            <Popover key={index}>
              <PopoverTrigger
                className={cn(
                  "absolute z-10 object-contain -translate-x-1/2 -translate-y-1/2 cursor-pointer p-2 whitespace-nowrap bg-websiteBackground2",
                  location.pinClass
                )}
                style={{
                  top: positions[0] | 0,
                  left: positions[1] | 0,
                }}
              >
                {location.name}
              </PopoverTrigger>
              <PopoverContent
                className={cn(
                  "bg-websiteBackground2 flex-center flex-col p-0 overflow-hidden border-2 rounded-none border-none min-w-[340px]",
                  location.descriptionClass
                )}
              >
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
                <div className="p-5 rounded-none">
                  {location.descriptionHeader && (
                    <h1>{location.descriptionHeader}</h1>
                  )}
                  {location.description &&
                  typeof location.description === "string" ? (
                    <p>{location.description}</p>
                  ) : (
                    location.description
                  )}
                </div>
              </PopoverContent>
            </Popover>
          );
        })}
      </div>
    );
  }
);

LandmarkMapOnlyResponsive.displayName = "LandmarkMapOnlyResponsive";
