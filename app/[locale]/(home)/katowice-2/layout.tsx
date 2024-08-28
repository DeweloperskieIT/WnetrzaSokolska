import { Metadata } from "next";
import React from "react";

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
  return [children];
};

export default layout;
