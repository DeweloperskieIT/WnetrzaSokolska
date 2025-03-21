import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../customElements/forms/ContactForm";
import LinkedInRedirect from "../customElements/buttons/LinkedInRedirect";
import FacebookRedirect from "../customElements/buttons/FacebookRedirect";
import InstagramRedirect from "../customElements/buttons/InstagramRedirect";
import YoutubeRedirect from "../customElements/buttons/YoutubeRedirect";
import FooterLogo from "@/components/FooterFiles/foot-logo.webp";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  header?: React.ReactNode;
  oferta?: string;
  dict?: any;
  noContact?: boolean;
}

const Footer = ({
  header,
  className,
  oferta = "DeweloperskiePL",
  dict,
  noContact = false,
  ...rest
}: FooterProps) => {
  return (
    <div
      className={cn("w-full flex flex-col section-header-gap mt-10", className)}
      {...rest}
    >
      {header}
      <div className="  flex flex-col xl:flex-col w-full items-center justify-between gap-10">
        {/* Formularz */}
        {!noContact && (
          <div
            className="padding-element lg:basis-1/2 self-center w-full"
            id="formularz"
          >
            <ContactForm
              dict={dict}
              sendTo={process.env.OFFERCONTACTDESTINATION}
              oferta={oferta}
              className="bg-transparent lg:bg-dark"
            />
          </div>
        )}

        {/* Aktualny Footer */}

        <footer className="py-10 px-2 flex flex-col gap-10 w-full items-center text-light">
          <div className=" flex flex-col lg:flex-row gap-6 lg:gap-10 justify-between limited-width w-full text-light">
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-accent1 text-left text-xl font-bold">
                Marki Deweloperskie
              </h3>
              <Link
                className="text-lg hover:text-accent1 w-fit"
                href={"https://deweloperskie.pl"}
              >
                Deweloperskie
              </Link>
              <Link
                className="text-lg hover:text-accent1 w-fit"
                href={"https://asi.deweloperskie.pl"}
              >
                ASI Deweloperskie
              </Link>
              <Link
                className="text-lg hover:text-accent1 w-fit"
                href={"https://pozyczki.deweloperskie.pl"}
              >
                Pożyczki Deweloperskie
              </Link>
              <Link
                className="text-lg hover:text-accent1 w-fit"
                href={"https://wnetrza.deweloperskie.pl"}
              >
                Wnętrza Deweloperskie
              </Link>
              <Link
                className="text-lg hover:text-accent1 w-fit"
                href={"https://doradztwo.deweloperskie.pl"}
              >
                Doradztwo Deweloperskie
              </Link>
              <Link
                className="text-lg hover:text-accent1 w-fit"
                href={"https://marketplace.deweloperskie.pl"}
              >
                Marketplace Deweloperskie
              </Link>
            </div>{" "}
            <div className="flex flex-col items-start gap-2 text-light">
              <h3 className="text-accent1 text-left text-xl font-bold">
                O nas
              </h3>
              <Link className="text-lg hover:text-accent1 w-fit" href={"/"}>
                Strona główna
              </Link>
              <Link
                className="text-lg hover:text-accent1 w-fit"
                href={"https://deweloperskie.pl/team"}
              >
                Zespół
              </Link>
              <Link
                className="text-lg hover:text-accent1 w-fit"
                href={"https://deweloperskie.pl/kariera"}
              >
                Kariera
              </Link>
              <Link
                className="text-lg hover:text-accent1 w-fit"
                href={"https://pozyczki.deweloperskie.pl/wniosek"}
              >
                Wniosek pożyczkowy
              </Link>
              <Link
                className="text-lg hover:text-accent1 w-fit"
                href={"https://pozyczki.deweloperskie.pl/leady"}
              >
                Dla pośrednika
              </Link>
              <Link
                className="text-lg hover:text-accent1 w-fit"
                href={"https://deweloperskie.pl/polityka-prywatnosci"}
                target="_blank"
              >
                Polityka prywatności
              </Link>
              <Link
                className="text-lg hover:text-accent1 w-fit"
                href={"https://deweloperskie.pl/rodo"}
                target="_blank"
              >
                RODO
              </Link>
            </div>
            <div className="flex flex-col items-start gap-2 text-light">
              <h3 className="text-accent1 text-left text-xl font-bold text-nowrap">
                Deweloperskie P.S.A.
              </h3>
              <p className="text-lg ">NIP: 6343022518</p>
              <p className="text-lg ">KRS: 0001030478</p>
              <p className="text-lg ">
                Al. Murckowska 14C,
                <br />
                40-265 Katowice
              </p>
              <Link
                className="text-lg hover:text-accent1 w-fit"
                href={"tel:+48666000999"}
              >
                +48 666 000 999
              </Link>
              <Link
                className="text-lg hover:text-accent1 w-fit"
                href={"mailto:kontakt@deweloperskie.pl"}
              >
                kontakt@deweloperskie.pl
              </Link>
              <div
                className="w-full lg:w-fit h-auto flex flex-row gap-6 pt-2"
                id="adres"
              >
                <LinkedInRedirect
                  fill=" size-6"
                  link="https://www.linkedin.com/company/deweloperskiepsa/posts/?feedView=all"
                />
                <FacebookRedirect
                  fill="size-6"
                  link="https://www.facebook.com/deweloperskiePL/"
                />
                <InstagramRedirect
                  fill=" size-6"
                  link="https://www.instagram.com/deweloperskie.pl/"
                />
                <YoutubeRedirect
                  fill=" size-6"
                  link="https://www.youtube.com/@Deweloperskie"
                />
              </div>
            </div>
          </div>
        </footer>
        <div className="flex flex-col gap-2 w-full bg-darkerGray items-center p-4 text-dark text-center">
          <Image
            src={FooterLogo}
            alt="Deweloperskie Footer Logo"
            className="mix-blend-overlay size-20"
          />
          <p className="text-sm pt-4">© Deweloperskie 2025</p>
          <p className="text-sm">Wszystkie prawa zastrzeżone</p>
          <p className="text-sm">
            {`Właścicielem marki ${process.env.NEXT_PUBLIC_WEBSITE_TITLE} jest: `}
            Deweloperskie&nbsp;Prosta&nbsp;Spółka&nbsp;Akcyjna
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
