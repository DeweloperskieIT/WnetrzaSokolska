"use client";

import useFacebookPixelEvent from "@/lib/hooks/useFacebookPixelEvent";
import { cn } from "@/lib/utils";
import React from "react";
import { FiInstagram } from "react-icons/fi";

export interface InstagramRedirectProps {
  className?: string;
  link?: string;
  fill?: string;
}

export const InstagramRedirect = ({
  className,
  link = "https://www.instagram.com/wnetrza.deweloperskie/",
  fill,
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
      onClick={() => fireEvent()}
    >
      <FiInstagram className={cn("header-icon-graphic", fill)} />
    </a>
  );
};
