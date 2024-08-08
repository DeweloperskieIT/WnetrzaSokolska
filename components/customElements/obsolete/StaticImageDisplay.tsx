"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState, forwardRef } from "react";

interface StaticImageDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
  className?: string;
  orientation?: "vertical" | "horizontal";
}

const StaticImageDisplay = forwardRef<HTMLDivElement, StaticImageDisplayProps>(
  ({ images, className, orientation = "horizontal", ...rest }, ref) => {
    const [loading, setLoading] = useState(false);
    const [loadedImages, setLoadedImages] = useState<string[]>([]);

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

    if (loading) return null;

    let colCount = Math.ceil(images.length / 2);
    let colClass: string = `md:grid-cols-${colCount}`;
    if (orientation === "vertical") {
      colCount = images.length;
      colClass = `md:grid-cols-${colCount}`;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "h-full w-full max-h-svh relative grid grid-cols-1",
          colClass,
          className
        )}
        {...rest}
      >
        {loadedImages.map((image, idx) => (
          <div
            key={idx}
            className="w-full h-full flex items-center justify-center relative"
          >
            <Image
              src={image}
              alt={image}
              fill
              className="object-cover h-full w-full"
            />
          </div>
        ))}
      </div>
    );
  }
);

StaticImageDisplay.displayName = "StaticImageDisplay";

export default StaticImageDisplay;
