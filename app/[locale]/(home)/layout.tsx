import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-websiteBackground1 min-h-svh h-svh w-full flex items-center justify-start flex-col">
      {children}
    </div>
  );
};

export default layout;
