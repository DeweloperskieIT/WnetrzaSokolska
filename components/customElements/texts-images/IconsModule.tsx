import { cn } from "@/lib/utils";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import React from "react";

export type LandingPageIcon = {
  icon: string;
  text: string;
  superscript?: string;
};

export interface IconsModuleProps {
  className?: string;
  header?: React.ReactNode;
  icons: LandingPageIcon[];
}

export const IconsModule = ({ className, header, icons }: IconsModuleProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-start gap-20 limited-width",
        className
      )}
    >
      {header}
      <div className="icon-parentcontainer-class">
        {icons.map(({ icon, text, superscript }, i) => (
          <div key={i} className="icon-container-class">
            <Image
              src={icon}
              alt="icon"
              width={100}
              height={100}
              className="icon-image-class"
            />
            {superscript ? (
              <span className="icon-text-class">
                {text}
                {superscript && <sup>{superscript}</sup>}
              </span>
            ) : (
              <span
                className="icon-text-class"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(text),
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
