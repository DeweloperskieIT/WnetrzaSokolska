import { cn } from "@/lib/utils";
import React from "react";

interface PlainParagraphTextProps {
  className?: string;
  textClassName?: string;
  texts: string[];
  header?: React.ReactNode;
  children?: React.ReactNode;
  masterClassName?: string;
}

const PlainParagraphText = ({
  texts,
  className,
  textClassName,
  header,
  children,
  masterClassName,
}: PlainParagraphTextProps) => {
  return (
    <div
      className={cn(
        "flex flex-col section-header-gap limited-width w-full",
        masterClassName
      )}
    >
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

export default PlainParagraphText;
