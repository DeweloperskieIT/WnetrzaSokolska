"use client";

import useFacebookPixelEvent from "@/lib/hooks/useFacebookPixelEvent";
import { cn } from "@/lib/utils";
import React from "react";
import { FiYoutube } from "react-icons/fi";

export interface YoutubeRedirectProps {
  className?: string;
  link?: string;
  fill?: string;
}

export const YoutubeRedirect = ({
  className,
  link = "https://www.youtube.com/@WnetrzaDeweloperskie",
  fill,
}: YoutubeRedirectProps) => {
  const { fireEvent, resetFiring } = useFacebookPixelEvent({
    eventName: `Youtube redirect clicked`,
    eventParams: { link },
    runOnce: true, // Will only fire once unless reset
  });
  return (
    <a
      aria-label="Odwiedź nasze konto na Youtube"
      href={link}
      target="_blank"
      className={cn("header-icon-href", className)}
      onClick={() => fireEvent()}
    >
      <FiYoutube
        className={cn(
          "header-icon-graphic hover:text-accent1 transition-all",
          fill
        )}
      />
    </a>
  );
};
