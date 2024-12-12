"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface BreathingBackgroundImageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  img: string;
  interval?: number;
  bgSizes?: string[];
  mobileBgSizes?: string[];
  children?: React.ReactNode;
}

const BreathingBackgroundImage = ({
  img,
  className,
  interval = 4000,
  bgSizes = ["50%", "60%"],
  mobileBgSizes = ["30%", "40%"],
  children,
  ...rest
}: BreathingBackgroundImageProps) => {
  const [bgSize, setBgSize] = useState(bgSizes[0]);
  const [isFirstRun, setIsFirstRun] = useState(true);

  const breathePulse = () => {
    const width = window.innerWidth;
    if (width <= 640) {
      setBgSize((prevSize) =>
        prevSize === mobileBgSizes[0] ? mobileBgSizes[1] : mobileBgSizes[0]
      );
    } else {
      setBgSize((prevSize) =>
        prevSize === bgSizes[0] ? bgSizes[1] : bgSizes[0]
      );
    }
  };

  useEffect(() => {
    if (isFirstRun) {
      setTimeout(() => {
        breathePulse();
        setIsFirstRun(false);
      }, 500);
    }
    const timer = setInterval(() => {
      breathePulse();
    }, interval);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, bgSizes, mobileBgSizes]);

  return (
    <div
      className={cn(
        "w-full h-full transition-[background-size] duration-10000 bg-no-repeat bg-right-top flex-center relative ",
        className
      )}
      style={{
        backgroundSize: `auto ${bgSize}`,
        backgroundImage: `url("${img}")`,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default BreathingBackgroundImage;
