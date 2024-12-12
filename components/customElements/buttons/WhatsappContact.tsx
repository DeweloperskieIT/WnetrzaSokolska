"use client";

import useFacebookPixelEvent from "@/lib/hooks/useFacebookPixelEvent";
import { cn } from "@/lib/utils";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsappContactProps {
  className?: string;
  number?: string;
  fill?: string;
  firePixel?: boolean;
}

const WhatsappContact = ({
  className,
  number = "48666000999",
  fill,
  firePixel = false,
}: WhatsappContactProps) => {
  const { fireEvent, resetFiring } = useFacebookPixelEvent({
    eventName: `Whatsapp contact clicked`,
    eventParams: { Number: number },
    runOnce: true, // Will only fire once unless reset
  });
  return (
    <a
      aria-label="Skontaktuj się z nami na whatsapp"
      href={`whatsapp://send?phone=${number}`}
      className={cn("header-icon-href", className)}
      onClick={() => firePixel && fireEvent()}
    >
      <FaWhatsapp
        className={cn(
          "header-icon-graphic text-darkerGray hover:text-accent1",
          fill
        )}
      />
    </a>
  );
};

export default WhatsappContact;
