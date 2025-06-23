"use client";

import useFacebookPixelEvent from "@/lib/hooks/useFacebookPixelEvent";
import { cn } from "@/lib/utils";
import React from "react";
import { FiYoutube } from "react-icons/fi";

interface YoutubeRedirectProps {
  className?: string;
  link?: string;
  fill?: string;
}

const YoutubeRedirect = ({
  className,
  link = "https://www.youtube.com/@Deweloperskie",
  fill,
}: YoutubeRedirectProps) => {
  const { fireEvent } = useFacebookPixelEvent({
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
          "header-icon-graphic text-darkerGray hover:text-accent1",
          fill
        )}
      />
    </a>
  );
};

export default YoutubeRedirect;
