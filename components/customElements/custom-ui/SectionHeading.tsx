import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeadingProps {
  className?: string;
  top?: string;
  topClass?: string;
  bottom?: string;
  bottomClass?: string;
  wideParent?: boolean;
  extra_text?: string[];
  extra_textClass?: string;
}

const SectionHeading = ({
  className,
  top,
  topClass,
  bottom,
  bottomClass,
  wideParent = false,
  extra_text,
  extra_textClass,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "flex flex-col md:gap-2 w-full",
        wideParent && "section-header-xl-center",
        className
      )}
    >
      {top && (
        <span
          className={cn("text-header-accent text-3xl md:text-[48px]", topClass)}
        >
          {top}
        </span>
      )}
      {bottom && (
        <span
          className={cn("text-header-sub text-3xl md:text-[48px]", bottomClass)}
        >
          {bottom}
        </span>
      )}
      {extra_text &&
        extra_text.map((text, i) => (
          <p key={i} className={cn("pt-10", extra_textClass)}>
            {text}
          </p>
        ))}
    </div>
  );
};
export default SectionHeading;
