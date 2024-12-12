"use client";

import useFacebookPixelEvent from "@/lib/hooks/useFacebookPixelEvent";
import { cn } from "@/lib/utils";
import React from "react";
import { FiYoutube } from "react-icons/fi";
import { TbBrandYoutubeFilled } from "react-icons/tb";
interface YoutubeRedirectProps {
  className?: string;
  link?: string;
  fill?: string;
}

const YoutubeRedirect = ({
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
      <TbBrandYoutubeFilled
        className={cn("header-icon-graphic  hover:fill-accent1", fill)}
      />
    </a>
  );
};

export default YoutubeRedirect;
