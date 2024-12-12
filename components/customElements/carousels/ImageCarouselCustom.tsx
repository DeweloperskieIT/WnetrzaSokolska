"use client";

// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { useIsVisible } from "@/lib/hooks/useIsVisible";
// import { Skeleton } from "@/components/ui/skeleton";
// import { PrevNextButtons } from "../buttons";

export type ImageTextItem = {
  image: string;
  alt: string;
  text: string;
};

interface ImageCarouselCustomProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  images: ImageTextItem[];
  textClassName?: string;
  autoplay?: boolean;
  interval?: number;
  aspectCustom?: string;
}

// export const ImageCarouselCustom = ({
//   className,
//   images,
//   textClassName,
//   autoplay = false,
//   interval = 5000,
//   aspectCustom,
//   ...rest
// }: ImageCarouselCustomProps) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoplay, setIsAutoplay] = useState(autoplay);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   const ref = useRef() as React.RefObject<HTMLDivElement>;

//   const { isIntersecting, disconnectObserver } = useIsVisible(ref);

//   const [leftHover, setLeftHover] = useState(false);
//   const [rightHover, setRightHover] = useState(false);

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   useEffect(() => {
//     // autoplay
//     if (isAutoplay && isIntersecting) {
//       intervalRef.current = setInterval(() => {
//         nextImage();
//       }, interval);
//     } else {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     }

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isAutoplay, interval, isIntersecting]);

//   useEffect(() => {
//     if (!isAutoplay) {
//       disconnectObserver();
//     }
//   }, [disconnectObserver, isAutoplay]);

//   const handleClickBack = () => {
//     prevImage();
//     setIsAutoplay(false);
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }
//   };

//   const handleClickNext = () => {
//     nextImage();
//     setIsAutoplay(false);
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }
//   };

//   return (
//     <div
//       ref={ref}
//       className={cn(
//         "relative w-full transition-all duration-500 max-h-fit",
//         className
//       )}
//       {...rest}
//     >
//       <PrevNextButtons
//         noHoverGradient
//         handleHoverBack={setLeftHover}
//         handleHoverNext={setRightHover}
//         currentIndex={currentIndex}
//         setCurrentIndex={setCurrentIndex}
//         itemsLength={images.length}
//         handleClickBack={handleClickBack}
//         handleClickNext={handleClickNext}
//         dotsClassName={""}
//       />
//       <div className="relative flex justify-center items-center h-fit md:translate-y-0 translate-x-[10%] max-h-svh lg:max-h-[1024px]">
//         <div
//           className={cn("flex transition-all duration-500")}
//           style={{
//             transform: `translateX(-${currentIndex * 80}%)`,
//           }}
//         >
//           {/* dummy image for size */}

//           {images.map((item, i) => (
//             <div
//               key={i}
//               className={cn(
//                 "relative flex-shrink-0 flex flex-col items-center justify-start md:justify-end",
//                 aspectCustom
//               )}
//               style={{ width: `80%` }}
//             >
//               <Image
//                 src={item.image}
//                 alt={item.alt}
//                 width={1920}
//                 height={768}
//                 sizes="90vw"
//                 className={cn(
//                   "object-cover block w-[95%] duration-500",
//                   i === currentIndex ? "grayscale-0 " : "grayscale",
//                   i === currentIndex - 1 && leftHover && "grayscale-0 !h-[75%]",
//                   i === currentIndex + 1 && rightHover && "grayscale-0 !h-[75%]"
//                 )}
//                 style={{
//                   height: i === currentIndex ? "100%" : "50%",
//                 }}
//               />
//               <h1
//                 className={cn(
//                   "absolute bottom-0 p-4 w-[100%] transition-all duration-500 carousel-text-heading",
//                   textClassName,
//                   i === currentIndex ? "opacity-100" : "opacity-0"
//                 )}
//               >
//                 {item.text}
//               </h1>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Preload the next image off-screen */}
//       <div style={{ display: "none" }}>
//         <Image
//           src={images[(currentIndex + 1) % images.length].image}
//           alt={images[(currentIndex + 1) % images.length].alt}
//           width={1920}
//           height={768}
//           priority
//         />
//       </div>
//     </div>
//   );
// };

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "@/lib/hooks/useIsVisible";
import PrevNextButtons from "../buttons/PrevNextButtons";

interface ImageCarouselCustomProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  images: ImageTextItem[];
  textClassName?: string;
  autoplay?: boolean;
  interval?: number;
}

const ImageCarouselCustom = ({
  className,
  images,
  textClassName,
  autoplay = false,
  interval = 5000,
  ...rest
}: ImageCarouselCustomProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const ref = useRef() as React.RefObject<HTMLDivElement>;

  const { isIntersecting, disconnectObserver } = useIsVisible(ref);

  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // autoplay
    if (isAutoplay && isIntersecting) {
      intervalRef.current = setInterval(() => {
        nextImage();
      }, interval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoplay, interval, isIntersecting]);

  useEffect(() => {
    if (!isAutoplay) {
      disconnectObserver();
    }
  }, [disconnectObserver, isAutoplay]);

  const handleClickBack = () => {
    prevImage();
    setIsAutoplay(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleClickNext = () => {
    nextImage();
    setIsAutoplay(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full transition-all h-fit duration-500 overflow-hidden",
        className
      )}
      {...rest}
    >
      <PrevNextButtons
        noHoverGradient
        handleHoverBack={setLeftHover}
        handleHoverNext={setRightHover}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        itemsLength={images.length}
        handleClickBack={handleClickBack}
        handleClickNext={handleClickNext}
        dotsClassName={""}
      />
      <div
        className={cn(
          "relative mx-auto h-auto translate-y-0  object-scale-down ",
          "translate-x-[12.5%]"
          // "overflow-hidden"
        )}
      >
        <div
          className={cn("flex flex-row transition-all duration-500 ")}
          style={{
            transform: `translateX(-${currentIndex * 75}%)`,
          }}
        >
          {images.map((item, i) => (
            <div
              key={i}
              className={cn(
                "relative flex-shrink-0 object-contain flex flex-col items-center justify-center w-[75%]"
              )}
              // style={{ width: `75%` }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={1920}
                height={768}
                sizes="90vw"
                className={cn(
                  "block w-[95%] duration-500 transition-all h-[300px] md:h-full object-cover",
                  i === currentIndex
                    ? "grayscale-0 "
                    : "grayscale h-[150px] md:h-1/2",
                  i === currentIndex - 1 &&
                    leftHover &&
                    "grayscale-0 h-[300px] md:h-full",
                  i === currentIndex + 1 &&
                    rightHover &&
                    "grayscale-0 h-[300px] md:h-full"
                )}
              />
              <h1
                className={cn(
                  "absolute bottom-0 p-4 w-[95%]  transition-all duration-500 carousel-text-heading",
                  textClassName,
                  i === currentIndex ? "opacity-100" : "opacity-0"
                )}
              >
                {item.text}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* Preload the next image off-screen */}
      <div style={{ display: "none" }} className="w-[75%] h-auto">
        <Image
          src={images[(currentIndex + 1) % images.length].image}
          alt={images[(currentIndex + 1) % images.length].alt}
          width={1920}
          height={768}
          priority
          loading="eager"
          className="w-[95%] h-[300px] md:h-full"
        />
      </div>
    </div>
  );
};

export default ImageCarouselCustom;
