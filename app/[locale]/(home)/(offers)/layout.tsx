import React from "react";
import { RealEstateListing, WithContext } from "schema-dts";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const jsonLdSchema: WithContext<RealEstateListing> = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      {children}
    </>
  );
};

export default layout;
