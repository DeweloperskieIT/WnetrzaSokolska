"use client";

import useFacebookPixelEvent from "@/lib/hooks/useFacebookPixelEvent";
import { cn } from "@/lib/utils";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

interface EmailContactProps {
  className?: string;
  email?: string;
  params?: string;
  fill?: string;
  firePixel?: boolean;
}

const EmailContact = ({
  className,
  email = "wnetrza@deweloperskie.pl",
  params = "Kontakt%20wnetrza.deweloperskie.pl",
  fill,
  firePixel = false,
}: EmailContactProps) => {
  const { fireEvent, resetFiring } = useFacebookPixelEvent({
    eventName: `Email Contact Clicked`,
    eventParams: { details: `${email} + ${params}` },
    runOnce: true, // Will only fire once unless reset
  });

  return (
    <a
      aria-label="Skontaktuj się z nami na Email"
      href={`mailto:${email}?${params}`}
      className={cn("header-icon-href", className)}
      onClick={() => firePixel && fireEvent()}
    >
      <AiOutlineMail className={cn("header-icon-graphic", fill)} />
    </a>
  );
};

export default EmailContact;
