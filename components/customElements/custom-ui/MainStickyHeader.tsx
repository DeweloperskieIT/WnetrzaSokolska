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
          "sticky bg-websiteBackground1 transition-all duration-300 z-40 top-0 w-full flex-center padding-element pt-4 md:py-4 ",
          className,
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <Image
          alt="dlogo"
          src={"/images/mainpage/dciemnoszare.png"}
          width={100}
          height={100}
          className="hidden 2xl:block 2xl:absolute right-0 p-0 2xl:p-2 2xl:max-h-full object-contain"
        />
        <div className="w-full flex flex-col gap-4 md:flex-row justify-between items-center max-w-screen-xl">
          <Image
            src={"/images/mainpage/wnetrzalogo.png"}
            alt="logo"
            width={200}
            height={70}
            className="w-auto h-auto max-h-[80px]"
          />
          <div className="flex flex-row justify-evenly items-center gap-6 text-light">
            <a
              href="whatsapp://send?phone=48666000999"
              className="cursor-pointer p-3"
            >
              <Image
                src={"/images/mainpage/whatsappwhite.png"}
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
                src={"/images/mainpage/talkwhite.png"}
                alt="h-ic-1"
                width={40}
                height={40}
                className="size-5"
              />
            </a>
            <Image
              alt="dlogo"
              src={"/images/mainpage/dciemnoszare.png"}
              width={100}
              height={100}
              className="2xl:hidden max-h-14 p-2 block md:p-4 md:max-h-full object-contain"
            />
            {/* <button onClick={scrollToTop} className="cursor-pointer p-3">
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
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainStickyHeader;
