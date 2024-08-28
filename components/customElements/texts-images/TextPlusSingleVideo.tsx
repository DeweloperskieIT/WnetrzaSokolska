import { cn } from "@/lib/utils";
import React from "react";

export type VideoTextContent = {
  accent_1: string;
  paragraph_1: string;
  paragraph_2: string;
  paragraph_3: string;
  accent_2: string;
};

export interface TextPlusSingleVideoProps {
  className?: string;
  header?: React.ReactNode;
  src: string;
  content: VideoTextContent;
  videoClassName?: string;
}

export const TextPlusSingleVideo = ({
  header,
  className,
  src,
  content,
  videoClassName,
}: TextPlusSingleVideoProps) => {
  return (
    <div
      className={cn(
        "flex flex-col section-header-gap w-full limited-width",
        className
      )}
    >
      {header}
      <div className="flex flex-col items-center lg:flex-row justify-between gap-6 md:gap-20">
        <div className="flex justify-center flex-col gap-10 text-light lg:text-right text-xl">
          <span className="">
            <span className="text-accent1 font-bold">{content.accent_1}</span>
            &nbsp;-&nbsp;{content.paragraph_1}
          </span>
          <span>{content.paragraph_2}</span>
          <span>
            {content.paragraph_3}&nbsp;
            <span className="text-accent1 font-bold">{content.accent_2}</span>
          </span>
        </div>
        <video
          muted
          autoPlay
          loop
          src={src}
          width={600}
          height={600}
          className={cn(
            "lg:object-cover object-contain md:size-[600px]",
            videoClassName
          )}
        />
      </div>
    </div>
  );
};
