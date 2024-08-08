import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { OfferContactForm } from "@/components/customElements/forms/OfferContactForm";

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
      <div className="flex flex-col xl:flex-row w-full items-center justify-between gap-10 ">
        <div className="hidden md:flex basis-1/2 w-full items-center md:items-start gap-20 justify-start flex-col">
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
          {/* Logotypy */}
          <div className="w-full flex items-center justify-evenly flex-row gap-10 h-[100px]">
            <Image
              src={"/images/soktowersIcon.png"}
              alt="soktower"
              width={100}
              height={200}
              className="object-contain h-full"
            />
            <Image
              src={"/images/aradewIcon.png"}
              alt="soktower"
              width={150}
              height={60}
              className="object-contain h-full w-full"
            />
          </div>
        </div>
        {/* Formularz */}
        <div className="lg:basis-1/2">
          <OfferContactForm
            sendTo={process.env.OFFERCONTACTDESTINATION}
            oferta={oferta}
            className="bg-transparent lg:bg-dark"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
