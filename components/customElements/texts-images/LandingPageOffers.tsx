import { cn } from "@/lib/utils";
import { ImageAlt } from "@/types/customTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type offer = {
  left?: string;
  right?: string;
  top?: string;
  floor: string;
  title: string;
  subtitle: string;
  published: boolean;
  date?: string;
  link?: string;
};

export interface LandingPageOfferProps {
  className?: string;
  backgroundImage: ImageAlt;
  offers: offer[];
}

const LandingPageOffers = ({
  className,
  backgroundImage,
  offers,
}: LandingPageOfferProps) => {
  return (
    <div
      className={cn(
        "w-full h-fit relative lg:aspect-[12/9] limited-width bg-white pb-10 lg:pb-0 flex flex-col",
        className
      )}
    >
      <Image
        alt={backgroundImage.alt}
        src={backgroundImage.img}
        fill
        className="lg:!absolute object-cover  w-full h-full lg:pl-20 !relative"
      />
      <div className="z-20 w-full h-full relative lg:block flex flex-col gap-6">
        {offers.map(
          (
            { floor, published, subtitle, title, date, left, link, right, top },
            i
          ) => (
            <div
              key={i}
              className={cn(
                "text-light text-xl flex flex-col justify-between gap-6 bg-websiteBackground2 lg:max-w-[300px] p-4 lg:absolute"
              )}
              style={{
                left: `${left}px`,
                right: `${right}px`,
                top: `${top}px`,
              }}
            >
              <span className="font-bold">{floor}</span>
              <span>{title}</span>
              <div className="flex flex-col">
                <span>
                  <i>{subtitle}</i>
                </span>
                {published ? (
                  <Link
                    href={link!}
                    className="font-bold text-accent1 w-full text-right"
                  >
                    poznaj ofertę
                  </Link>
                ) : (
                  <span className="font-light text-accent1 w-full text-right">
                    premiera
                    <br />
                    {date}
                  </span>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default LandingPageOffers;
