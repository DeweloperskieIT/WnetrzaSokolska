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
  return (
    <a
      aria-label="Skontaktuj się z nami na Email"
      href={`mailto:${email}?${params}`}
      className={cn("header-icon-href", className)}
    >
      <AiOutlineMail className="header-icon-graphic" />
    </a>
  );
};
