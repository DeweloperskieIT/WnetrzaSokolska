import { cn } from "@/lib/utils";
import React from "react";

export interface SectionHeadingProps {
  className?: string;
  top?: string;
  topClass?: string;
  bottom?: string;
  bottomClass?: string;
  wideParent?: boolean;
}

export const SectionHeading = ({
  className,
  top,
  topClass,
  bottom,
  bottomClass,
  wideParent = false,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "flex flex-col md:gap-1 w-full",
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
    </div>
  );
};
