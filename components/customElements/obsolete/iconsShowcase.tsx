import { cn } from "@/lib/utils";
import React, { forwardRef, ReactNode } from "react";
import SingleIcon, { SingleIconProps } from "@/components/obsolete/singleIcon";

interface IconsShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  icons: SingleIconProps[];
  iconsClassName?: string;
  disabled?: boolean;
}

const IconsShowcase = forwardRef<HTMLDivElement, IconsShowcaseProps>(
  ({ className, icons, iconsClassName, disabled = false, ...rest }, ref) => {
    return (
      <div
        className={cn(
          "w-full bg-websiteBackground2 p-4 grid grid-cols-2 md:grid-cols-3 place-items-start justify-items-center gap-10",
          className
        )}
        ref={ref}
        {...rest}
      >
        {icons.map((icon, i) => (
          <SingleIcon
            disabled={disabled}
            className={iconsClassName}
            key={i}
            icon={icon.icon}
            header={icon.header}
            paragraph={icon.paragraph}
            content={icon.content}
          />
        ))}
      </div>
    );
  }
);

IconsShowcase.displayName = "IconsShowcase";

export default IconsShowcase;
