"use client";

import { cn, parseEmailHrefText } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ContactForm } from "@/components/customElements/forms/ContactForm";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import NawigacjaDropDown from "./NawigacjaDropDown";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import FacebookRedirect from "../buttons/FacebookRedirect";
import InstagramRedirect from "../buttons/InstagramRedirect";
import YoutubeRedirect from "../buttons/YoutubeRedirect";
import WhatsappContact from "../buttons/WhatsappContact";
import EmailContact from "../buttons/EmailContact";
import ContactFormOpener from "../buttons/ContactFormOpener";

interface OfferStickyHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  oferta: string;
}

const OfferStickyHeader = ({ className, oferta }: OfferStickyHeaderProps) => {
  return (
    <div
      data-testid="Header"
      className={cn(
        "bg-websiteBackground1 md:h-20  z-40 top-0 w-full flex-center md:flex-row flex-col padding-element",
        className
      )}
    >
      <Image
        src={"/images/mainpage/deweloperskie-corner-logo.png"}
        alt="Deweloperskie Logo"
        width={80}
        height={80}
        className="absolute right-0 top-0 size-16 md:size-20"
      />
      <div className="w-full h-full flex flex-col gap-4 md:flex-row justify-between items-center max-w-screen-xl py-2">
        <div className="w-auto h-full max-h-[60px] flex flex-row items-center gap-4 self-start">
          <Image
            src={"/images/logo2.png"}
            alt="Sokolska Towers Logo"
            width={160}
            height={200}
            className="object-contain size-14 md:size-20"
          />
          <div className="flex flex-wrap flex-row gap-2">
            <span className="text-light text-sm md:text-xl">APARTAMENTY</span>
            <span className="text-accent1 text-sm md:text-xl font-light whitespace-nowrap">
              SOKOLSKA TOWERS
            </span>
          </div>
        </div>

        <div className="w-fit flex flex-row justify-evenly items-center h-full gap-6 max-h-5 text-light md:pr-6 xl:pr-0">
          <FacebookRedirect />
          <InstagramRedirect />
          <YoutubeRedirect />
          <WhatsappContact />
          <EmailContact params={`subject=${parseEmailHrefText(oferta)}`} />
          <ContactFormOpener />
          <NawigacjaDropDown
            links={[
              { link: "/", name: "Strona główna" },
              { link: "/sokolska-towers-126", name: "Apartament 126" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default OfferStickyHeader;
