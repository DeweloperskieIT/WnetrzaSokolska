import { cn } from "@/lib/utils";
import React from "react";

export interface PlainParagraphTextProps {
  className?: string;
  textClassName?: string;
  texts: string[];
  header?: React.ReactNode;
  children?: React.ReactNode;
}

export const PlainParagraphText = ({
  texts,
  className,
  textClassName,
  header,
  children,
}: PlainParagraphTextProps) => {
  return (
    <div className="flex flex-col section-header-gap limited-width w-full">
      {header}
      <div className={cn("flex flex-col gap-10 md:gap-14", className)}>
        {texts.map((text, i) => (
          <p key={i} className={cn("md:text-2xl", textClassName)}>
            {text}
          </p>
        ))}
        {children}
      </div>
    </div>
  );
};
