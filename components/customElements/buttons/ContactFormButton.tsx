import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { OfferContactForm } from "./ContactForm";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ContactFormButtonProps {
  className?: string;
}

const ContactFormButton = ({ className }: ContactFormButtonProps) => {
  return (
    // <Accordion type="single" collapsible className="form-button">
    //   <AccordionItem value="item-1">
    //     <AccordionTrigger
    //       className={cn(
    //         "form-button p-2 w-[180px] !border-none flex-center rounded bg-light base-hover text-base text-dark hover:no-underline transition-all",
    //         className
    //       )}
    //     >
    //       Formularz Kontaktowy
    //     </AccordionTrigger>
    //     <AccordionContent className="!border-none mt-2 w-full max-w-md md:max-w-xl p-0">
    //       <OfferContactForm />
    //     </AccordionContent>
    //   </AccordionItem>
    // </Accordion>

    <Dialog>
      <DialogTrigger
        className={cn(
          "form-button p-2 w-[180px] !border-none flex-center rounded bg-light base-hover text-base text-dark hover:no-underline transition-all",
          className
        )}
      >
        Formularz Kontaktowy
      </DialogTrigger>
      <DialogContent>
        <OfferContactForm />
      </DialogContent>
    </Dialog>

    // <Popover>
    //   <PopoverTrigger
    //     className={cn("p-2 w-[180px] rounded bg-light base-hover", className)}
    //   >
    //     Formularz Kontaktowy
    //   </PopoverTrigger>
    //   <PopoverContent className="w-full max-w-md md:max-w-xl p-0">
    //     <OfferContactForm />
    //   </PopoverContent>
    // </Popover>
  );
};

export default ContactFormButton;
