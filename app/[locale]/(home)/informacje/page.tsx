import React from "react";
import PrivacyPolicyGenerator, { PolicySection } from "./PolicyGenerator";

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
      "Na podstawie przepisów Rozporządzenia Parlamentu Europejskiego i Rady Unii Europejskiej 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (dalej „RODO”), jesteśmy zobowiązani przedstawić informacje dotyczące przetwarzania Twoich danych osobowych:",
      "Administratorem Twoich danych osobowych jest spółka Deweloperskie Prosta Spółka Akcyjna z siedzibą w Katowicach (dalej: „Administrator”) adres: 40-265 Katowice, ul. Murckowska 14C, wpisana do Rejestru Przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez Sąd Rejonowy Katowice-Wschód w Katowicach, VIII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS: 0001030478, NIP: 6343022518, REGON: 525018864, kapitał akcyjnego: 100.000,00 zł, opłacony w całości.",
      "Administrator wyznaczył adres kontaktowy w sprawach związanych z ochroną danych osobowych dla osób, których dane dotyczą: ul. Murckowska 14C, 40-265 Katowice. Celem bieżącego monitorowania prawidłowego przestrzegania zasad ochrony danych osobowych powołany został Inspektor Ochrony Danych Osobowych. Może się Pani/Pan z nim skontaktować: ",
      "⎯ elektronicznie pod adresem e-mail: iodo@deweloperskie.pl lub ",
      "⎯ telefonicznie pod nr telefonu: +48 666 000 999.",
    ],
    listItems: [
      {
        text: "Cele przetwarzania danych osobowych.",
        description: "Przetwarzamy Twoje dane osobowe w celu:",
        children: [
          {
            text: "nawiązania kontaktu oraz przedstawienia oferty naszych usług, a w szczególności oferty sprzedaży lokali mieszkalnych oraz oferty pożyczki na zakup nieruchomości,",
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
          "Podanie danych w formularzu przez Użytkownika jest dobrowolne.",
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
        text: "7.	Podanie danych osobowych.",
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
  {
    id: "polityka",
    header: "Polityka Prywatności oraz polityka stosowania plików cookies:",
    description: [
      `Polityka skierowana jest do użytkowników strony internetowej wnetrza.deweloperskie.pl`,
      "W Polityce zostały opisane zasady gromadzenia oraz wykorzystywania danych użytkowników serwisu, które są gromadzone bezpośrednio od nich.",
      "Na podstawie przepisów Rozporządzenia Parlamentu Europejskiego i Rady Unii Europejskiej 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (dalej „RODO”), jesteśmy zobowiązani przedstawić informacje dotyczące przetwarzania Twoich danych osobowych:",
      "Administratorem Twoich danych osobowych jest spółka <strong>Deweloperskie Prosta Spółka Akcyjna z siedzibą w Katowicach</strong> (dalej: „Administrator”) adres: 40-265 Katowice, ul. Murckowska 14C, wpisana do Rejestru Przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez Sąd Rejonowy Katowice-Wschód w Katowicach, VIII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS: 0001030478, NIP: 6343022518, REGON: 525018864, kapitał akcyjnego: 100.000,00 zł, opłacony w całości.",
      "Administrator wyznaczył adres kontaktowy w sprawach związanych z ochroną danych osobowych dla osób, których dane dotyczą: ul. Murckowska 14C, 40-265 Katowice. Celem bieżącego monitorowania prawidłowego przestrzegania zasad ochrony danych osobowych powołany został Inspektor Ochrony Danych Osobowych. Może się Pani/Pan z nim skontaktować: ",
      "⎯ elektronicznie pod adresem e-mail: iodo@deweloperskie.pl lub ",
      "⎯ telefonicznie pod nr telefonu: +48 666 000 999.",
    ],
    listItems: [
      {
        text: "Definicje użytych pojęć w Polityce prywatności.",
        children: [
          {
            text: "<strong>Administrator</strong> - Deweloperskie Prosta Spółka Akcyjna z siedzibą w Katowicach.",
          },
          {
            text: "<strong>RODO </strong> - rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z 27.04.2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE.",
          },
          {
            text: "<strong>Dane osobowe </strong> - w rozumieniu RODO: informacje o osobie fizycznej zidentyfikowanej lub możliwej do zidentyfikowania poprzez jeden bądź kilka szczególnych czynników określających fizyczną, fizjologiczną, genetyczną, psychiczną, ekonomiczną, kulturową lub społeczną tożsamość, w tym IP urządzenia, identyfikator internetowy oraz informacje gromadzone za pośrednictwem plików cookie oraz innej podobnej technologii.",
          },
          {
            text: "<strong>Polityka </strong> - niniejsza Polityka prywatności.",
          },
          {
            text: "<strong>Pliki cookie </strong> - to niewielkie pliki tekstowe wysyłane do przeglądarki przez witrynę, która jest w danym momencie odwiedzana. Pozwalają jej zapamiętać informacje na temat Twojej wizyty. Dzięki temu przy kolejnych odwiedzinach witryna jest łatwiejsza w obsłudze i lepiej dostosowana do Twoich preferencji.",
          },
          {
            text: "<strong>Serwis </strong> - serwis internetowy prowadzony przez Administratora pod adresem wnętrza.deweloperskie.pl.",
          },
          {
            text: "<strong>Użytkownik </strong> - każda osoba fizyczna odwiedzająca Serwis lub korzystająca z jednej albo kilku usług czy funkcjonalności opisanych w Polityce.",
          },
        ],
      },
      {
        text: "Zakres zbieranych danych.",
        children: [
          {
            text: "Serwis umożliwia Pani/u kontaktowanie się z Administratorem i przekazanie mu Pani/a danych identyfikacyjnych, kontaktowych, a także związanych z treścią wiadomości.",
          },
          {
            text: "Dane osobowe użytkownika, które Administrator przetwarza, to jego: imię, adres e-mail, numer telefonu oraz ewentualne dane osobowe zamieszczone w wiadomości adresowanej do administratora.",
          },
        ],
      },
      {
        text: "Źródło danych.",
        children: [
          {
            text: "Jeżeli kontaktowała się Pani/Pan z Administratorem, dane zostały udostępnione nam bezpośrednio od Pani/a.",
          },
          {
            text: "Jeżeli Pani/a dane zostały przekazane w związku z załatwianą sprawą przez osobę, która tę sprawę skierowała do Administratora, to źródłem danych jest ta osoba. W takim wypadku Administrator otrzymuje dane identyfikacyjne, adresowe i związane ze sprawą, jak opis sprawy. ",
          },
        ],
      },
      {
        text: "Cel i podstawa prawna przetwarzania danych osobowych.",
        description: "Pani/a dane mogą być przetwarzane w celu:",
        children: [
          {
            text: "zapewnienia bezpieczeństwa w ramach Serwisu oraz dostosowywania treści do potrzeb użytkowników na podstawie prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO)",
          },
          {
            text: "udzielania odpowiedzi na zadane pytania, przekazania zamówionej oferty i prowadzenia korespondencji w celu załatwienia sprawy, w tym przedstawienie oferty naszych usług, a w szczególności oferty sprzedaży nieruchomości oraz oferty umowy pożyczki na zakup nieruchomości, na podstawie Pani/a zgody i prawnie uzasadnionego interesu administratora, jakim jest realizowanie żądań użytkowników (art. 6 ust. 1 lit. a i f RODO).",
          },
          { text: "nawiązania kontaktu oraz przedstawienia " },
          { text: "archiwizowania danych zgodnie z przepisami prawa" },
          { text: "utrzymaniem kontaktu z Użytkownikami" },
        ],
      },
      {
        text: "Prawo do wycofania zgody.",
        description:
          "Zgodę na przetwarzanie danych kontaktowych może Pani/Pan wycofać w dowolnym momencie kontaktując się z Administratorem. Wycofanie zgody może utrudnić lub uniemożliwić kontakt z Panią/em.",
      },
      {
        text: "Obowiązek lub dobrowolność podania danych.",
        description:
          "Podanie danych przez Panią/a w celach związanych z obsługą sprawy jest dobrowolne, ale niezbędne. Ich niepodanie może utrudnić lub uniemożliwić kontakt z Panią/em.",
      },
      {
        text: "Uprawnienia wynikające z RODO w zakresie przetwarzanych danych.",
        description: "Ma Pani/Pan prawo:",
        children: [
          {
            text: "Żądać od Administratora wglądu do Pani/a danych, a także otrzymania ich kopii, na podstawie art. 15 RODO,",
          },
          {
            text: "Żądać od Administratora sprostowania lub poprawienia danych, na postawie art. 16 RODO - w odniesieniu do żądania sprostowania danych, gdy zauważy Pani/Pan, że dane są nieprawidłowe lub niekompletne;",
          },
          {
            text: "Żądać od Administratora usunięcia danych osobowych, na podstawie art. 17 RODO;",
          },
          {
            text: "Żądać od Administratora ograniczenia przetwarzania danych osobowych, na podstawie art. 18 RODO np. gdy zauważy Pani/Pan, że dane są nieprawidłowe może Pani/Pan żądać ograniczenia przetwarzania swoich danych na okres pozwalający nam sprawdzić prawidłowość tych danych;",
          },
          {
            text: "Wniesienia skargi w związku z przetwarzaniem przez Administratora Pani/Pana danych osobowych do organu nadzorczego tj. Prezesa Urzędu Ochrony Danych Osobowych na adres ul. Stawki 2, 00-193 Warszawa, gdy uznasz, że przetwarzanie Twoich danych osobowych narusza przepisy RODO.",
          },
        ],
      },
      {
        text: "Odbiorcy Pani/Pana danych osobowych.",
        description: "Dane osobowe mogą zostać przekazywane:",
        children: [
          {
            text: "dostawcom usług IT, ",
          },
          {
            text: "dostawcom usług serwisowych, ",
          },
          {
            text: "kancelariom prawnym/ przedsiębiorstwom świadczącym usługi prawne w zakresie analizy prawnej oraz finansowej, w zakresie świadczonych usług.",
          },
        ],
        additionalDescription:
          "Wymienione powyżej grupy podmiotów przetwarzają dane osobowe na podstawie umowy z Administratorem i zgodnie z naszymi poleceniami.",
      },
      {
        text: "Czas przechowywania danych.",
        description:
          "Dane będą przetwarzane przez czas potrzebny do rozwiązania przedstawionej we wniosku sprawy, jak również przez czas potrzebny na wykazanie, że ją rozwiązaliśmy, czyli do czasu przedawnienia ewentualnych roszczeń. Dane będą przetwarzane również przez czas prowadzenia działań marketingowych lub do czasu wniesienia przez Panią/Pana sprzeciwu wobec dalszego przetwarzania danych w celach marketingowych. Wyjątkiem, jest sytuacja, gdy Administrator wykaże istnienie ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Pana/Pani interesów, praw i wolności. Dane będą przetwarzane również do czasu cofnięcia przez Panią/Pana, którejkolwiek zgody zamieszczonej pod wnioskiem kontaktowym na stronie www.wnetrza.deweloperskie.pl",
      },
      {
        text: "Przekazywanie danych do państwa trzeciego lub organizacji międzynarodowej.",
        description:
          "Dane osobowe nie będą przekazywane do Państw trzecich ani organizacji międzynarodowych.",
      },
      {
        text: "Pliki cookies.",
        description: [
          "Dane z plików cookies przetwarzane są w szczególności w celach technicznych oraz do zbierania ogólnych informacji statystycznych związanych z korzystaniem przez Panią/Pana z strony www.wnetrza.deweloperskie.pl.",
          "Przetwarzanie danych z plików cookie odbywa się na podstawie udzielonej przez Panią/Pana zgody (art. 6 ust. 1 lit a RODO), ale także jako prawnie uzasadniony interes Administratora, który polega na marketingu bezpośrednim (art. 6 ust. 1 lit f RODO) Administratora.",
          "Administrator wykorzystuje następujące rodzaje plików cookies:",
        ],
        children: [
          {
            text: "<u>Pliki cookies niezbędne</u> – pomagają ulepszać usługi i zwiększać komfort korzystania z Serwisu Administratora i są wykorzystywane w szczególności w celu konfiguracji Serwisu; ",
          },
          {
            text: "<u>Pliki cookies analityczne </u> – zbierają informacje o tym w jaki sposób użytkownicy korzystają z Serwisu. Ten rodzaj plików cookies nie zbiera informacji pozwalających na zidentyfikowanie osoby fizycznej, ale może zbierać adres IP urządzenia użytkownika. Informacje zbierane za pomocą plików cookies wykorzystywane są do ulepszania Serwisu, dostosowania działania Serwisu do preferencji Użytkownika oraz tworzenia statystyk użytkowania Serwisu;",
          },
          {
            text: "<u>Pliki cookies reklamowe </u> – pozwalają wyświetlać reklamy, które odpowiadają preferencjom użytkowników.",
          },
        ],
        additionalDescription: [
          "Odbiorcami Pani/Pana danych – mogą być podmioty zajmujące się hostingiem naszej strony www.pozyczki.deweloperskie.pl oraz ewentualnie podmioty zajmujące się usługami technicznymi dla witryny www.pozyczki.deweloperskie.pl ",
          "<strong>Profilowanie</strong>",
          "Nie podejmujemy zautomatyzowanych decyzji i nie stosujemy profilowania w odniesieniu do Pani/Pana danych. ",
        ],
      },
    ],
  },
  {
    id: "podmioty",
    header:
      "Lista podmiotów przetwarzających dane osobowe, na podstawie umów o współpracę w zakresie świadczonych usług:",
    bulletList: {
      children: [
        { text: "Dostawcy usług IT," },
        { text: "dostawcy usług serwisowych," },
        {
          text: "kancelarie prawne/ przedsiębiorstwa świadczące usługi prawne w zakresie analizy prawnej oraz finansowej na podstawie umowy powierzenia, w ramach grupy CUW DEWELOPERSKIE.",
        },
      ],
    },
  },
];
