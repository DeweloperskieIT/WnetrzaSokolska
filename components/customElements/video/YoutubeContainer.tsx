import { cn } from "@/lib/utils";
import { YouTubeEmbed } from "@next/third-parties/google";
import React from "react";

interface YoutubeContainerProps {
  className?: string;
  videoId: string;
}

const YoutubeContainer = ({ className, videoId }: YoutubeContainerProps) => {
  return (
    <div className={cn("w-full h-auto", className)}>
      <YouTubeEmbed
        videoid={videoId}
        style="width: 100%; height:100%; max-width:100%;"
      />
    </div>
  );
};

export default YoutubeContainer;
