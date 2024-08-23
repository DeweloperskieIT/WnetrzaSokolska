import { cn } from "@/lib/utils";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export interface WhatsappContactProps {
  className?: string;
  number?: string;
}

export const WhatsappContact = ({
  className,
  number = "48666000999",
}: WhatsappContactProps) => {
  return (
    <a
      aria-label="Skontaktuj się z nami na whatsapp"
      href={`whatsapp://send?phone=${number}`}
      className={cn("header-icon-href", className)}
    >
      <FaWhatsapp className="header-icon-graphic" />
    </a>
  );
};
