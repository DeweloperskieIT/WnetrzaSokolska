import React from "react";
import MeetingForm from "./MeetingForm";
import Image from "next/image";
import FacebookRedirect from "../customElements/buttons/FacebookRedirect";
import InstagramRedirect from "../customElements/buttons/InstagramRedirect";
import LinkedInRedirect from "../customElements/buttons/LinkedInRedirect";
import YoutubeRedirect from "../customElements/buttons/YoutubeRedirect";
import FooterLogo from "@/components/FooterFiles/foot-logo.webp";
import Link from "next/link";
import ImageWithFallback from "../ImageWithFallback";

type Props = {};

const NewMainFooter = (props: Props) => {
  return (
    <div className="bg-[#353535]" id="kontakt">
      <div className="flex flex-col gap-20 pt-20 w-full bg-[#F3F2ED] relative">
        <h2 className="font-normal text-dark text-2xl lg:text-6xl">
          SKONTAKTUJ SIĘ Z NAMI
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col w-full">
            <div className="h-[300px] px-20 flex flex-col text-[#5A5A5A] items-start justify-start w-full">
              <span className="text-2xl font-bold">Deweloperskie P.S.A.</span>
              <span className="text-2xl font-light">al. Murckowska 14C</span>
              <span className="text-2xl font-light pb-3">40-265 Katowice</span>
              <Link className="text-2xl font-light" href={"tel:+48666000999"}>
                +48 666 000 999
              </Link>
              <Link
                className="text-2xl font-light"
                href={"mailto:kontakt@deweloperskie.pl"}
              >
                kontakt@deweloperskie.pl
              </Link>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.9508809631184!2d19.04449227774605!3d50.25550167155585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x413591023b50db91%3A0x749413617e4fc061!2sDeweloperskie%20Prosta%20Sp%C3%B3%C5%82ka%20Akcyjna!5e0!3m2!1spl!2spl!4v1734343692387!5m2!1spl!2spl"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="!grayscale"
            ></iframe>
          </div>
          <div className="w-full pb-20">
            <MeetingForm />
          </div>
        </div>
        {/* Mobile */}
        {/* <Image
          src={"/images/graphics/przerwamobile.svg"}
          alt="colorline"
          width={1280}
          height={300}
          className="absolute w-full bottom-0 left-0 right-0 md:hidden block z-[2]"
        /> */}
        {/* 16/9 */}
        {/* <Image
          src={"/images/graphics/przerwazolta.svg"}
          alt="colorline"
          width={1280}
          height={300}
          className="absolute w-full bottom-0 left-0 right-0 md:block hidden xl:hidden  z-[2]"
        /> */}
        {/* Ultra wide */}
      </div>

      <footer className="py-20 px-2 flex flex-col gap-10 w-full items-center text-light">
        <div className="limited-width w-full">
          <ImageWithFallback
            fallback={"/images/logo/logo.png"}
            src={"/images/logo/logo.svg"}
            alt="logo"
            width={100}
            height={100}
            className="self-start filter-white"
          />
        </div>
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
              href={"https://aktywa.deweloperskie.pl"}
            >
              Aktywa Deweloperskie
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
            <h3 className="text-accent1 text-left text-xl font-bold">O nas</h3>
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
      <div className="flex flex-col gap-2 w-full bg-darkerGray items-center p-4 text-dark text-center relative pt-20">
        {/* Mobile */}
        <Image
          src={"/images/graphics/przerwazkoloremtele.svg"}
          alt="colorline"
          width={1280}
          height={300}
          className="absolute w-full top-1 left-0 right-0 md:hidden block z-[2] scale-x-110"
        />
        {/* 16/9 */}
        <Image
          src={"/images/graphics/przerwazkolorem.svg"}
          alt="colorline"
          width={1280}
          height={300}
          className="absolute w-full -top-1 left-0 right-0 md:block hidden xl:hidden  z-[2] scale-x-110"
        />
        {/* Ultra wide */}
        <Image
          src={"/images/graphics/przerwazkolorem169.svg"}
          alt="colorline"
          width={2560}
          height={300}
          className="absolute w-full -top-1 left-0 right-0 hidden xl:block z-[2] scale-x-110"
        />
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
  );
};

export default NewMainFooter;
