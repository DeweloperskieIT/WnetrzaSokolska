import { SectionHeading } from "@/components/customElements/custom-ui";
import { InfoBlocksProps } from "@/components/customElements/texts-images";

export const InfoBlocksSectionData: InfoBlocksProps = {
  info: [
    {
      icon: "/apartament126/s8/1.webp",
      header: "ZAKUP OD PROFESJONALISTY",
      paragraph:
        "Decyzja o zakupie nieruchomości jest jedną z najważniejszych decyzji finansowych Twojego życia. Postaw na jakość stojącą za profesjonalnym inwestorem - dokonaj zakupu w oparciu o fakturę VAT, z pełną rękojmią na prace aranżacyjne.",
    },
    {
      icon: "/apartament126/s8/2.webp",
      header: "INDYWIDUALNY OPIEKUN TRANSAKCJI",
      paragraph:
        "Apartament Premium wymaga obsługi premium, realizowanej od początku do końca przez przypisanego do Ciebie opiekuna transakcji, który weźmie na siebie ciężar formalności.",
    },
    {
      icon: "/apartament126/s8/3.webp",
      header: "PRZEŁAM BARIERY FINANSOWE",
      paragraph:
        "Jeśli tylko posiadasz inną nieruchomość, może ona posłużyć za Twój wkład własny do kredytu. Nie pozwól, żeby bariera finansowa stanęła na drodze do inwestycji w prestiż.",
    },
  ],
  header: (
    <SectionHeading top="INTELIGENTNY WYBÓR" bottom="NA WYCIĄGNIĘCIE RĘKI" />
  ),
};
