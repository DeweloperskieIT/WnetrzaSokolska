import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface VideoBackgroundProps
  extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  type?: string;
  className?: string;
  videoClassName?: string;
  children?: React.ReactNode;
}

const VideoBackground = ({
  src,
  className,
  videoClassName,
  type = "video/mp4",
  children,
  ...props
}: VideoBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative h-[512px] md:h-[724px] xl:h-[1024px] w-full",
        className
      )}
    >
      <video
        className={cn("absolute inset-0 w-full h-full object-cover", className)}
        muted
        loop
        playsInline
        autoPlay
        {...props} // Spread all other props onto the video tag
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      {children}
    </div>
  );
};

export default VideoBackground;
