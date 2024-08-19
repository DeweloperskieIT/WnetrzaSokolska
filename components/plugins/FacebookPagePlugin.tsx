"use client";

interface FacebookPagePluginProps {
  type?: "timeline" | "events" | "profile" | "messages";
  width?: number; // You can specify default width if needed
  height?: number; // You can specify default height if needed
}

const FacebookPagePlugin = ({
  type = "timeline",
  width = 340,
  height = 271,
}: FacebookPagePluginProps) => {
  return (
    <>
      {type === "profile" && (
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61561487519289&tabs&width=${width}&height=${height}&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width={width}
          height={height}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      )}
      {type === "timeline" && (
        <iframe
          src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61561487519289&tabs=timeline&width=${width}&height=${height}&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
          width={width}
          height={height}
          scrolling="no"
          frameBorder="0"
          allowTransparency={true}
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      )}
      {type === "events" && (
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61561487519289&tabs=events&width=${width}&height=${height}&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width={width}
          height={height}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      )}

      {type === "messages" && (
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61561487519289&tabs=messages&width=${width}&height=${height}&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width={width}
          height={height}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      )}
    </>
  );
};

export default FacebookPagePlugin;
