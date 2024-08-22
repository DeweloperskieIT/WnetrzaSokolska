import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface WhatsappContactProps {
  className?: string;
  number?: string;
}

const WhatsappContact = ({
  className,
  number = "48666000999",
}: WhatsappContactProps) => {
  return (
    <a
      aria-label="Skontaktuj się z nami na whatsapp"
      href={`whatsapp://send?phone=${number}`}
      className={cn("header-icon-href", className)}
    >
      <Image
        src={"/images/mainpage/whatsappwhite.png"}
        alt="Contact Whatsapp"
        width={40}
        height={40}
        className="header-icon-graphic"
      />
    </a>
  );
};

export default WhatsappContact;
