"use client";

import useFacebookPixelEvent from "@/lib/hooks/useFacebookPixelEvent";
import { cn } from "@/lib/utils";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

interface LinkedInRedirectProps {
  className?: string;
  link?: string;
  fill?: string;
}

const LinkedInRedirect = ({
  className,
  link = "https://www.linkedin.com/showcase/po%C5%BCyczki-deweloperskie",
  fill,
}: LinkedInRedirectProps) => {
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
      <FaLinkedin
        className={cn("header-icon-graphic hover:fill-accent1", fill)}
      />
    </a>
  );
};

export default LinkedInRedirect;
