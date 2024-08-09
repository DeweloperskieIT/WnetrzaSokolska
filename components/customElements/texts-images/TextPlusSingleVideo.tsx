import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface TextPlusSingleVideoProps {
  className?: string;
  header?: React.ReactNode;
  src: string;
  content: React.ReactNode;
  videoClassName?: string;
}

const TextPlusSingleVideo = ({
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
      <div className="flex flex-col items-center lg:flex-row justify-between gap-16">
        {content}
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

export default TextPlusSingleVideo;
