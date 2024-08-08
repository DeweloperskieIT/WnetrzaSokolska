"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface MainStickyHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  hideOnScroll?: boolean;
}

const MainStickyHeader = ({
  className,
  hideOnScroll = false,
}: MainStickyHeaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const threshold = document.documentElement.scrollHeight * 0.05;
    if (scrollPosition >= threshold) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    if (hideOnScroll) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [hideOnScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Desktop */}
      <div
        className={cn(
          "sticky bg-darkerGray transition-all duration-300 z-40 top-0 w-full flex flex-col gap-4 md:flex-row justify-between items-center padding-element pt-4 md:py-4 ",
          className,
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <Image
          src={"/images/mainpage/ardew.png"}
          alt="logo"
          width={200}
          height={70}
        />
        <div className="flex flex-row justify-evenly items-center gap-6 text-light">
          <a
            href="whatsapp://send?phone=48666000999"
            className="cursor-pointer p-3"
          >
            <Image
              src={"/images/mainpage/whatsapp.png"}
              alt="h-ic-1"
              width={40}
              height={40}
              className="size-5"
            />
          </a>
          <a
            href={`mailto:wnetrza@deweloperskie.pl?subject=Sokolska%20Towers`}
            className="cursor-pointer p-3"
          >
            <Image
              src={"/images/mainpage/phonetalk.png"}
              alt="h-ic-1"
              width={40}
              height={40}
              className="size-5"
            />
          </a>
          <button onClick={scrollToTop} className="cursor-pointer p-3">
            <Image
              src={"/images/mainpage/arrowup.png"}
              alt="Scroll to top"
              width={40}
              height={40}
              className="size-5"
            />
          </button>
          <button onClick={scrollToBottom} className="cursor-pointer p-3">
            <Image
              src={"/images/mainpage/arrowdown.png"}
              alt="Scroll to bottom"
              width={40}
              height={40}
              className="size-5"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default MainStickyHeader;
