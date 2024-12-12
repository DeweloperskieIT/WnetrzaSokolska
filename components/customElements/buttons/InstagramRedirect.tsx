"use client";

import useFacebookPixelEvent from "@/lib/hooks/useFacebookPixelEvent";
import { cn } from "@/lib/utils";
import React from "react";
import { ImInstagram } from "react-icons/im";
interface InstagramRedirectProps {
  className?: string;
  link?: string;
  fill?: string;
  firePixel?: boolean;
}

const InstagramRedirect = ({
  className,
  link = "https://www.instagram.com/wnetrza.deweloperskie/",
  fill,
  firePixel = true,
}: InstagramRedirectProps) => {
  const { fireEvent, resetFiring } = useFacebookPixelEvent({
    eventName: `Instagram redirect clicked`,
    eventParams: { link },
    runOnce: true, // Will only fire once unless reset
  });
  return (
    <a
      aria-label="Odwiedź nasze konto na Instagram"
      href={link}
      target="_blank"
      className={cn("header-icon-href", className)}
      onClick={() => firePixel && fireEvent()}
    >
      <ImInstagram
        className={cn("header-icon-graphic s  hover:fill-accent1", fill)}
      />
    </a>
  );
};

export default InstagramRedirect;
