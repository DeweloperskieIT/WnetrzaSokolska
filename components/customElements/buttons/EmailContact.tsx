"use client";

import useFacebookPixelEvent from "@/lib/hooks/useFacebookPixelEvent";
import { cn } from "@/lib/utils";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

export interface EmailContactProps {
  className?: string;
  email?: string;
  params?: string;
}

export const EmailContact = ({
  className,
  email = "wnetrza@deweloperskie.pl",
  params = "subject=Sokolska%20Towers",
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
      onClick={() => fireEvent()}
    >
      <AiOutlineMail className="header-icon-graphic" />
    </a>
  );
};
