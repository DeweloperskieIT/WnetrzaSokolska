"use client";

import { cn } from "@/lib/utils";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

export type NavigationMenuIconItems = {
  width: string;
  icon: { src: string; alt: string; width: number; height: number };
  destinations: {
    name: string;
    destination: string;
  }[];
};

type Props = {
  className?: string;
  disabled?: boolean;
  data: NavigationMenuIconItems;
};

const HeaderIconMenu = ({ className, disabled, data }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCurrentlyHovering, setisCurrentlyHovering] = useState(false);
  const isCurrentlyHoveringRef = useRef(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = () => {
    if (disabled) {
      return;
    }
    setIsOpen(true);
  };

  const handleHover = () => {
    if (disabled) {
      return;
    }
    isCurrentlyHoveringRef.current = true;
    setisCurrentlyHovering(true);
    setTimeout(() => {
      if (isCurrentlyHoveringRef.current) {
        setisCurrentlyHovering(false); // Zaktualizuj stan na fałsz
        handleOpen();
      }
    }, 500);
  };

  const handleToggle = () => {
    if (disabled) {
      return;
    }
    setIsOpen((prev) => !prev);
  };

  const handleMouseLeave = () => {
    if (disabled) {
      return;
    }
    isCurrentlyHoveringRef.current = false;
    setisCurrentlyHovering(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (disabled) {
      return;
    }
    if (
      headerRef.current &&
      !headerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={headerRef}
      className={cn(
        "relative w-full lg:w-fit h-full justify-between flex flex-col lg:flex-row gap-2 lg:gap-6 z-10",
        className
      )}
    >
      <div
        className={`bg-dark w-full h-full z-20 absolute min-w-full lg:min-w-0 `}
        style={{
          width: `${data.width}`,
        }}
      ></div>

      <div
        className={`relative h-full w-full min-w-full lg:min-w-0 flex flex-col lg:block`}
        style={{
          width: `${data.width}`,
        }}
      >
        <div
          className={cn(
            `min-w-full lg:min-w-0   lg:rounded-tr-xl w-full h-full z-20 absolute transition-all duration-0 lg:duration-300  cursor-pointer`,
            disabled && "cursor-default"
          )}
          style={{
            width: `${data.width}`,
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleToggle();
          }}
          onMouseEnter={() => handleHover()}
          onMouseLeave={() => handleMouseLeave()}
        />
        <Image
          src={data.icon.src}
          alt={data.icon.alt}
          width={data.icon.width}
          height={data.icon.height}
          priority
          className={cn(
            "brightness-[9999] lg:w-full w-[160px] object-scale-down cursor-pointer self-center  text-xl justify-center  duration-300 transition-all text-dark hover:text-dark  h-full flex items-center relative z-20 p-3 text-wrap",
            isOpen && " text-dark "
          )}
          onClick={(e) => {
            e.stopPropagation();
            if (disabled) {
              window.location.href = "/"; // Redirect to homepage if disabled
            } else {
              handleToggle();
            }
          }}
          onMouseEnter={() => handleHover()}
          onMouseLeave={() => handleMouseLeave()}
        />
        <div
          className={cn(
            "lg:pb-2 rounded-br-xl z-50 flex relative flex-col gap-2 lg:gap-0 lg:absolute lg:transition-position bg-dark  !duration-300 min-w-fit w-full max-w-full lg:translate-y-0 lg:z-10 h-fit lg:h-fit ",
            !isOpen && "lg:-translate-y-full h-0  lg:h-fit "
          )}
        >
          {/* <div
            className={cn(
              "lg:block hidden size-8 bg-dark absolute rounded-tr-full bottom-0 transition-all !duration-0 lg:!duration-300 left-8 rotate-45 translate-y-1/4",
              isOpen && "rotate-[60deg] translate-y-1/2",
              isCurrentlyHovering && "rotate-45 translate-y-1/2 "
            )}
          /> */}
          {data.destinations.map((item, mId) => (
            <Link
              href={item.destination}
              style={{
                width: `${data.width}`,
              }}
              className={cn(
                "min-w-full lg:min-w-0 px-4 py-2 text-wrap text-center lg:text-left w-full text-base !duration-0 lg:!duration-75 text-light hover:text-accent1 hover:bg-dark transition-all opacity-100 cursor-pointer ",
                !isOpen ? "scale-y-0" : "scale-y-100"
              )}
              key={mId}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(item.name),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HeaderIconMenu;
