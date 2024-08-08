import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface TextPlusSinglePhotoProps {
  className?: string;
  header?: React.ReactNode;
  img: string;
  content: React.ReactNode;
  imgClassName?: string;
}

const TextPlusSinglePhoto = ({
  header,
  className,
  img,
  content,
  imgClassName,
}: TextPlusSinglePhotoProps) => {
  return (
    <div
      className={cn(
        "flex flex-col section-header-gap w-full limited-width",
        className
      )}
    >
      {header}
      <div className="flex flex-col items-center lg:flex-row justify-between gap-10">
        {content}
        <Image
          src={img}
          alt="scene"
          width={600}
          height={600}
          className={cn("lg:object-cover object-contain", imgClassName)}
        />
      </div>
    </div>
  );
};

export default TextPlusSinglePhoto;
