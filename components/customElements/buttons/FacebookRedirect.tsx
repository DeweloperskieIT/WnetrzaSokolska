"use client";

import useFacebookPixelEvent from "@/lib/hooks/useFacebookPixelEvent";
import { cn } from "@/lib/utils";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

interface FacebookRedirectProps {
  className?: string;
  link?: string;
  fill?: string;
  firePixel?: boolean;
}

const FacebookRedirect = ({
  className,
  link = "https://www.facebook.com/deweloperskiePL/",
  fill,
  firePixel = false,
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
      onClick={() => firePixel && fireEvent()}
    >
      <FaFacebookSquare
        className={cn(
          "header-icon-graphic text-darkerGray hover:text-accent1",
          fill
        )}
      />
    </a>
  );
};

export default FacebookRedirect;
