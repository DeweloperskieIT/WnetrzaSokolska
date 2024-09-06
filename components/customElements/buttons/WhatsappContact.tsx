"use client";

import useFacebookPixelEvent from "@/lib/hooks/useFacebookPixelEvent";
import { cn } from "@/lib/utils";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export interface WhatsappContactProps {
  className?: string;
  number?: string;
  fill?: string;
}

export const WhatsappContact = ({
  className,
  number = "48666000999",
  fill,
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
      onClick={() => fireEvent()}
    >
      <FaWhatsapp className={cn("header-icon-graphic", fill)} />
    </a>
  );
};
