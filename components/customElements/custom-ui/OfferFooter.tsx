import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactForm } from "@/components/customElements/forms/ContactForm";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  header?: React.ReactNode;
  oferta: string;
}

const Footer = ({ header, className, oferta, ...rest }: FooterProps) => {
  return (
    <div
      className={cn(
        "padding-element w-full flex flex-col section-header-gap",
        className
      )}
      {...rest}
    >
      {header}
      <div className="flex flex-col xl:flex-col w-full items-center justify-between gap-10 pb-2">
        {/*<div className="hidden md:flex basis-1/2 w-full items-center md:items-start gap-20 justify-between flex-col h-full">
           <div className="flex flex-col gap-4 w-full ">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:bg-darkerGray/20">
                  <div className="group footer-button-parent">
                    <div className="footer-button-secondary-container">
                      <div className="footer-button-leftline group-hover:footer-hover-group-color"></div>
                      <span className="footer-button-text !no-underline group-hover:!no-underline">
                        MEDIA SPOŁECZNOŚCIOWE
                      </span>
                    </div>
                    <span className="footer-button-bottomline group-hover:footer-hover-group-color"></span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="group footer-button-parent">
                    <div className="footer-button-secondary-container">
                      <div className="footer-button-leftline group-hover:footer-hover-group-color"></div>
                      <span className="footer-button-text">
                        POLITYKA PRYWATNOŚCI
                      </span>
                    </div>
                    <span className="footer-button-bottomline group-hover:footer-hover-group-color"></span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="group footer-button-parent">
                    <div className="footer-button-secondary-container">
                      <div className="footer-button-leftline group-hover:footer-hover-group-color"></div>
                      <span className="footer-button-text">
                        KONTAKT I DANE SPÓŁKI
                      </span>
                    </div>
                    <span className="footer-button-bottomline group-hover:footer-hover-group-color"></span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div> 
        </div>*/}
        {/* Formularz */}
        <div className="lg:basis-1/2 self-center w-full">
          <ContactForm
            sendTo={process.env.OFFERCONTACTDESTINATION}
            oferta={oferta}
            className="bg-transparent lg:bg-dark"
          />
        </div>

        {/* Logotypy */}
        <div className="w-full flex items-center md:items-end justify-evenly flex-col md:flex-row gap-10 h-full max-w-screen-xl self-c">
          <Image
            src={"/images/logo2.png"}
            alt="sokolska towers logo"
            width={160}
            height={100}
            className="object-contain h-auto w-auto"
          />{" "}
          <Image
            src={"/images/mainpage/deweloperskie-logo-jasno-szare.png"}
            alt="deweloperskie logo"
            width={100}
            height={100}
            className="object-contain h-auto w-auto max-w-[200px] max-h-[80px]"
          />
          <Image
            src={"/images/wnetrzalogo.png"}
            alt="wnętrza deweloperskie logo"
            width={300}
            height={100}
            className="object-contain max-w-[200px] max-h-[70px] h-auto w-auto"
          />
        </div>
      </div>
      <footer className="text-sm flex flex-col gap-4 pb-4 md:pb-10">
        <span className="text-center">
          Wnętrza Deweloperskie jest marką należącą do: Deweloperskie P.S.A. z
          siedzibą w Katowicach przy ul. Murckowskiej 14c, NIP: 6343022518,
          REGON: 525018864 KRS: 0001030478
          <br />
          Przedmiotem oferty są luksusowe apartamenty posadowione w ramach
          kompleksu Sokolska Towers, pod adresem: ul. Sokolska 30 Katowice.
        </span>
        <span className="self-center">© Deweloperskie 2024</span>
      </footer>
    </div>
  );
};

export default Footer;
