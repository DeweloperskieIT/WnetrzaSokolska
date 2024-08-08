import { cn } from "@/lib/utils";
import React from "react";

interface VideoBackgroundProps
  extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  type?: string;
  className?: string;
}

const VideoBackground = ({
  src,
  className,
  type = "video/mp4",
  ...props
}: VideoBackgroundProps) => {
  return (
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
  );
};

export default VideoBackground;
