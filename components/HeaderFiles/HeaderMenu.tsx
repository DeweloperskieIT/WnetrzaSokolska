"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

type Props = {
  className?: string;
};

const HeaderMenu = ({ className }: Props) => {
  const isMobile = useIsMobile();
  const [selectedMenuId, setSelectedMenuId] = useState<number | null>(null);
  const [isCurrentlyHovering, setisCurrentlyHovering] = useState(false);
  const [currentlyHoveredMenuId, setCurrentlyHoveredMenuId] = useState<
    number | null
  >(null);
  const isCurrentlyHoveringRef = useRef(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const handleSelectMenu = (id: number) => {
    const isPreviousId = id === selectedMenuId;
    setSelectedMenuId(isPreviousId ? null : id);
  };

  const handleOverlayHover = (id: number) => {
    if (isMobile) {
      return;
    }
    setCurrentlyHoveredMenuId(id);
    isCurrentlyHoveringRef.current = true;
    setTimeout(() => {
      if (isCurrentlyHoveringRef.current) {
        setisCurrentlyHovering(false); // Zaktualizuj stan na fałsz
        setSelectedMenuId(id); // Ustaw menu na wybrane
      }
    }, 500);
  };

  const handleMouseLeave = () => {
    if (isMobile) {
      return;
    }
    setCurrentlyHoveredMenuId(null);
    isCurrentlyHoveringRef.current = false;
    setisCurrentlyHovering(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      headerRef.current &&
      !headerRef.current.contains(event.target as Node)
    ) {
      setSelectedMenuId(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className={cn(
        "relative w-full lg:w-fit h-full justify-evenly flex flex-col lg:flex-row gap-2 lg:gap-2 z-10 ",
        className
      )}
    >
      <div className="bg-dark w-full h-full z-20 hidden lg:block absolute"></div>
      {Thingies.map((parent, pId) => (
        <div
          className={`relative flex  h-full w-full min-w-[${parent.width}] `}
          key={pId}
        >
          <h2
            className={cn(
              "min-w-full lg:min-w-0 cursor-pointer text-xl max-h-fit   lg:rounded-tr-xl !duration-0 lg:!duration-300 transition-all bg-dark text-accent1 hover: hover:text-dark hover:bg-accent1 flex items-center justify-center lg:justify-start relative z-20 w-full text-nowrap p-2 lg:pl-4 min-h-min lg:min-h-[80px]",
              selectedMenuId === pId && "!bg-accent1 text-dark"
            )}
            style={{
              width: `${parent.width}`,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleSelectMenu(pId);
            }}
            onMouseEnter={() => handleOverlayHover(pId)}
            onMouseLeave={() => handleMouseLeave()}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(parent.menu),
            }}
          />
          <div
            className={cn(
              "lg:pb-2 lg:rounded-br-xl flex flex-col gap-2 lg:gap-0 lg:transition-position bg-accent1 !duration-0 lg:!duration-300 z-10 min-w-fit w-full max-w-full absolute top-full lg:translate-y-0 lg:z-10 h-fit lg:h-fit ",
              selectedMenuId !== pId && "lg:-translate-y-full h-0  lg:h-fit "
            )}
          >
            <div
              className={cn(
                "lg:block hidden size-8 bg-accent1 absolute rounded-tr-full bottom-0 transition-all !duration-1000 left-8 rotate-[60deg] translate-y-1/2  ",
                selectedMenuId !== pId && "rotate-[0deg] translate-y-0",
                currentlyHoveredMenuId === pId && "rotate-45 translate-y-1/2 "
              )}
            />
            {parent.destinations.map((item, mId) => (
              <Link
                href={item.destination}
                style={{
                  width: `${parent.width}`,
                }}
                className={cn(
                  "min-w-full lg:min-w-0 px-4 py-2 text-wrap text-center lg:text-left w-full text-base !duration-0 lg:!duration-75 lg:bg-accent1 lg:text-dark lg:hover:text-accent1 lg:hover:bg-dark text-accent1 hover:text-accent1 bg-dark transition-all opacity-100 cursor-pointer mt-2 lg:mt-0",
                  selectedMenuId !== pId ? "scale-y-0" : "scale-y-100"
                )}
                key={mId}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.name),
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeaderMenu;

export type NavigationMenuItems = {
  width: string;
  menu: string;
  destinations: {
    name: string;
    destination: string;
  }[];
};

const Thingies: NavigationMenuItems[] = [
  {
    width: "220px",
    menu: "Deweloperskie",
    destinations: [
      {
        name: "ASI <strong>Deweloperskie</strong>",
        destination: "https://www.asi.deweloperskie.pl",
      },
      // {
      //   name: "Pożyczki <strong>Deweloperskie</strong>",
      //   destination: "https://www.pozyczki.deweloperskie.pl",
      // },
      {
        name: "Pożyczki <strong>Deweloperskie</strong>",
        destination: "https://www.pozyczki.deweloperskie.pl",
      },
    ],
  },
  // {
  //   width: "130px",
  //   menu: "O nas",
  //   destinations: [
  //     {
  //       name: "Nasz zespół",
  //       destination: "https://www.deweloperskie.pl/nasz-zespol",
  //     },
  //     {
  //       name: "Kariera",
  //       destination: "https://www.deweloperskie.pl/kariera",
  //     },
  //   ],
  // },
  // {
  //   width: "130px",
  //   menu: "Kontakt",
  //   destinations: [
  //     {
  //       name: "1",
  //       destination: "/",
  //     },
  //     {
  //       name: "1",
  //       destination: "/",
  //     },
  //     {
  //       name: "1",
  //       destination: "/",
  //     },
  //     {
  //       name: "1",
  //       destination: "/",
  //     },
  //     {
  //       name: "1",
  //       destination: "/",
  //     },
  //   ],
  // },
];
