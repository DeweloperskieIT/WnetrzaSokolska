import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavigationMenuItems } from "./HeaderMenu";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import PhoneIcon from "@/components/HeaderFiles/ico-tel.png";
import EmailIcon from "@/components/HeaderFiles/ico-mail.png";
import OfficeIcon from "@/components/HeaderFiles/ico-office.png";
import FormIcon from "@/components/HeaderFiles/ico-form.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import DOMPurify from "isomorphic-dompurify";

type Props = {
  className?: string;
  data: NavigationMenuItems[];
};

const HeaderMobileSidebar = ({ className, data }: Props) => {
  return (
    <Sidebar className="lg:hidden">
      <SidebarHeader
        className="!bg-dark border-b py-4 text-accent1 font-bold text-3xl "
        aria-describedby="nawigacja"
      >
        Nawigacja
      </SidebarHeader>
      <SidebarContent
        aria-describedby="nawigacja"
        className="!bg-websiteBackground2"
      >
        <SidebarGroup aria-describedby="nawigacja">
          <Accordion
            type="single"
            collapsible
            defaultValue={"kontakt"}
            aria-describedby="nawigacja"
          >
            {data.map((navGroup, i) => {
              return (
                <AccordionItem
                  key={i}
                  value={navGroup.menu}
                  aria-describedby="nawigacja"
                >
                  <AccordionTrigger
                    className="text-light pb-2 border-b text-3xl aria-expanded:text-accent1 aria-expanded:border-accent1"
                    aria-describedby="nawigacja"
                  >
                    {navGroup.menu}
                  </AccordionTrigger>
                  <AccordionContent
                    className="flex flex-col gap-2 w-full items-center"
                    aria-describedby="nawigacja"
                  >
                    {navGroup.destinations.map((destiantion, i) => {
                      return (
                        <div key={i} className="relative w-full">
                          <Link
                            href={destiantion.destination}
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(destiantion.name),
                            }}
                          />
                          <SidebarTrigger className="absolute size-full opacity-0" />{" "}
                        </div>
                      );
                    })}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
            <AccordionItem value={"kontakt"} aria-describedby="nawigacja">
              <AccordionTrigger
                className="text-light pb-2 border-b text-3xl aria-expanded:text-accent1 aria-expanded:border-accent1"
                aria-describedby="nawigacja"
              >
                Kontakt
              </AccordionTrigger>
              <AccordionContent
                className="flex flex-col gap-2 w-full items-center"
                aria-describedby="nawigacja"
              >
                <Link
                  href={`tel:+48666000999`}
                  className={cn("flex flex-row gap-2 w-full relative")}
                >
                  <SidebarTrigger className="absolute size-full opacity-0" />{" "}
                  <Image
                    src={PhoneIcon}
                    alt="Phonme Icon"
                    className="brightness-[99999] "
                  />
                  Zadzwoń
                </Link>
                <Link
                  href={"mailto:kontakt@deweloperskie.pl"}
                  className={cn("flex flex-row gap-2 w-full relative")}
                >
                  <SidebarTrigger className="absolute size-full opacity-0" />{" "}
                  <Image
                    src={EmailIcon}
                    alt="Email Icon"
                    className="brightness-[99999]"
                  />
                  Email
                </Link>
                <Link
                  href={"/#adres"}
                  className={cn("flex flex-row gap-2 w-full relative")}
                >
                  <SidebarTrigger className="absolute size-full opacity-0" />{" "}
                  <Image
                    src={OfficeIcon}
                    alt="Office Icon"
                    className="brightness-[99999]"
                  />
                  Adres
                </Link>
                <Link
                  href={"/#formularz"}
                  className={cn("flex flex-row gap-2 w-full relative")}
                >
                  <SidebarTrigger className="absolute size-full opacity-0" />{" "}
                  <Image
                    src={FormIcon}
                    alt="Form Icon"
                    className="brightness-[99999]"
                  />
                  Formularz
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SidebarGroup>
      </SidebarContent>
      {/* <SidebarFooter /> */}
    </Sidebar>
  );
};

export default HeaderMobileSidebar;
