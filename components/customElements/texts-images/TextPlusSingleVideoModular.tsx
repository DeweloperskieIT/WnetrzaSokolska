import { cn } from "@/lib/utils";
import React from "react";

type TextContent = [{ plainTexts: string[]; accentTexts: string[] }];

export interface TextPlusSingleVideoModularProps {
  className?: string;
  customAccent?: string;
  header?: React.ReactNode;
  src: string;
  content: TextContent;
  videoClassName?: string;
}

export const TextPlusSingleVideoModular = ({
  header,
  className,
  customAccent = "text-accent1",
  src,
  content,
  videoClassName,
}: TextPlusSingleVideoModularProps) => {
  return (
    <div
      className={cn(
        "flex flex-col section-header-gap w-full limited-width",
        className
      )}
    >
      {header}
      <div className="flex flex-col items-center lg:flex-row justify-between gap-6 md:gap-20">
        <div className="flex justify-center flex-col gap-10 text-light lg:text-right text-xl">
          {content.map((textBlock, i) => {
            const { plainTexts, accentTexts } = textBlock;

            // Determine the maximum length between the two arrays
            const maxLength = Math.max(plainTexts.length, accentTexts.length);

            return (
              <div key={i}>
                {
                  // Iterate through the combined length of both arrays
                  Array.from({ length: maxLength }).map((_, index) => (
                    <React.Fragment key={index}>
                      {/* Add plainText if it exists for this index */}
                      {plainTexts[index] && <span>{plainTexts[index]}</span>}

                      {/* Add accentText if it exists for this index */}
                      {accentTexts[index] && (
                        <span
                          className={cn(
                            "font-bold whitespace-nowrap",
                            customAccent
                          )}
                        >
                          {accentTexts[index]}
                        </span>
                      )}
                    </React.Fragment>
                  ))
                }
              </div>
            );
          })}
          {/* <span className="">
            <span className={cn("font-bold", customAccent)}>
              {content.accent_1}
            </span>
            &nbsp;-&nbsp;{content.paragraph_1}
          </span>
          {content.optional_accent_1 ? (
            <div>
              <span>{content.optional_paragraph_1}</span>
              <span className={cn("font-bold", customAccent)}>
                &nbsp;{content.optional_accent_1}&nbsp;
              </span>
              <span>{content.optional_paragraph_2}</span>
              <span className={cn("font-bold", customAccent)}>
                &nbsp;{content.optional_accent_2}
              </span>
              {content.optional_paragraph_3 && (
                <span>{content.optional_paragraph_3}</span>
              )}
            </div>
          ) : (
            <span>{content.paragraph_2}</span>
          )}
          <span>
            {content.paragraph_3}&nbsp;
            <span className={cn("font-bold", customAccent)}>
              {content.accent_2}
            </span>
          </span> */}
        </div>
        <video
          muted
          autoPlay
          playsInline
          loop
          src={src}
          width={600}
          height={600}
          className={cn(
            "lg:object-cover object-contain md:size-[600px]",
            videoClassName
          )}
        />
      </div>
    </div>
  );
};
