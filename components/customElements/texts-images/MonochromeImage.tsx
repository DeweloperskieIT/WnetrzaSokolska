"use client";

import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

export interface MonochromeImageProps extends ImageProps {
  src: string;
  alt: string;
  className?: string;
  oneTime?: boolean;
}

export const MonochromeImage = ({
  src,
  alt,
  className,
  oneTime = false,
  ...props
}: MonochromeImageProps) => {
  const [isColored, setIsColored] = useState<boolean>(false);

  return (
    <Image
      onMouseEnter={() => setIsColored(true)}
      onTouchStart={() => setIsColored(true)}
      src={src}
      alt={alt}
      {...props}
      className={cn(
        "monochrome-hover",
        oneTime && isColored && "grayscale-0",
        className
      )}
    />
  );
};
