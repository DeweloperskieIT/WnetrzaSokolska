"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type SpiralMapLocation = {
  name: string;
  distance: number;
  angle: number;
};

const demoLocations: SpiralMapLocation[] = [
  { name: "Place 1", distance: 100, angle: 340 },
  { name: "Place 2", distance: 100, angle: 30 },
  { name: "Place 3", distance: 150, angle: 150 },
  { name: "Place 4", distance: 150, angle: 180 },
  { name: "Place 5", distance: 200, angle: 240 },
  { name: "Place 6", distance: 200, angle: 300 },
];

export interface AnimatedMapProps {
  className?: string;
  locations?: SpiralMapLocation[];
}

export const InteractiveSpiralMap = ({
  locations = demoLocations,
  className,
}: AnimatedMapProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [distances, setDistances] = useState<number[]>([]);

  useEffect(() => {
    setDistances(Array.from(new Set(locations.map((loc) => loc.distance))));
  }, [locations]);

  return (
    <div
      className={cn("w-full h-full relative", className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className="flex items-center justify-center w-full h-full">
        <div className={cn("w-6 h-6 bg-blue-500 rounded-full relative")}>
          {distances.map((distance, index) => {
            const circleSize = visible ? distance * 2 : 0;
            return (
              <div key={index}>
                <div
                  className={cn(
                    "absolute rounded-full border-2 border-black transition-all bg-transparent duration-500",
                    visible ? "opacity-100" : "opacity-0"
                  )}
                  style={{
                    width: `${circleSize}px`,
                    height: `${circleSize}px`,
                    top: `calc(50% - ${circleSize / 2}px)`,
                    left: `calc(50% - ${circleSize / 2}px)`,
                  }}
                ></div>
                <span
                  className={cn(
                    `absolute left-1/2 -translate-x-1/2 text-base font-bold text-dewPrim transition-all duration-500 p-2 rounded bg-websiteBackground2`,
                    visible ? "opacity-100 absolute" : "opacity-0"
                  )}
                  style={{
                    top: visible ? `${distance}px` : "0px",
                  }}
                >
                  {distance}m
                </span>
              </div>
            );
          })}
          {locations.map(({ angle, distance, name }, index) => (
            <div
              key={index}
              className="w-5 h-5 bg-red-500 rounded-full transition-all absolute duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? `rotate(${angle}deg) translate(${distance}px) rotate(-${angle}deg)`
                  : "",
                left: `calc(50% - 10px)`,
                top: `calc(50% - 10px)`,
              }}
            >
              <div className="text-dewPrim text-base absolute top-full left-1/2 transform -translate-x-1/2 mt-1 whitespace-nowrap p-2 font-bold bg-websiteBackground2 rounded">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
