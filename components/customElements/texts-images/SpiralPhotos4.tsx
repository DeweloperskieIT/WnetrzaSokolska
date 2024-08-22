import { cn } from "@/lib/utils";
import { ImageAlt } from "@/types/customTypes";
import Image from "next/image";
import React from "react";

interface SpiralPhotos4Types {
  className?: string;
  images: ImageAlt[];
}

const SpiralPhotos4 = ({ className, images }: SpiralPhotos4Types) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-1  w-full md:aspect-[16/9] md:max-h-[1024px]",
        className
      )}
    >
      <div className="basis-1/2 h-full">
        <Image
          placeholder="blur"
          blurDataURL="/images/blur.png" // Replace with appropriate low-res image URL
          src={images[0].img}
          alt={images[0].alt}
          width={1920}
          height={1080}
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 75vw, 1920px"
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="flex flex-col gap-1 basis-1/2">
        <div className="h-1/2">
          <Image
            placeholder="blur"
            blurDataURL="/images/blur.png" // Replace with appropriate low-res image URL
            src={images[1].img}
            alt={images[1].alt}
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 75vw, 1920px"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-row gap-1 h-1/2">
          <div className="w-1/2">
            <Image
              placeholder="blur"
              blurDataURL="/images/blur.png" // Replace with appropriate low-res image URL
              src={images[2].img}
              alt={images[2].alt}
              width={960}
              height={540}
              sizes="(max-width: 768px) 75vw, (min-width: 769px) 50vw, 960px"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-1/2">
            <Image
              placeholder="blur"
              blurDataURL="/images/blur.png" // Replace with appropriate low-res image URL
              src={images[3].img}
              alt={images[3].alt}
              width={960}
              height={540}
              sizes="(max-width: 768px) 75vw, (min-width: 769px) 50vw, 960px"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiralPhotos4;
