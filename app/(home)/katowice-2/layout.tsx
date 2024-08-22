import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Oferta Apartamentu",
  description:
    "Zamieszkaj już jutro w ponadczasowym apartamencie znajdującym się w Sokolska Towers w centrum Katowic.",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div>{children}</div>;
};

export default layout;
