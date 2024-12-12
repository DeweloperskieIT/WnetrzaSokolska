import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface accordionChevronTriangleProps {
  className?: string;
}

const AccordionChevronTriangle = ({
  className,
}: accordionChevronTriangleProps) => {
  return (
    <Image
      alt="test"
      width={25}
      height={25}
      src={"/images/triangle.png"}
      className={cn("transition-all duration-200", className)}
    />
  );
};

export default AccordionChevronTriangle;
