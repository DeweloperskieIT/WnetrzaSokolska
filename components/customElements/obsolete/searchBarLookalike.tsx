"use client";
import { useState, forwardRef } from "react";
import { TypewriterEffect } from "../aceternity/typewriter-effect";
import { RiSearchEyeLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

const words1 = [
  {
    text: "Siłownia",
  },
  {
    text: "na",
  },
  {
    text: "miejscu",
    className: "text-dewPrim dark:text-dewPrim",
  },
];

const words2 = [
  {
    text: "Spa",
  },
  {
    text: "na",
  },
  {
    text: "miejscu",
    className: "text-dewPrim dark:text-dewPrim",
  },
];

const words3 = [
  {
    text: "Unikalna",
  },
  {
    text: "lokalizacja",
    className: "text-dewPrim dark:text-dewPrim",
  },
];

const words4 = [
  {
    text: "Nowoczesna",
  },
  {
    text: "architektura",
    className: "text-dewPrim dark:text-dewPrim",
  },
];

const words5 = [
  {
    text: "Serce",
  },
  {
    text: "miasta",
    className: "text-dewPrim dark:text-dewPrim",
  },
];

const words6 = [
  {
    text: "Luksusowe",
  },
  {
    text: "życie",
    className: "text-dewPrim dark:text-dewPrim",
  },
];

export const placeholderSentences = [
  words1,
  words2,
  words3,
  words4,
  words5,
  words6,
];

export type words = {
  text: string;
  className?: string;
}[];

interface SearchBarLookalikeProps extends React.HTMLAttributes<HTMLDivElement> {
  sentences: words[];
  className?: string;
  centered?: boolean;
  classNameTypewriter?: string;
}

export const SearchBarLookalike = forwardRef<
  HTMLDivElement,
  SearchBarLookalikeProps
>(
  (
    { sentences, className, centered = false, classNameTypewriter, ...rest },
    ref
  ) => {
    const [wordsIndex, setWordsIndex] = useState(0);

    const onTypewriterEffectComplete = () => {
      const sentencesAmount = sentences.length;

      let newIndex = wordsIndex + 1;

      if (newIndex > sentencesAmount - 1) {
        newIndex = 0;
      }

      setTimeout(() => {
        setWordsIndex(newIndex);
      }, 5000);
    };

    const words = sentences[wordsIndex];

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex flex-row items-center gap-2 h-fit justify-between min-w-fit px-4 py-2 rounded-full bg-light text-light border-2 border-dewPrim",
          className
        )}
        {...rest}
      >
        <TypewriterEffect
          className={cn(
            "h-fit !text-xl md:!text-4xl",
            centered && "w-full",
            classNameTypewriter
          )}
          cursorClassName="!w-[2px] bg-dewPrim"
          key={wordsIndex}
          words={words}
          onComplete={onTypewriterEffectComplete}
        />
        <div className="h-full w-fit flex items-center justify-center gap-4">
          <RiSearchEyeLine
            className="relative size-6 md:size-12 text-dewPrim"
            size={10}
          />
        </div>
      </div>
    );
  }
);

SearchBarLookalike.displayName = "SearchBarLookalike";
