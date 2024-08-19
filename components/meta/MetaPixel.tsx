"use client";
import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const MetaPixel: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(process.env.META_PIXEL_ID!); //don't forget to change this
        ReactPixel.pageView();
      });
  }, [pathname, searchParams]);

  return null;
};

export default MetaPixel;
