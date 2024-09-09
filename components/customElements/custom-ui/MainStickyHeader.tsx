import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { NawigacjaDropDown } from "./NawigacjaDropDown";
import {
  EmailContact,
  FacebookRedirect,
  InstagramRedirect,
  WhatsappContact,
  YoutubeRedirect,
} from "../buttons";
import Link from "next/link";
import { LanguageChanger } from "../buttons/LanguageChanger";

export interface MainStickyHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  dict: any;
  customAccent?: string;
}

export const MainStickyHeader = ({
  className,
  dict,
  customAccent,
}: MainStickyHeaderProps) => {
  return (
    <div
      data-testid="Header"
      className={cn(
        "bg-websiteBackground1 md:h-20  z-40 top-0 w-full flex-center md:flex-row flex-col padding-element",
        className
      )}
    >
      <Link href={"/"}>
        <Image
          src={"/images/mainpage/deweloperskie-corner-logo.png"}
          alt="Deweloperskie Logo"
          width={80}
          height={80}
          className="absolute right-0 top-0 z-0"
        />
      </Link>
      <div className="w-full h-full flex flex-col gap-4 md:flex-row justify-between items-center max-w-screen-xl py-2">
        <Image
          src={"/images/mainpage/wnetrzalogo.png"}
          alt="Wnętrza Deweloperskie Logo"
          width={200}
          height={70}
          className="w-auto h-auto max-h-[60px]"
        />
        <a className="text-light lg:block hidden" href="tel:+48666000999">
          +48 666 000 999
        </a>
        <div className="w-fit flex flex-row justify-evenly items-center h-full gap-6 max-h-5 text-light md:pr-6 xl:pr-0">
          <FacebookRedirect fill={customAccent} />
          <InstagramRedirect fill={customAccent} />
          <YoutubeRedirect fill={customAccent} />
          <WhatsappContact fill={customAccent} />
          <EmailContact fill={customAccent} />

          <NawigacjaDropDown
            links={[
              { link: "/", name: dict.Header.landing_page },
              { link: "/katowice-1", name: dict.Header.offer_1 },
              { link: "/katowice-2", name: dict.Header.offer_2 },
            ]}
          />
          <LanguageChanger locale={dict.locale} />
        </div>
      </div>
    </div>
  );
};
