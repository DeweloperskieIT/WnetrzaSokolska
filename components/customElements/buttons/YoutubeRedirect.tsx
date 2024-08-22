import { cn } from "@/lib/utils";
import React from "react";
import { FiYoutube } from "react-icons/fi";

interface YoutubeRedirectProps {
  className?: string;
  link?: string;
}

const YoutubeRedirect = ({
  className,
  link = "https://www.youtube.com/@Deweloperskie",
}: YoutubeRedirectProps) => {
  return (
    <a
      aria-label="Odwiedź nasze konto na Youtube"
      href={link}
      target="_blank"
      className={cn("header-icon-href", className)}
    >
      <FiYoutube className="header-icon-graphic" />
    </a>
  );
};

export default YoutubeRedirect;
