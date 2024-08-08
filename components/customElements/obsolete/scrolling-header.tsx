"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ScrollingHeader = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-light flex justify-between items-center w-full p-4 rounded-b ${
        isTop ? "shadow-none" : "shadow-md"
      }`}
    >
      <Image
        src={"/images/view1.jpg"}
        alt="soklog"
        width={100}
        height={100}
        className="size-20"
      />
      <h1 className="text-right text-gray-500">LUKSUS, KTÓRY CIĘ WYRÓŻNI</h1>
    </header>
  );
};

export default ScrollingHeader;
