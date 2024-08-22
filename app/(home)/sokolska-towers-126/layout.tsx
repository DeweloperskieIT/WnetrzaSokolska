import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sokolska Towers 126",
  description:
    "Zamieszkaj już jutro w ponadczasowym apartamencie 126 znajdującym się w Sokolska Towers w centrum Katowic.",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div>{children}</div>;
};

export default layout;
