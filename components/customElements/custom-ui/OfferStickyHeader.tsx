"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { OfferContactForm } from "@/components/customElements/forms/OfferContactForm";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

interface OfferStickyHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  hideOnScroll?: boolean;
  oferta: string;
}

const OfferStickyHeader = ({
  className,
  hideOnScroll = false,
  oferta,
}: OfferStickyHeaderProps) => {
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

  return (
    <>
      {/* Desktop */}
      <div
        className={cn(
          "sticky bg-websiteBackground2 transition-all duration-300 z-40 top-0 w-full hidden md:flex flex-col gap-4 md:flex-row justify-between items-center padding-element",
          className,
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-row gap-2">
          <span className="text-light">APARTAMENTY</span>
          <span className="text-accent1 font-bold">SOKOLSKA TOWERS</span>
        </div>
        <div className="flex flex-row justify-evenly items-center gap-6 text-light">
          <a
            href="whatsapp://send?phone=48666000999"
            className="cursor-pointer p-3"
          >
            <Image
              src={"/images/CallIcon.png"}
              alt="h-ic-1"
              width={50}
              height={50}
              className="!size-5 object-scale-down"
            />
          </a>
          <a
            href={`mailto:deweloperskiepsa@gmail.com?subject=Apartament`}
            className="cursor-pointer p-3"
          >
            <Image
              src={"/images/PhoneTalk.png"}
              alt="h-ic-1"
              width={50}
              height={50}
              className="!size-5 object-scale-down"
            />
          </a>

          {/* <Image
            src={"/images/ArrowUp.png"}
            alt="h-ic-1"
            width={50}
            height={50}
            className="size-5"
          />
          <Image
            src={"/images/ArrowDown.png"}
            alt="h-ic-1"
            width={50}
            height={50}
            className="size-5"
          /> */}
          <Drawer>
            <DrawerTrigger>DrawerIconNeeded</DrawerTrigger>
            <DrawerContent className="flex-center bg-dark rounded-none">
              <OfferContactForm
                sendTo={process.env.OFFERCONTACTDESTINATION}
                oferta={oferta}
                className="pt-6"
              />
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      {/* Mobile */}
      <div
        className={cn(
          "sticky md:hidden bg-websiteBackground2 transition-all duration-300 z-40 top-0 w-full flex flex-col gap-4 items-center py-2 padding-element -mb-24",
          className
        )}
      >
        <div className="flex flex-row gap-2 w-full">
          <span className="text-accent1">APARTAMENT</span>
          <span className="text-light font-normal">W SOKOLSKA TOWERS</span>
        </div>
      </div>
    </>
  );
};

export default OfferStickyHeader;
