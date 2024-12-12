"use client";

import useFacebookPixelEvent from "@/lib/hooks/useFacebookPixelEvent";
import { cn } from "@/lib/utils";
import React from "react";
import { FaInstagram } from "react-icons/fa";
interface InstagramRedirectProps {
  className?: string;
  link?: string;
  fill?: string;
  firePixel?: boolean;
}

const InstagramRedirect = ({
  className,
  link = "https://www.instagram.com/deweloperskie.pl/",
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
      <FaInstagram
        className={cn(
          "header-icon-graphic text-darkerGray hover:text-accent1",
          fill
        )}
      />
    </a>
  );
};

export default InstagramRedirect;
