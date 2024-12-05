"use client";

import useFacebookPixelEvent from "@/lib/hooks/useFacebookPixelEvent";
import { cn } from "@/lib/utils";
import React from "react";
import { FiFacebook } from "react-icons/fi";

export interface FacebookRedirectProps {
  className?: string;
  link?: string;
  fill?: string;
}

export const FacebookRedirect = ({
  className,
  link = "https://www.facebook.com/people/Wn%C4%99trza-Deweloperskie/61564077804403",
  fill,
}: FacebookRedirectProps) => {
  const { fireEvent, resetFiring } = useFacebookPixelEvent({
    eventName: `Facebook redirect clicked`,
    eventParams: { link },
    runOnce: true, // Will only fire once unless reset
  });

  return (
    <a
      aria-label="Odwiedź nasze konto na Facebook"
      href={link}
      target="_blank"
      className={cn("header-icon-href", className)}
      onClick={() => fireEvent()}
    >
      <FiFacebook
        className={cn(
          "header-icon-graphic hover:text-accent1 transition-all",
          fill
        )}
      />
    </a>
  );
};
