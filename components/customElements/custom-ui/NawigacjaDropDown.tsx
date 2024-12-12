"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation"; // Import usePathname

type LinkName = {
  link: string;
  name: string;
};

interface NawigacjaDropDownProps {
  title?: string;
  links: LinkName[];
  className?: string;
}

const NawigacjaDropDown = ({
  links,
  title,
  className,
}: NawigacjaDropDownProps) => {
  const pathname = usePathname(); // Get the current path

  const [isAlreadyClicked, setIsAlreadyClicked] = useState<boolean>(false);

  return (
    <DropdownMenu onOpenChange={() => setIsAlreadyClicked(true)}>
      <DropdownMenuTrigger
        aria-label="Otwórz nawigację"
        className={cn(
          "w-full h-full text-light flex-center hover:text-accent1 hover:animate-none p-1 z-[1]",
          className,
          isAlreadyClicked ? "animate-none" : "animate-color-cycle"
        )}
      >
        {title ? (
          title
        ) : (
          <RxHamburgerMenu className=" w-6 h-6 md:w-8 md:h-8 object-contain" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-center rounded-none bg-dark">
        {links.map(({ link, name }, i) => (
          <div key={i}>
            <DropdownMenuItem
              asChild
              className="rounded-none text-light cursor-pointer"
            >
              <Link
                href={link}
                onClick={(e) => {
                  if (link === pathname) {
                    e.preventDefault(); // Prevent navigation if the path is the same
                  }
                }}
              >
                {name}
              </Link>
            </DropdownMenuItem>
            {i !== links.length - 1 && <DropdownMenuSeparator />}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default NawigacjaDropDown;
