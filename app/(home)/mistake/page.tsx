import { QuestionContactForm } from "@/components/customElements/forms/QuestionContactForm";
import AccordionChevronTriangle from "@/components/customElements/images/accordionChevronTriangle";
import TextPlusSinglePhoto from "@/components/customElements/texts-images/TextPlusSinglePhoto";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { DialogDescription } from "@radix-ui/react-dialog";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="landing-page pt-20 gap-32">
      {/* First section - Info */}
      <TextPlusSinglePhoto
        content={
          <div className="flex flex-col items-start gap-4 pr-20">
            <span className="landing-page-text-common-1">
              Finansowanie na dokończenie budowy
            </span>
            <span className="landing-page-text-common-2">
              Specjalizujemy się w branży deweloperskiej, dzięki czemu w pełni
              rozumiemy wyzwania, z jakimi mierzysz się jako deweloper.
              Oferujemy elastyczne podejście do finansowania, dostosowując
              rozwiązania do Twojej sytuacji. Sprawny proces finansowania jest
              naszą odpowiedzią na obecne standardy rynku.
            </span>
          </div>
        }
        img="/images/mainpage/fblogoyellow1.png"
        imgClassName="max-h-[200px] lg:max-h-full"
      />
      {/* Second section - More info */}
      <div className="padding-element flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <span className="landing-page-text-common-1">
            Rozumiemy potrzeby deweloperów
          </span>
          <span className="landing-page-text-common-2">
            Na podstawie codziennego kontaktu z deweloperami doskonale zdajemy
            sobie sprawę, że przy pozyskiwaniu finansowania na dokończenie
            budowy istnieją dwie kluczowe potrzeby:
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-20 justify-evenly w-full items-center text-black font-bold">
          <div className="landing-page-text-square-1">
            <span>Czas</span>
            <span>
              Nasz prosty i szybki proces jest rezultatem zrealizowanych
              dotychczas pożyczek.
            </span>
          </div>
          <div className="landing-page-text-square-1">
            <span>Bezpieczeństwo</span>
            <span>
              Opieramy biznes na partnerskich relacjach. Dzięki nam zyskasz
              spokojny sen.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 landing-page-text-common-2">
          <span>
            Rozwiązanie skrojone na miarę potrzeb branży deweloperskiej to:
          </span>
          <span>
            Brak obciążeń hipotecznych nieruchomości
            <br />
            Zagwarantowane przedłużenie pożyczki w razie problemów ze sprzedażą
            <br />
            Kapitał oraz odsetki spłacone z przychodów ze sprzedaży
            <br />
            Przejrzyste i uczciwe procedury w razie windykacji
          </span>
        </div>
      </div>
      {/* Third section - Masz Pytania? */}
      <div className="padding-element">
        <div className="flex flex-col md:flex-row w-full items-center gap-10 ">
          <div className="flex flex-col gap-4">
            <span className="landing-page-text-common-1">Masz pytania?</span>
            <span className="landing-page-text-common-2">
              Chciałbyś porozmawiać z naszym specjalistą o swojej sytuacji?
              <br />W krótkiej rozmowie możemy wstępnie omówić możliwe
              rozwiązania.
            </span>
          </div>
          <Drawer>
            <DrawerTitle className="hidden">Przycisk Formularz</DrawerTitle>
            <DrawerTrigger className="text-nowrap h-fit font-bold text-dark text-2xl bg-accent1 p-4">
              Skontaktuj się z nami
            </DrawerTrigger>
            <DrawerContent className="flex-center bg-dark rounded-none">
              <DialogDescription className="hidden">
                Formularz
              </DialogDescription>
              <QuestionContactForm
                className="pt-6"
                sendTo={process.env.QUESTIONCONTACTDESTINATION}
              />
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      {/* Fourth section - Masz Pytania? */}
      <div className="padding-element flex flex-col gap-4">
        <span className="landing-page-text-common-1">Dlaczego my?</span>
        <span className="landing-page-text-common-2">
          Zauważyliśmy, że na rynku brakuje firm zajmujących się finansowaniem
          deweloperów, które specjalizują się wyłącznie w tej branży. Brak
          specjalizacji prowadzi do niezrozumienia istoty działalności oraz
          doświadczeń związanych z tworzeniem i przekształcaniem otaczającej nas
          przestrzeni. Wpływa to negatywnie na jakość oferowanych rozwiązań.
        </span>
        <span className="landing-page-text-common-2">
          Postanowiliśmy stworzyć firmę Deweloperskie, która poprzez markę
          Pożyczki Deweloperskie oferuje finansowanie dostosowane do potrzeb
          branży. Nasz prosty i szybki proces jest efektem naszego doświadczenia
          oraz głębokiego zrozumienia tego sektora. Charakteryzujemy się
          elastycznością w dopasowywaniu rozwiązań do indywidualnych potrzeb
          klientów.
        </span>
        <span className="landing-page-text-common-1 text-2xl">
          Sprawdź, jak możemy Ci pomóc!
        </span>
      </div>
      {/* Fifth section - Short FAQ */}
      <div className="padding-element flex flex-col gap-4">
        <span className="landing-page-text-common-1">Najczęstsze pytania</span>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem
              value="item-1"
              className="border-b-2 border-light mb-4"
            >
              <AccordionTrigger
                showChevron
                chevron={<AccordionChevronTriangle />}
                className="landing-page-accordion-text-title"
              >
                Czy nie zablokujemy sprzedaży?
              </AccordionTrigger>
              <AccordionContent className="landing-page-accordion-text-paragraph">
                Jesteśmy w stanie zabezpieczyć się w taki sposób, żeby nie
                ograniczać sprzedaży deweloperowi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-b-2 border-light mb-4"
            >
              <AccordionTrigger
                showChevron
                chevron={<AccordionChevronTriangle />}
                className="landing-page-accordion-text-title"
              >
                Kiedy przelejemy kapitał?
              </AccordionTrigger>
              <AccordionContent className="landing-page-accordion-text-paragraph">
                Każda transakcja różni się między sobą czasem trwania. Jednak
                cechami wspólnymi jest nasza determinacja i chęć skutecznego, a
                jednocześnie jak najszybszego zamknięcia całego procesu.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="">
              <AccordionTrigger
                showChevron
                chevron={<AccordionChevronTriangle />}
                className="landing-page-accordion-text-title"
              >
                Jakie jest bezpieczeństwo transakcji?
              </AccordionTrigger>
              <AccordionContent className="landing-page-accordion-text-paragraph">
                NEEDS COPYWRITING
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/* Sixth section - Formularz */}
      <div className="padding-element flex items-center md:items-start flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-6 flex-1">
          <span className="landing-page-text-common-1">
            Formularz kontaktowy
          </span>
          <span className="landing-page-text-common-2">
            Opowiedz nam o swojej sytuacji i potrzebach. Wyjaśnimy Ci jak
            działamy oraz w jaki sposób możemy Ci pomóc. Po wypełnieniu
            formularza nasz specjalista skontaktuje się z Tobą telefonicznie.
          </span>
          <Image
            src={"/images/mainpage/fblogoyellow1.png"}
            alt="logo"
            height={100}
            width={100}
          />
        </div>
        <div className="flex-1">
          <QuestionContactForm disableTitle />
        </div>
      </div>
      {/* Seventh section - Footer */}
      <div className="-mt-20 padding-element flex justify-between flex-col md:flex-row bg-accent1 text-dark font-bold text-lg md:text-2xl">
        <a
          className=" cursor-pointer p-3"
          href="whatsapp://send?phone=48666000999"
        >
          666 000 999
        </a>
        <a
          className="cursor-pointer p-3"
          href="mailto:pozyczki@deweloperskie.pl?subject=Pytanie"
        >
          POZYCZKI@DEWELOPERSKIE.PL
        </a>
        <div></div>
      </div>
    </div>
  );
};

export default page;
