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
    <div className={cn("flex flex-col section-header-gap h-auto", className)}>
      {children}
    </div>
  );
};
