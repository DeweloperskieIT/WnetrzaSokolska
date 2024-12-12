import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../forms/ContactForm";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  header?: React.ReactNode;
  oferta: string;
  dict: any;
}

const Footer = ({ header, className, oferta, dict, ...rest }: FooterProps) => {
  return (
    <div
      className={cn("w-full flex flex-col section-header-gap", className)}
      {...rest}
    >
      {header}
      <div className=" padding-element flex flex-col xl:flex-col w-full items-center justify-between gap-10 pb-2">
        {/* Formularz */}
        <div className="lg:basis-1/2 self-center w-full">
          <ContactForm
            dict={dict}
            sendTo={process.env.OFFERCONTACTDESTINATION}
            oferta={oferta}
            className="bg-transparent lg:bg-dark"
          />
        </div>

        {/* Logotypy */}
        <div className="w-full flex items-center md:items-end justify-evenly flex-col md:flex-row gap-10 h-full max-w-screen-xl self-c">
          <Link href={"/"}>
            <Image
              src={"/images/logo2.png"}
              alt="sokolska towers logo"
              width={160}
              height={100}
              className="object-contain h-auto w-auto opacity-90"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={"/images/mainpage/deweloperskie-logo-jasno-szare.png"}
              alt="deweloperskie logo"
              width={100}
              height={100}
              className="object-contain h-auto w-auto max-w-[200px] max-h-[80px]"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={"/images/wnetrzalogo.png"}
              alt="wnętrza deweloperskie logo"
              width={300}
              height={100}
              className="object-contain max-w-[200px] max-h-[70px] h-auto w-auto"
            />
          </Link>
        </div>
      </div>
      <footer className=" padding-element  text-sm flex flex-col gap-4 pb-4 md:pb-10">
        <span className="text-center">
          {dict.Footer_Common.paragraph_1}
          <br />
          {dict.Footer_Common.paragraph_2}
        </span>
        <span className="self-center">© Deweloperskie 2024</span>
      </footer>
    </div>
  );
};

export default Footer;

// plop
