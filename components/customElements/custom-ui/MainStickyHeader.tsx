"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NawigacjaDropDown from "./NawigacjaDropDown";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";
import FacebookRedirect from "../buttons/FacebookRedirect";
import InstagramRedirect from "../buttons/InstagramRedirect";
import YoutubeRedirect from "../buttons/YoutubeRedirect";
import WhatsappContact from "../buttons/WhatsappContact";
import EmailContact from "../buttons/EmailContact";

interface MainStickyHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const MainStickyHeader = ({ className }: MainStickyHeaderProps) => {
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
        className="absolute right-0 top-0 z-0"
      />
      <div className="w-full h-full flex flex-col gap-4 md:flex-row justify-between items-center max-w-screen-xl py-2">
        <Image
          src={"/images/mainpage/wnetrzalogo.png"}
          alt="Wnętrza Deweloperskie Logo"
          width={200}
          height={70}
          className="w-auto h-auto max-h-[60px]"
        />
        <div className="w-fit flex flex-row justify-evenly items-center h-full gap-6 max-h-5 text-light md:pr-6 xl:pr-0">
          <FacebookRedirect />
          <InstagramRedirect />
          <YoutubeRedirect />
          <WhatsappContact />
          <EmailContact />

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

export default MainStickyHeader;
