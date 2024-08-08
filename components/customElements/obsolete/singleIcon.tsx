import React from "react";
import { RiAdvertisementFill } from "react-icons/ri";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type iconPopupContent = {
  img?: string;
  header?: string;
  paragraph: string;
};

export interface SingleIconProps {
  className?: string;
  icon: React.ReactNode;
  header: { text: string; className: string };
  paragraph?: { text: string; className: string };
  content?: iconPopupContent;
  disabled?: boolean;
}

const SingleIcon = ({
  className,
  icon,
  header,
  paragraph,
  content,
  disabled = false,
}: SingleIconProps) => {
  if (disabled) {
    return (
      <div
        className={cn(
          "w-full h-full flex items-center justify-start flex-col gap-2 p-2",
          className
        )}
      >
        {icon}
        <h1 className={cn("text-2xl", header.className)}>{header.text}</h1>
        {paragraph && (
          <p className={cn("text-dark", paragraph.className)}>
            {paragraph.text}
          </p>
        )}
      </div>
    );
  }

  return (
    <Popover>
      <PopoverTrigger>
        <div
          className={cn(
            "w-full h-full flex-center flex-col gap-2 p-2",
            className
          )}
        >
          {icon}
          <h1 className={cn("text-2xl", header.className)}>{header.text}</h1>
          {paragraph && (
            <p className={cn("text-dark", paragraph.className)}>
              {paragraph.text}
            </p>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "bg-websiteBackground2 flex-center flex-col p-0 overflow-hidden border-2"
        )}
      >
        {content && content.img && (
          <div className="max-h-[200px] min-h-[200px] h-full w-full overflow-hidden relative">
            <Image
              src={content.img}
              alt={content.img}
              fill
              className="inset-0 absolute object-cover w-full object-center h-full"
            />
          </div>
        )}
        {content && (
          <div className="p-2">
            {content.header && <h1>{content.header}</h1>}
            {content.paragraph && <p>{content.paragraph}</p>}
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default SingleIcon;
