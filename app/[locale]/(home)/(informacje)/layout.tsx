import Image from "next/image";
import React, { ReactNode } from "react";
import ShieldIcon from "./shield-icon.png";

type Props = { children: ReactNode };

const layout = ({ children }: Props) => {
  return (
    <div
      className="flex flex-col gap-10 bg-websiteBackground2 justify-center items-center text-justify"
      style={{ lineHeight: "175%" }}
    >
      <div className="w-full flex justify-center pt-10 ">
        <Image
          alt="shield-icon"
          src={ShieldIcon}
          width={130}
          height={170}
          className=""
        />
      </div>
      {children}
    </div>
  );
};

export default layout;
