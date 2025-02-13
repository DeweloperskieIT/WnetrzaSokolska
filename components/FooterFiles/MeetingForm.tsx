"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Form } from "../ui/form";
import FormItemInput from "../form-components/formItemInput";

type Props = { className?: string };

const MeetingForm = (props: Props) => {
  const [status, setStatus] = useState<"success" | "failure" | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);

  // Zod schema validation
  const formSchema = z.object({
    imie: z.string().min(2, { message: "Imię jest wymagane" }),
    nazwisko: z.string().min(2, { message: "Nazwisko jest wymagane" }),
    email: z.string().email({ message: "Proszę podać właściwy adres e-mail" }),
    telefon: z.string().optional(),
    message: z.string().optional(),
    zgodaPrzetwarzanieDanych: z.boolean().refine((val) => val === true, {
      message: "Zgoda jest wymagana",
    }),
    zgodaPrzetwarzanieEmail: z.boolean().refine((val) => val === true, {
      message: "Zgoda jest wymagana",
    }),
    zgodaPrzetwarzanieTelefon: z.boolean().refine((val) => val === true, {
      message: "Zgoda jest wymagana",
    }),
  });

  // React Hook Form setup
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imie: "",
      nazwisko: "",
      email: "",
      telefon: "",
      message: "",
      zgodaPrzetwarzanieDanych: false,
      zgodaPrzetwarzanieEmail: false,
      zgodaPrzetwarzanieTelefon: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSending(true);

    // Create FormData to send to the server
    const formData = new FormData();
    formData.append("imie", values.imie);
    formData.append("nazwisko", values.nazwisko);
    formData.append("email", values.email);
    formData.append("telefon", values.telefon || "");
    formData.append("message", values.message || "");
    formData.append(
      "zgodaPrzetwarzanieDanych",
      values.zgodaPrzetwarzanieDanych.toString()
    );
    formData.append(
      "zgodaPrzetwarzanieEmail",
      values.zgodaPrzetwarzanieEmail.toString()
    );
    formData.append(
      "zgodaPrzetwarzanieTelefon",
      values.zgodaPrzetwarzanieTelefon.toString()
    );

    try {
      const response = await fetch("/api/email/generic", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setStatus("success");
    } catch (error) {
      console.error("Failed to submit the form", error);
      setStatus("failure");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div
      className={cn(
        "limited-width  flex-center justify-start flex-col w-full px-6 lg:p-6 md:max-h-full pb-4",
        props.className
      )}
    >
      <h3 className="text-2xl md:text-4xl text-accent1 font-bold w-full text-left pb-10">
        Umów się na spotkanie.
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-dark w-full max-w-screen-xl "
        >
          <div className="grid grid-cols-2 gap-6 w-full justify-between">
            {/* Imię */}
            <FormItemInput
              control={form.control}
              name="imie"
              label="Imię*"
              type="text"
              placeholder="Imię"
              className="border-b-[1px] border-[#A9A9A9] w-full h-fit transition-all"
              descriptionClass=""
              inputClass="text-xl text-light bg-transparent h-12"
              labelClass="hidden"
            />

            {/* Nazwisko */}
            <FormItemInput
              control={form.control}
              name="nazwisko"
              label="Nazwisko*"
              type="text"
              placeholder="Nazwisko"
              className="border-b-[1px] border-[#A9A9A9] w-full h-fit transition-all"
              descriptionClass=""
              inputClass="text-xl text-light bg-transparent h-12"
              labelClass="hidden"
            />
            {/* Email */}
            <FormItemInput
              control={form.control}
              name="email"
              label="Email*"
              type="email"
              placeholder="Email"
              className="border-b-[1px] border-[#A9A9A9] w-full h-fit transition-all"
              descriptionClass=""
              inputClass="text-xl text-light bg-transparent h-12"
              labelClass="hidden"
            />

            {/* Telefon */}
            <FormItemInput
              control={form.control}
              name="telefon"
              label="Telefon"
              type="tel"
              placeholder="Telefon"
              className="border-b-[1px] border-[#A9A9A9] w-full h-fit transition-all"
              descriptionClass=""
              inputClass="text-xl text-light bg-transparent h-12"
              labelClass="hidden"
            />
          </div>

          {/* Jak możemy pomóc? */}
          <FormItemInput
            control={form.control}
            name="message"
            label="Jak możemy pomóc?"
            type="textarea"
            placeholder="Opisz, jak możemy Ci pomóc"
            className="border-b-[1px] border-[#A9A9A9] w-full h-fit transition-all"
            descriptionClass=""
            inputClass="text-xl text-light bg-transparent h-12 border-none"
            labelClass="hidden"
          />

          {/* Zgoda Przetwarzanie Danych */}
          <FormItemInput
            control={form.control}
            name="zgodaPrzetwarzanieDanych"
            label="Zgoda na przetwarzanie danych osobowych*"
            type="switch"
            description={
              "Oświadczam, że zapoznałam/em się z zasadami przetwarzania moich danych osobowych zawartych w "
            }
            href={"/rodo"}
            hrefDescription={
              "klauzuli informacyjnej oraz polityką prywatności serwisu internetowego."
            }
          />

          {/* Zgoda Przetwarzanie Email */}
          <FormItemInput
            control={form.control}
            name="zgodaPrzetwarzanieEmail"
            label="Zgoda na przetwarzanie adresu email*"
            type="switch"
            description={
              "Wyrażam zgodę na przetwarzanie moich danych osobowych w postaci adresu e-mail przez Deweloperskie Prosta Spółka Akcyjna z siedzibą w Katowicach, ul. Murckowska 14C, 40-265 Katowice, w celu otrzymywania drogą elektroniczną na adres e-mail informacji handlowych (tj. ofert, informacji o produktach i usługach), dotyczących produktów i usług oferowanych przez Deweloperskie Prosta Spółka Akcyjna z siedzibą w Katowicach, ul. Murckowska 14C, 40-265 Katowice oraz przez partnerów, z których usług korzystamy w zakresie obrotu nieruchomościami "
            }
            href={"/polityka-prywatnosci"}
            hrefDescription={"(lista podmiotów dostępna tutaj)."}
          />

          {/* Zgoda Przetwarzanie Telefon */}
          <FormItemInput
            control={form.control}
            name="zgodaPrzetwarzanieTelefon"
            label="Zgoda na przetwarzanie numeru telefonu*"
            type="switch"
            description={
              "Wyrażam zgodę na przetwarzanie moich danych osobowych w postaci numeru telefonu od Deweloperskie Prosta Spółka Akcyjna z siedzibą w Katowicach, ul. Murckowska 14C, 40-265 Katowice, w celu otrzymywania drogą telefoniczną na wskazany przeze mnie numer telefonu informacji handlowych (tj. ofert, informacji o produktach i usługach), dotyczących produktów i usług oferowanych przez Inwestycje Deweloperskie Prosta Spółka Akcyjna z siedzibą w Katowicach, ul. Murckowska 14C, 40-265 Katowice oraz przez partnerów, z których usług korzystamy w zakresie obrotu nieruchomościami "
            }
            href={"/polityka-prywatnosci"}
            hrefDescription={"(lista podmiotów dostępna tutaj)."}
          />

          {/* Submit Button */}
          <div className="flex justify-between gap-6">
            <Button
              type="submit"
              disabled={isSending}
              className=" self-start px-20 text-xl bg-accent1 rounded-none text-dark hover:brightness-110 hover:bg-accent1 transition-all"
            >
              {isSending ? (
                <ClipLoader color={"dark"} loading={isSending} size={25} />
              ) : (
                "Wyślij wiadomość"
              )}
            </Button>
            {status === "success" && (
              <p className="text-green-500">Wiadomość wysłana!</p>
            )}
            {status === "failure" && (
              <p className="text-red-500">
                Coś poszło nie tak, prosze spróbować później!
              </p>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MeetingForm;
