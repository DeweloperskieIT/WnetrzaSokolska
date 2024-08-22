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

export type LinkName = {
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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Otwórz nawigację"
        className={cn(
          "w-full h-full flex-center transition-all duration-150 hover:text-accent1 p-1",
          className
        )}
      >
        {title ? (
          title
        ) : (
          <RxHamburgerMenu className=" w-6 h-6 md:w-8 md:h-8 object-contain" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="text-center rounded-none
                  "
      >
        {links.map(({ link, name }, i) => (
          <div key={i}>
            <DropdownMenuItem>
              <Link href={link}>{name}</Link>
            </DropdownMenuItem>
            {i != links.length - 1 && <DropdownMenuSeparator />}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NawigacjaDropDown;
