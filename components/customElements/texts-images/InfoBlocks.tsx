import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export type InfoBlockItem = {
  icon?: string;
  header?: string;
  paragraph?: string;
};

export interface InfoBlocksProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  info: InfoBlockItem[];
  header?: React.ReactNode;
  mobileHeader?: React.ReactNode;
  alternativeMobile?: boolean;
  mobileInfo?: Omit<InfoBlockItem, "icon">[];
}

export const InfoBlocks = ({
  className,
  info,
  header,
  mobileHeader,
  alternativeMobile = false,
  mobileInfo,
  ...rest
}: InfoBlocksProps) => {
  return (
    <div
      className={cn(
        "flex flex-col section-header-gap limited-width",
        className,
        alternativeMobile ? "px-0 " : ""
      )}
      {...rest}
    >
      <div
        className={cn(
          "padding-element",
          alternativeMobile ? "block md:hidden" : "hidden"
        )}
      >
        {mobileHeader}
      </div>
      <div
        className={cn(
          alternativeMobile ? "hidden md:block " : "block flex-center"
        )}
      >
        {header}
      </div>

      {/* Desktop */}
      <div
        className={cn(
          "flex-center flex-col gap-10",
          alternativeMobile && "gap-1 md:gap-10"
        )}
      >
        {info.map((e, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center flex-col md:flex-row gap-6 md:gap-10 p-10 bg-dark w-full",
              alternativeMobile && "px-0 md:p-10"
            )}
          >
            {e.icon && (
              <Image
                src={e.icon}
                alt="icon"
                width={100}
                height={100}
                className={cn(
                  "size-14 object-contain",
                  alternativeMobile && "hidden md:block"
                )}
              />
            )}
            <div
              className={cn(
                "gap-4 flex flex-col text-light",
                alternativeMobile && "padding-element md:p-0"
              )}
            >
              <span
                className={cn(
                  "hidden text-2xl md:text-4xl font-bold",
                  alternativeMobile && "block md:hidden"
                )}
              >
                {mobileInfo && mobileInfo[i].header}
              </span>
              <span
                className={cn(
                  "hidden text-lg md:text-xl font-light px-8",
                  alternativeMobile && "block md:hidden"
                )}
              >
                {mobileInfo && mobileInfo[i].paragraph}
              </span>

              <span
                className={cn(
                  "text-2xl md:text-4xl font-bold",
                  alternativeMobile && "hidden md:block"
                )}
              >
                {e.header}
              </span>
              <span
                className={cn(
                  "text-lg md:text-xl font-light",
                  alternativeMobile && "hidden md:block"
                )}
              >
                {e.paragraph}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
