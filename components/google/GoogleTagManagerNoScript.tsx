import React from "react";

const GoogleTagManagerNoScript: React.FC = () => {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${process.env
          .GOOGLE_TAG_MANAGER!}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>
  );
};

export default GoogleTagManagerNoScript;
