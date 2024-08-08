import MainStickyHeader from "@/components/customElements/custom-ui/MainStickyHeader";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-websiteBackground1 min-h-screen h-full w-full flex items-center justify-start flex-col">
      {children}
    </div>
  );
};

export default layout;
