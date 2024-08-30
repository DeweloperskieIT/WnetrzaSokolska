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
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation"; // Import usePathname

export type LinkName = {
  link: string;
  name: string;
};

export interface NawigacjaDropDownProps {
  title?: string;
  links: LinkName[];
  className?: string;
}

export const NawigacjaDropDown = ({
  links,
  title,
  className,
}: NawigacjaDropDownProps) => {
  const pathname = usePathname(); // Get the current path

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Otwórz nawigację"
        className={cn(
          "w-full h-full flex-center transition-all duration-150 hover:text-accent1 p-1 z-[1]",
          className
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
