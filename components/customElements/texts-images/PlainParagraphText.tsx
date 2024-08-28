import { cn } from "@/lib/utils";
import React from "react";

export interface PlainParagraphTextProps {
  className?: string;
  textClassName?: string;
  texts: string[];
  header?: React.ReactNode;
}

export const PlainParagraphText = ({
  texts,
  className,
  textClassName,
  header,
}: PlainParagraphTextProps) => {
  return (
    <div>
      {header}
      <div
        className={cn(
          "padding-element flex flex-col gap-10 md:gap-16",
          className
        )}
      >
        {texts.map((text, i) => (
          <p key={i} className={cn("md:text-2xl", textClassName)}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};
