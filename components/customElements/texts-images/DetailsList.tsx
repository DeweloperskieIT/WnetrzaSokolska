import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { forwardRef } from "react";

interface DetailsListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  classNameListItems?: string;
  classNameImage?: string;
  image?: string;
  items?: string[];
}

const DetailsList = forwardRef<HTMLDivElement, DetailsListProps>(
  (
    { className, classNameListItems, image, classNameImage, items, ...rest },
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
          {items &&
            items.map((item, index) => (
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
