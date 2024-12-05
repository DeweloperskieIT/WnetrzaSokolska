import { getDictionary, Locales } from "@/app/dictionaries";
import Header from "@/components/HeaderFiles/Header";
import React from "react";

const layout = async ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locales };
}>) => {
  const dict = await getDictionary(locale as Locales);
  if (!dict) {
    return;
  }

  return (
    <div className="bg-websiteBackground1 min-h-svh h-svh w-full flex items-center justify-start flex-col">
      <Header dict={dict} />
      {children}
    </div>
  );
};

export default layout;
