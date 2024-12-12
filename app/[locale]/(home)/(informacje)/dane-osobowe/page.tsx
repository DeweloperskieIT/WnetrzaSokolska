import React from "react";
import PrivacyPolicyGenerator, {
  PolicySection,
} from "@/app/[locale]/(home)/(informacje)/PolicyGenerator";
import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  return <PrivacyPolicyGenerator data={PrivacyPolicyTextData} />;
};

export default page;

const PrivacyPolicyTextData: PolicySection[] = [
  {
    id: "klauzula",
    header: "Klauzula informacyjna dotycząca przetwarzania danych osobowych:",
    description: [
      "Na podstawie przepisów Rozporządzenia Parlamentu Europejskiego i Rady Unii Europejskiej 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (dalej „RODO”), jesteśmy zobowiązani przedstawić informacje dotyczące przetwarzania Twoich danych osobowych:",
      "Administratorem Twoich danych osobowych jest spółka Deweloperskie Prosta Spółka Akcyjna z siedzibą w Katowicach (dalej: „Administrator”) adres: 40-265 Katowice, ul. Murckowska 14C, wpisana do Rejestru Przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez Sąd Rejonowy Katowice-Wschód w Katowicach, VIII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS: 0001030478, NIP: 6343022518, REGON: 525018864, kapitał akcyjnego: 100.000,00 zł, opłacony w całości.",
      "Administrator wyznaczył adres kontaktowy w sprawach związanych z ochroną danych osobowych dla osób, których dane dotyczą: ul. Murckowska 14C, 40-265 Katowice. Celem bieżącego monitorowania prawidłowego przestrzegania zasad ochrony danych osobowych powołany został Inspektor Ochrony Danych Osobowych. Może się Pani/Pan z nim skontaktować:",
      "⎯ elektronicznie pod adresem e-mail: iodo@deweloperskie.pl lub<br/>⎯ telefonicznie pod nr telefonu: +48 666 000 999.",
      "",
    ],
    listItems: [
      {
        text: "Cele przetwarzania danych osobowych.",
        description: "Przetwarzamy Twoje dane osobowe w celu:",
        children: [
          {
            text: "nawiązania kontaktu oraz przedstawienia oferty naszych produktów i usług oferowanych przez Administratora i podmioty współpracujące z nim,",
          },
          { text: "administrowania serwisem" },
          { text: "zarządzania treścią serwisu" },
          {
            text: "przekazania materiałów promujących usługi własne administratora danych",
          },
          { text: "archiwizowania danych zgodnie z przepisami prawa" },
          { text: "utrzymania kontaktu z Użytkownikami" },
        ],
      },
      {
        text: "Sposoby przetwarzania danych osobowych.",
        description:
          "Podanie danych przez wniosek / formularz przez Użytkownika jest dobrowolne.",
      },
      {
        text: "Podstawy prawne przetwarzania danych.",
        description: "Przetwarzamy dane na podstawie:",
        children: [
          {
            text: "prawnie uzasadnionego interesu polegającego na marketingu bezpośrednim usług własnych administratora danych oraz dochodzeniu roszczeń, ",
          },
          { text: "zapewnienia bezpieczeństwa osób i mienia," },
          { text: "realizacja umowy," },
          { text: "przepisów prawa." },
        ],
      },
      {
        text: "Prawa związane z przetwarzaniem danych osobowych.",
        description: "Posiadasz prawo do:",
        children: [
          { text: "dostępu do Twoich danych osobowych" },
          { text: "sprostowania Twoich danych osobowych" },
          { text: "wycofania zgody" },
          { text: "zapomnienia" },
          { text: "ograniczenia przetwarzania Twoich danych osobowych" },
          { text: "przenoszenia Twoich danych osobowych" },
          {
            text: "prawo do wniesienia sprzeciwu wobec przetwarzania danych",
          },
          {
            text: "prawo wniesienia skargi do organu nadzorczego tj. Prezesa Urzędu Ochrony Danych Osobowych na adres ul. Stawki 2, 00-193 Warszawa, gdy uznasz że przetwarzanie Twoich danych osobowych narusza przepisy RODO.",
          },
        ],
      },
      {
        text: "Okres przetwarzania Pani/Pana danych osobowych.",
        description:
          "Dane będą przetwarzane przez czas potrzebny do rozwiązania przedstawionej we wniosku kontaktowym sprawy, jak również przez czas potrzebny na wykazanie, że ją rozwiązaliśmy, czyli do czasu przedawnienia ewentualnych roszczeń. Dane będą przetwarzane również przez czas prowadzenia działań marketingowych lub do czasu wniesienia przez Panią/Pana sprzeciwu wobec dalszego przetwarzania danych w celach marketingowych. Wyjątkiem, jest sytuacja, gdy Administrator wykaże istnienie ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Pana/Pani interesów, praw i wolności. Dane będą przetwarzane również do czasu cofnięcia przez Panią/Pana, którejkolwiek zgody zamieszczonej pod wnioskiem kontaktowym na stronie www.wnetrza.deweloperskie.pl.",
      },
      {
        text: "Odbiorcy danych osobowych.",
        description:
          "Dane osobowe mogą zostać przekazywane np. dostawcom usług IT czy usług serwisowych, jednakże takie podmioty przetwarzają Twoje dane na podstawie umowy z Administratorem i zgodnie z naszymi poleceniami.",
      },
      {
        text: "Podanie danych osobowych.",
        description:
          "Podanie danych osobowych jest dobrowolne, lecz niezbędne do nawiązania kontaktu. Konsekwencją niepodania danych osobowych będzie brak możliwości nawiązania kontaktu.",
      },
      {
        text: "Zautomatyzowane podejmowanie decyzji i profilowanie.",
        description:
          "Dane osobowe nie będą wykorzystywane do zautomatyzowanego podejmowania decyzji, w tym profilowania, o którym mowa w art. 22 RODO.",
      },
      {
        text: "Przekazywanie danych osobowych poza teren EOG.",
        description:
          "Dane osobowe nie będą przekazywane do Państw trzecich ani organizacji międzynarodowych.",
      },
    ],
  },
];
