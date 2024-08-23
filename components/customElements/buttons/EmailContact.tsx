import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

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
      <Image
        src={"/images/mainpage/talkwhite.png"}
        alt="Contact Email"
        width={40}
        height={40}
        className="header-icon-graphic"
      />
    </a>
  );
};
