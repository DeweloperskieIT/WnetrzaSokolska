"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NawigacjaDropDown from "./NawigacjaDropDown";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";

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
    <div
      data-testid="Header"
      className={cn(
        "sticky bg-websiteBackground1 md:h-20  z-40 top-0 w-full flex-center md:flex-row flex-col padding-element",
        className,
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <Image
        src={"/images/mainpage/deweloperskie-corner-logo.png"}
        alt="Deweloperskie Logo"
        width={80}
        height={80}
        className="absolute right-0 top-0"
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
          <a
            aria-label="Odwiedź nasze konto na Facebook"
            href="https://www.facebook.com/people/Wn%C4%99trza-Deweloperskie/61564077804403"
            target="_blank"
            className="header-icon-href"
          >
            <FiFacebook className="header-icon-graphic" />
          </a>
          <a
            aria-label="Odwiedź nasze konto na Instagram"
            href="https://www.instagram.com/wnetrza.deweloperskie/"
            target="_blank"
            className="header-icon-href"
          >
            <FiInstagram className="header-icon-graphic" />
          </a>
          <a
            aria-label="Odwiedź nasze konto na Youtube"
            href="https://www.youtube.com/@Deweloperskie"
            target="_blank"
            className="header-icon-href"
          >
            <FiYoutube className="header-icon-graphic" />
          </a>
          <a
            aria-label="Skontaktuj się z nami na whatsapp"
            href="whatsapp://send?phone=48666000999"
            className="header-icon-href"
          >
            <Image
              src={"/images/mainpage/whatsappwhite.png"}
              alt="Contact Whatsapp"
              width={40}
              height={40}
              className="header-icon-graphic"
            />
          </a>
          <a
            aria-label="Skontaktuj się z nami mailowo"
            href={`mailto:wnetrza@deweloperskie.pl?subject=Sokolska%20Towers`}
            className="header-icon-href"
          >
            <Image
              src={"/images/mainpage/talkwhite.png"}
              alt="Contact Email"
              width={40}
              height={40}
              className="header-icon-graphic"
            />
          </a>
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
