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
import Link from "next/link";
import NawigacjaDropDown from "./NawigacjaDropDown";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

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
            href={`mailto:wnetrza@deweloperskie.pl?subject=${parseEmailHrefText(
              oferta
            )}`}
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
          <Drawer>
            <DrawerTrigger className="header-icon-href">
              <Image
                src={"/images/ding.png"}
                alt="Show Contact Form Button"
                width={40}
                height={40}
                className="header-icon-graphic min-h-5 min-w-5"
              />
            </DrawerTrigger>
            <DrawerDescription className="hidden">
              Formularz Kontaktowy
            </DrawerDescription>
            <DrawerTitle className="hidden">Formularz Kontaktowy</DrawerTitle>
            <DrawerContent className="flex-center bg-dark rounded-none max-h-svh">
              <div className="max-h-[600px]  md:max-h-svh overflow-auto">
                <ContactForm
                  sendTo={process.env.OFFERCONTACTDESTINATION}
                  oferta={oferta}
                  className="pt-6"
                />
              </div>
            </DrawerContent>
          </Drawer>
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
