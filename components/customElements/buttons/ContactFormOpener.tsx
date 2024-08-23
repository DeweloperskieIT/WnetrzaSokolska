import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import { ContactForm } from "../forms/ContactForm";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ContactFormOpenerProps {
  className?: string;
  oferta?: string;
}

export const ContactFormOpener = ({
  className,
  oferta,
}: ContactFormOpenerProps) => {
  return (
    <Drawer>
      <DrawerTrigger className="header-icon-href">
        <Image
          src={"/images/ding.png"}
          alt="Show Contact Form Button"
          width={40}
          height={40}
          className={cn("header-icon-graphic min-h-5 min-w-5", className)}
        />
      </DrawerTrigger>
      <DrawerDescription className="hidden">
        Formularz Kontaktowy
      </DrawerDescription>
      <DrawerTitle className="hidden">Formularz Kontaktowy</DrawerTitle>
      <DrawerContent className="flex-center bg-dark rounded-none max-h-svh">
        <div className="max-h-[600px]  md:max-h-svh overflow-auto">
          <ContactForm
            sendTo={process.env.OFFERCONTACTDESTINATION}
            oferta={oferta}
            className="pt-6"
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
