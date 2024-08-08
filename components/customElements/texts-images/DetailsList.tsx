import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { forwardRef } from "react";

const details: string[] = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
];

interface DetailsListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  classNameListItems?: string;
  classNameImage?: string;
  image?: string;
  items?: string[];
}

const DetailsList = forwardRef<HTMLDivElement, DetailsListProps>(
  (
    {
      className,
      classNameListItems,
      image,
      classNameImage,
      items = details,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "w-full text-light p-10 md:px-20 text-xl relative",
          className
        )}
        ref={ref}
        {...rest}
      >
        {image && (
          <Image
            src={image}
            alt={"listBackground"}
            fill
            className={cn(
              "object-cover h-full w-full absolute opacity-15",
              classNameImage
            )}
          />
        )}
        <ul className="list-disc relative">
          {items.map((item, index) => (
            <li
              key={index}
              className={cn("text-white mb-2", classNameListItems)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

DetailsList.displayName = "DetailsList";

export default DetailsList;
