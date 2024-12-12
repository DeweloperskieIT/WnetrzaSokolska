"use client";

import React, { useEffect, useState, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import HeaderMenu, { NavigationMenuItems } from "./HeaderMenu";
import HeaderIconMenu, { NavigationMenuIconItems } from "./HeaderIconMenu";
import { Locales } from "@/app/dictionaries";
import EmailContact from "../customElements/buttons/EmailContact";
import FacebookRedirect from "../customElements/buttons/FacebookRedirect";
import InstagramRedirect from "../customElements/buttons/InstagramRedirect";
import LanguageChanger from "../customElements/buttons/LanguageChanger";
import WhatsappContact from "../customElements/buttons/WhatsappContact";
import YoutubeRedirect from "../customElements/buttons/YoutubeRedirect";
import NawigacjaDropDown from "../customElements/custom-ui/NawigacjaDropDown";

type LinkItem = {
  title?: string;
  destination?: string;
  avatar?: string;
  custom?: ReactNode;
};

type NavigationItem = {
  type: "direct" | "menu";
  triggerTitle: string;
  links: LinkItem[];
};

type Props = {
  navigationItems?: NavigationItem[];
  dict: any;
};

const Header = ({ navigationItems, dict }: Props) => {
  const { locale } = useParams();

  const headerRef = useRef<HTMLDivElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    // Initial height update
    updateHeaderHeight();

    // Update height on window resize
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <>
      <div
        className=""
        style={{ height: `${headerHeight !== 0 ? headerHeight : 80}px` }}
      ></div>
      <header
        ref={headerRef}
        className={cn(
          " fixed lg:h-[80px] top-0 bg-dark w-full transition-colors lg:px-2  flex items-center justify-center z-50"
        )}
      >
        <div
          className={cn(
            "absolute w-full h-full bg-dark lg:bg-dark transition-all"
          )}
        />
        <nav className="max-w-screen-xl flex flex-col lg:flex-row w-full h-full justify-between gap-0 lg:gap-10 items-center transition-all z-20">
          <div className="w-full h-full flex flex-row gap-4">
            <HeaderIconMenu disabled data={HeaderIconMenuData} />
            <div className="w-full lg:w-fit h-auto flex flex-row gap-4">
              <FacebookRedirect
                link="https://www.facebook.com/wnetrza.deweloperskie"
                fill="text-light"
              />
              <InstagramRedirect
                link="https://www.instagram.com/wnetrza.deweloperskie/"
                fill="text-light"
              />
              <YoutubeRedirect
                link="https://www.youtube.com/channel/UCYH04V0iIezlj4ChZKugNQQ"
                fill="text-light"
              />
              <LanguageChanger locale={locale as Locales} />
            </div>
          </div>
          <HeaderMenu className={cn("")} data={NavigationMenuItemsData} />
          <div className="w-fit lg:pr-12 self-center">
            <NawigacjaDropDown
              links={[
                { link: "/", name: dict.Header.landing_page },
                { link: "/oferta", name: dict.Header.universal },
                { link: "/katowice-1", name: dict.Header.offer_1 },
                { link: "/katowice-2", name: dict.Header.offer_2 },
                { link: "/katowice-3", name: dict.Header.offer_3 },
              ]}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

const HeaderIconMenuData: NavigationMenuIconItems = {
  width: "200px",
  icon: {
    src: "/images/mainpage/wnetrzalogo.png",
    alt: "logo pozyczki deweloperskie",
    height: 100,
    width: 200,
  },
  destinations: [
    {
      name: "What goes here",
      destination: "/",
    },
  ],
};

const NavigationMenuItemsData: NavigationMenuItems[] = [
  {
    width: "185px",
    menu: "Deweloperskie",
    destinations: [
      {
        name: "ASI ",
        destination: "https://www.asi.deweloperskie.pl",
      },
      {
        name: "Pożyczki",
        destination: "https://www.pozyczki.deweloperskie.pl",
      },
      {
        name: "Wnętrza",
        destination: "https://www.wnetrza.deweloperskie.pl",
      },
      {
        name: "Doradztwo",
        destination: "https://www.doradztwo.deweloperskie.pl",
      },
      {
        name: "Marketplace",
        destination: "https://www.marketplace.deweloperskie.pl",
      },
    ],
  },
  {
    width: "160px",
    menu: "O nas",
    destinations: [
      {
        name: "<strong>Deweloperskie</strong>",
        destination: "https://www.deweloperskie.pl",
      },
      {
        name: "Nasz zespół",
        destination: "https://www.deweloperskie.pl/team",
      },
      {
        name: "Blog",
        destination: "https://www.deweloperskie.pl/blog",
      },
      {
        name: "Kariera",
        destination: "https://www.deweloperskie.pl/kariera",
      },
    ],
  },
];
