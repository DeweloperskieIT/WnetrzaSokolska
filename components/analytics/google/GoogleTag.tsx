// components/GoogleTag.tsx
import Script from "next/script";
import React from "react";

const GoogleTag: React.FC = () => {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env
          .GOOGLE_ANALYTICS!}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '');
          `,
        }}
      />
    </>
  );
};

export default GoogleTag;
