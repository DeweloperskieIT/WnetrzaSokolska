"use client";

import { cn, replaceSpacesWithTwenty } from "@/lib/utils";
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
    const threshold = document.documentElement.scrollHeight * 0.02;
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
          "sticky bg-websiteBackground1 md:h-20  z-40 top-0 w-full flex-center md:flex-row flex-col",
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
        <div className="max-w-screen-xl w-full flex flex-col gap-4 md:flex-row justify-between items-center padding-element">
          <div className="flex-row flex-center gap-2 pt-2 md:p-0 -mb-4 md:mb-0">
            <Image
              src={"/images/logo2.png"}
              alt="soktower"
              width={160}
              height={200}
              className="object-contain size-20"
            />
            <span className="text-light text-xl">APARTAMENTY</span>
            <span className="text-accent1 text-xl font-light">
              SOKOLSKA TOWERS
            </span>
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
              href={`mailto:deweloperskiepsa@gmail.com?subject=${replaceSpacesWithTwenty(
                oferta
              )}`}
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
              <DrawerTrigger>
                <Image
                  src={"/images/ding.png"}
                  alt="formb"
                  width={50}
                  height={50}
                  className="!size-6 object-scale-down"
                />
              </DrawerTrigger>
              <DrawerContent className="flex-center bg-dark rounded-none max-h-svh">
                <div className="max-h-[600px]  md:max-h-svh overflow-auto">
                  <OfferContactForm
                    sendTo={process.env.OFFERCONTACTDESTINATION}
                    oferta={oferta}
                    className="pt-6"
                  />
                </div>
              </DrawerContent>
            </Drawer>
            <Image
              alt="dlogo"
              src={"/images/mainpage/dciemnoszare.png"}
              width={100}
              height={100}
              className="2xl:hidden max-h-14 p-2 block md:p-4 md:max-h-full object-contain"
            />
          </div>
        </div>
      </div>
      {/* Mobile */}
      {/* <div
        className={cn(
          "sticky md:hidden bg-websiteBackground2 transition-all duration-300 z-40 top-0 w-full flex flex-col gap-4 items-center py-2 padding-element",
          className
        )}
      >
        <div className="flex flex-row gap-2 w-full">
          <span className="text-accent1">APARTAMENT</span>
          <span className="text-light font-normal">W SOKOLSKA TOWERS</span>

          <Drawer>
            <DrawerTrigger>
              <Image
                src={"/images/ding.png"}
                alt="formb"
                width={50}
                height={50}
                className="!size-6 object-scale-down"
              />
            </DrawerTrigger>
            <DrawerContent className="flex-center bg-dark rounded-none">
              <div className="max-h-[600px] overflow-auto">
                <OfferContactForm
                  sendTo={process.env.OFFERCONTACTDESTINATION}
                  oferta={oferta}
                  className="pt-6 "
                />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div> */}
    </>
  );
};

export default OfferStickyHeader;
