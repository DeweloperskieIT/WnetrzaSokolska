"use client";

import { useState, useEffect } from "react";
import { ContactForm } from "@/components/customElements/forms";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface StickyFormButtonProps {
  className?: string;
  oferta?: string;
  dict: any;
}

export const StickyFormButton = ({
  className,
  oferta,
  dict,
}: StickyFormButtonProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const threshold = document.documentElement.scrollHeight * 0.97;
    if (scrollPosition >= threshold) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "z-40 hidden md:block fixed right-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <div
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "absolute transform -translate-y-1/2 flex flex-row items-center justify-center flex-nowrap left-0 transition-all duration-500",
          isHovered ? "-translate-x-full" : "-translate-x-[96px]"
        )}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          className="p-2 bg-accent1 text-nowrap flex-center flex-col gap-2 pr-4 cursor-pointer"
        >
          <Image
            src={"/images/phoneIcon.png"}
            alt="contact"
            width={80}
            height={80}
            className="object-contain size-12"
          />
          <span className="text-dark font-bold">KONTAKT</span>
        </div>
        <ContactForm
          dict={dict}
          sendTo={process.env.OFFERCONTACTDESTINATION}
          oferta={oferta || "Nie wyspecyfikowano"}
          className={cn(
            "max-h-[85svh] overflow-y-auto !justify-start border-2 w-[600px]  md:!p-4 !md:pb-0 ease-out border-accent1 transition-all duration-500"
          )}
        />
      </div>
    </div>
  );
};
