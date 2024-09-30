"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export interface VideoBackgroundProps
  extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  type?: string;
  className?: string;
  videoClassName?: string;
  children?: React.ReactNode;
}

export const VideoBackground = ({
  src,
  className,
  videoClassName,
  type = "video/mp4",
  children,
  ...props
}: VideoBackgroundProps) => {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className={cn("relative h-full w-full", className)}>
      {!videoError ? (
        <video
          className={cn(
            "inset-0 w-full h-full object-cover pointer-events-none",
            videoClassName
          )}
          controls={false}
          preload="auto"
          muted
          loop
          playsInline
          autoPlay
          onError={() => setVideoError(true)}
          {...props}
        >
          <source src={src} type={type} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-600">
          <Skeleton className="h-full w-full" />
          <p>Failed to load video.</p>
        </div>
      )}
      {children}
    </div>
  );
};
