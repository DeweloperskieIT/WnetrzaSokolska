import { cn, parseEmailHrefText } from "@/lib/utils";
import Image from "next/image";
import React from "react";

import { NawigacjaDropDown } from "@/components/customElements/custom-ui";
import {
  ContactFormOpener,
  EmailContact,
  FacebookRedirect,
  InstagramRedirect,
  WhatsappContact,
  YoutubeRedirect,
} from "@/components/customElements/buttons";
import Link from "next/link";
import { LanguageChanger } from "../buttons/LanguageChanger";

export interface OfferStickyHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  oferta: string;
  dict: any;
  customAccent?: string;
}

export const OfferStickyHeader = ({
  className,
  oferta,
  dict,
  customAccent,
}: OfferStickyHeaderProps) => {
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
          className="absolute right-0 top-0 size-16 md:size-20"
        />
      </Link>
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
            <span className="text-light text-sm md:text-xl">
              {dict.Header.offer_title}
            </span>
            <span
              className={cn(
                "text-accent1 text-sm md:text-xl font-light whitespace-nowrap",
                customAccent
              )}
            >
              SOKOLSKA TOWERS
            </span>
          </div>
        </div>

        <a className="text-light lg:block hidden" href="tel:+48666000999">
          +48 666 000 999
        </a>
        <div className="w-fit flex flex-row justify-evenly items-center h-full gap-6 max-h-5 text-light md:pr-6 xl:pr-0">
          <FacebookRedirect fill={customAccent} />
          <InstagramRedirect fill={customAccent} />
          <YoutubeRedirect fill={customAccent} />
          <WhatsappContact fill={customAccent} />
          <EmailContact
            params={`subject=${parseEmailHrefText(oferta)}`}
            fill={customAccent}
          />
          <ContactFormOpener dict={dict} fill={customAccent} />
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
