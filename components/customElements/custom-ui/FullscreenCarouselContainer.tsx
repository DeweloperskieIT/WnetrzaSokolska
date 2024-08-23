import React, { ReactNode } from "react";

export const FullscreenCarouselContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col section-header-gap w-full">{children}</div>
  );
};
