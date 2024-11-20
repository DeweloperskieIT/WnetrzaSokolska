import { Metadata } from "next";
import React from "react";
import { Product, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: "Deweloperskie - Apartament Katowice",
  description:
    "Zamieszkaj już jutro w ponadczasowym apartamencie znajdującym się w Sokolska Towers w centrum Katowic.",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const jsonLdSchema: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    category: "Thing",
    name: "Apartament w budynku sokolska towers",
    offers: {
      "@type": "Offer",
      price: "1399999",
      priceCurrency: "PLN",
    },
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
