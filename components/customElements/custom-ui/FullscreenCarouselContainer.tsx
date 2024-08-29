import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export const FullscreenCarouselContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col section-header-gap w-full h-full max-h-[1024px]",
        className
      )}
    >
      {children}
    </div>
  );
};
