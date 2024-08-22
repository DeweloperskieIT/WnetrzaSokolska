import { cn } from "@/lib/utils";
import React, { Dispatch, SetStateAction } from "react";
import {
  MdNavigateBefore,
  MdNavigateNext,
  MdOutlineNavigateBefore,
} from "react-icons/md";

interface PrevNextButtonsProps {
  handleClickBack?: () => void;
  handleClickNext?: () => void;
  handleHoverBack?: Dispatch<SetStateAction<boolean>>;
  handleHoverNext?: Dispatch<SetStateAction<boolean>>;
  simulateArrows?: boolean;
  visible?: boolean;
  currentIndex?: number;
  itemsLength?: number;
  setCurrentIndex?: Dispatch<SetStateAction<number>> | ((i: number) => void);
  dotsClassName?: string;
  dotsEnabled?: boolean;
  dotsEnabledOnlyVisible?: boolean;
  noHoverGradient?: boolean;
  controlsDisabled?: boolean;
}

const PrevNextButtons = ({
  handleClickBack,
  handleClickNext,
  handleHoverBack,
  handleHoverNext,
  simulateArrows = false,
  visible = false,
  currentIndex,
  itemsLength,
  setCurrentIndex,
  dotsClassName,
  dotsEnabled = false,
  dotsEnabledOnlyVisible,
  noHoverGradient = false,
  controlsDisabled = false,
}: PrevNextButtonsProps) => {
  let items = [];
  if (itemsLength && itemsLength != 0) {
    items = new Array(itemsLength).fill(null);
  }

  const simulateKeyPress = (key: string) => {
    if (!simulateArrows) return;
    const event = new KeyboardEvent("keydown", { key });
    window.dispatchEvent(event);
  };

  let commonClassesIcon = cn(
    "rounded-full bg-light fill-dewDark transition-all duration-200 hover:bg-dewPrim base-hover",
    visible ? "" : "hidden"
  );

  let commonClassesButton = cn(
    visible
      ? "m-8 md:m-10"
      : "w-1/4 md:w-1/3 h-full md:rounded-none transition-all duration-400",
    !noHoverGradient &&
      "from-transparent to-white/10 opacity-0 hover:opacity-100"
  );

  const handlePointerDownBack = () => {
    handleClickBack && handleClickBack();
    simulateKeyPress("ArrowLeft");
  };

  const handlePointerDownNext = () => {
    handleClickNext && handleClickNext();
    simulateKeyPress("ArrowRight");
  };

  return (
    <div className="absolute w-full h-full  z-20 flex justify-between md:items-center items-end">
      {!controlsDisabled && (
        <>
          <button
            name="previous button"
            onMouseEnter={() => {
              if (handleHoverBack) handleHoverBack(true);
            }}
            onMouseLeave={() => {
              if (handleHoverBack) handleHoverBack(false);
            }}
            className={cn(
              commonClassesButton,
              "bg-gradient-to-l"
              // visible ? "" : "rounded-r-full"
            )}
            onPointerDown={handlePointerDownBack}
          >
            <MdOutlineNavigateBefore
              size={40}
              className={cn(commonClassesIcon, "")}
            />
          </button>

          <button
            name="next button"
            onMouseEnter={() => {
              if (handleHoverNext) handleHoverNext(true);
            }}
            onMouseLeave={() => {
              if (handleHoverNext) handleHoverNext(false);
            }}
            className={cn(
              commonClassesButton,
              "bg-gradient-to-r"
              // visible ? "" : "rounded-l-full"
            )}
            onPointerDown={handlePointerDownNext}
          >
            <MdNavigateNext
              size={40}
              fill="#000"
              className={cn(commonClassesIcon, "")}
            />
          </button>
        </>
      )}

      {items &&
        currentIndex !== undefined &&
        setCurrentIndex &&
        dotsEnabled && (
          <div
            className={cn(
              "absolute z-30 bottom-0 pb-4 w-full flex-center flex-row gap-4 px-8",
              dotsClassName
            )}
          >
            {items.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "size-3 bg-darkerGray/60 transition-all hover:bg-accent1 cursor-pointer z-40",
                  i === currentIndex
                    ? "bg-accent1/80"
                    : "bg-darkerGray/60 hover:bg-accent1"
                )}
              ></div>
            ))}
          </div>
        )}

      {items && dotsEnabledOnlyVisible && (
        <div
          className={cn(
            "absolute z-30 bottom-0 pb-4 w-full flex-center flex-row gap-4 px-8",
            dotsClassName
          )}
        >
          {items.map((_, i) => (
            <div
              key={i}
              className={cn(
                " size-2 bg-darkerGray/60 transition-all z-40",
                i === currentIndex ? "bg-accent1/80" : "bg-darkerGray/60"
              )}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PrevNextButtons;
