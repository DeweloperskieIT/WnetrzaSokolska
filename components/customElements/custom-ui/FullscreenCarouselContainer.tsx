import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const FullscreenCarouselContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full section-header-gap h-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default FullscreenCarouselContainer;
