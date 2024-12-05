"use client";

import React, { useEffect, useState, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import HeaderMenu from "./HeaderMenu";
import HeaderIconMenu from "./HeaderIconMenu";
import { BeatLoader } from "react-spinners";
import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import { DialogHeader, DialogFooter } from "../ui/dialog";
import {
  EmailContact,
  FacebookRedirect,
  InstagramRedirect,
  WhatsappContact,
  YoutubeRedirect,
} from "../customElements/buttons";
import { LanguageChanger } from "../customElements/buttons/LanguageChanger";
import { Locales } from "@/app/dictionaries";
import { NawigacjaDropDown } from "../customElements/custom-ui";

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
  const [user, setUser] = useState(null);
  const [checkingUser, setCheckingUser] = useState(
    process.env.NEXT_PUBLIC_WEBSITE_URL === "http://localhost" ? false : true
  );

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
            <HeaderIconMenu disabled />
            <div className="w-full lg:w-fit h-auto flex flex-row gap-4">
              <FacebookRedirect fill="text-light" />
              <InstagramRedirect fill="text-light" />
              <YoutubeRedirect fill="text-light" />
              <WhatsappContact fill="text-light" />
              <EmailContact fill="text-light" />
              <LanguageChanger locale={locale as Locales} />
            </div>
          </div>
          <HeaderMenu className={cn("")} />
          <div className="w-fit md:pr-12">
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

// <button
//   className="p-2 bg-dark text-light w-full text-nowrap hover:text-light hover:bg-dark/80 transition-all"
//   onClick={() => handleLogoutClick()}
// >
//   Wyloguj
// </button>
