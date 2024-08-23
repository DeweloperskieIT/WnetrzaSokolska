"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const formSchema = z.object({
  telefon: z.string().optional(),
  email: z
    .string({ message: "Proszę podać właściwy adres email." })
    .email({ message: "Proszę podać właściwy adres email." }),

  formMessage: z.string().min(3, { message: "Prosimy o opisanie tematu" }),
  zgodaPrzetwarzanieDanych: z.boolean().refine((val) => val === true, {
    message: "Wymagane.",
  }),
  oświadczeniePrzetwarzanieDanych: z.boolean().refine((val) => val === true, {
    message: "Wymagane.",
  }),
  zgodaPrzetwarzanieEmail: z.boolean().refine((val) => val === true, {
    message: "Wymagane.",
  }),
  zgodaPrzetwarzanieTelefon: z.boolean().refine((val) => val === true, {
    message: "Wymagane.",
  }),
});

export interface QuestionContactFormProps {
  className?: string;
  sendTo?: string;
  disableTitle?: boolean;
}

export function QuestionContactForm({
  className,
  sendTo = "kontakt@deweloperskie.pl",
  disableTitle = false,
}: QuestionContactFormProps) {
  const [status, setStatus] = useState<"success" | "failure" | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      formMessage:
        "Umów mnie na prezentacje z moim indywidualnym opiekunem transakcji",
      zgodaPrzetwarzanieDanych: false,
      oświadczeniePrzetwarzanieDanych: false,
      zgodaPrzetwarzanieEmail: false,
      zgodaPrzetwarzanieTelefon: false,
      email: "",
      telefon: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSending(true);
    setStatus(null);
    const formData = new FormData();
    formData.append("formMessage", values.formMessage);
    formData.append("email", values.email);
    formData.append("telefon", values.telefon || "");
    formData.append(
      "zgodaPrzetwarzanieDanych",
      values.zgodaPrzetwarzanieDanych.toString()
    );
    formData.append(
      "oświadczeniePrzetwarzanieDanych",
      values.oświadczeniePrzetwarzanieDanych.toString()
    );
    formData.append(
      "zgodaPrzetwarzanieEmail",
      values.zgodaPrzetwarzanieEmail.toString()
    );
    formData.append(
      "zgodaPrzetwarzanieTelefon",
      values.zgodaPrzetwarzanieTelefon.toString()
    );
    formData.append("destinationAddress", sendTo);

    try {
      const response = await fetch("/api/questionContact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setStatus("success");
      setIsSending(false);
    } catch (error) {
      console.error("Failed to submit the form", error);
      setStatus("failure");
      setIsSending(false);
    }
  }

  return (
    <div
      className={cn(
        "bg-dark flex-center justify-start flex-col w-full px-6 lg:p-6 md:max-h-full pb-4",
        className
      )}
    >
      <div className="hidden md:block">
        <span className="md:text-light font-bold text-2xl pb-6">
          Formularz Kontaktowy
        </span>
      </div>
      <div className="md:hidden flex flex-col gap-0 items-start justify-start w-full pb-2 md:pb-6">
        <span className="text-accent1 font-bold text-2xl">FORMULARZ</span>
        <span className="text-light font-light text-3xl">KONTAKTOWY</span>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-dark w-full max-w-screen-xl"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="!mt-0">
                <FormLabel className="text-light">Adres email*</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telefon"
            render={({ field }) => (
              <FormItem className="!mt-0">
                <FormLabel className="text-light">Numer telefonu</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder=""
                    {...field}
                    onInput={(e) => {
                      const value = e.currentTarget.value;
                      // Remove non-numeric characters
                      e.currentTarget.value = value.replace(/\D/g, "");
                    }}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="formMessage"
            render={({ field }) => (
              <FormItem className="!mt-0">
                <FormLabel className="text-light">Wiadomość*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Umów mnie na prezentacje z moim indywidualnym opiekunem transakcji"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Zgoda przetwarzanie */}
          <FormField
            control={form.control}
            name="zgodaPrzetwarzanieDanych"
            render={({ field }) => (
              <FormItem className="form-toggle-container">
                <FormControl className="form-toggle-switch">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="flex flex-col gap-2">
                  <FormLabel className="text-light text-base">
                    Zgoda na przetwarzanie danych*
                  </FormLabel>

                  <div className="form-toggle-description">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionContent>
                          Wyrażam zgodę na przetwarzanie podanych przeze mnie
                          danych osobowych przez Inwestycje Deweloperskie Prosta
                          Spółka Akcyjna z siedzibą w Katowicach, ul. Murckowska
                          14C, 40-265 Katowice w celu nawiązania kontaktu oraz
                          przedstawienia oferty naszych usług.
                        </AccordionContent>
                        <AccordionTrigger
                          className="text-sm"
                          openStateChildren={
                            <span>Ukryj pełną treść zgody</span>
                          }
                        >
                          Zobacz pełną treść zgody
                        </AccordionTrigger>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          {/* Oświadczenie */}

          <FormField
            control={form.control}
            name="oświadczeniePrzetwarzanieDanych"
            render={({ field }) => (
              <FormItem className="form-toggle-container">
                <FormControl className="form-toggle-switch">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="flex flex-col gap-2">
                  <FormLabel className="text-light text-base">
                    Oświadczam, że zapoznałam/em się z zasadami przetwarzania
                    moich danych osobowych zawartych w
                    <Link
                      className="text-accent1"
                      href={"/informacje#klauzula"}
                      target="_blank"
                    >
                      &nbsp;klauzuli informacyjnej&nbsp;
                    </Link>
                    oraz
                    <Link
                      className="text-accent1"
                      href={"/informacje#polityka"}
                      target="_blank"
                    >
                      &nbsp;polityką prywatności&nbsp;
                    </Link>
                    serwisu internetowego.*
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          {/* Zgoda Email */}

          <FormField
            control={form.control}
            name="zgodaPrzetwarzanieEmail"
            render={({ field }) => (
              <FormItem className="form-toggle-container">
                <FormControl className="form-toggle-switch">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="flex flex-col gap-2">
                  <FormLabel className="text-light text-base">
                    Zgoda na kontakt e-mail*
                  </FormLabel>

                  <div className="form-toggle-description">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionContent>
                          Wyrażam zgodę na przetwarzanie moich danych osobowych
                          w postaci adresu e-mail przez Inwestycje Deweloperskie
                          Prosta Spółka Akcyjna z siedzibą w Katowicach, ul.
                          Murckowska 14C, 40-265 Katowice, w celu otrzymywania
                          drogą elektroniczną na adres e-mail informacji
                          handlowych (tj. ofert, informacji o produktach i
                          usługach), dotyczących produktów i usług oferowanych
                          przez Inwestycje Deweloperskie Prosta Spółka Akcyjna z
                          siedzibą w Katowicach, ul. Murckowska 14C, 40-265
                          Katowice oraz przez partnerów, z których usług
                          korzystamy w zakresie obrotu nieruchomościami:
                          <Link
                            className="text-accent1"
                            href={"/informacje#podmioty"}
                            target="_blank"
                          >
                            &nbsp;Lista podmiotów&nbsp;
                          </Link>
                        </AccordionContent>
                        <AccordionTrigger
                          className="text-sm"
                          openStateChildren={
                            <span>Ukryj pełną treść zgody</span>
                          }
                        >
                          Zobacz pełną treść zgody
                        </AccordionTrigger>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          {/* Zgoda Telefon */}
          <FormField
            control={form.control}
            name="zgodaPrzetwarzanieTelefon"
            render={({ field }) => (
              <FormItem className="form-toggle-container">
                <FormControl className="form-toggle-switch">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="flex flex-col gap-2">
                  <FormLabel className="text-light text-base">
                    Zgoda na kontakt telefoniczny*
                  </FormLabel>

                  <div className="form-toggle-description">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionContent>
                          Wyrażam zgodę na przetwarzanie moich danych osobowych
                          w postaci w postaci numeru telefonu od Inwestycje
                          Deweloperskie Prosta Spółka Akcyjna z siedzibą w
                          Katowicach, ul. Murckowska 14C, 40-265 Katowice, w
                          celu otrzymywania drogą telefoniczną na wskazany
                          przeze mnie numer telefonu informacji handlowych (tj.
                          ofert, informacji o produktach i usługach),
                          dotyczących produktów i usług oferowanych przez
                          Inwestycje Deweloperskie Prosta Spółka Akcyjna z
                          siedzibą w Katowicach, ul. Murckowska 14C, 40-265
                          Katowice oraz przez partnerów, z których usług
                          korzystamy w zakresie obrotu nieruchomościami
                          <Link
                            className="text-accent1"
                            href={"/informacje#podmioty"}
                            target="_blank"
                          >
                            &nbsp;Lista podmiotów&nbsp;
                          </Link>
                        </AccordionContent>
                        <AccordionTrigger
                          className="text-sm"
                          openStateChildren={
                            <span>Ukryj pełną treść zgody</span>
                          }
                        >
                          Zobacz pełną treść zgody
                        </AccordionTrigger>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <div className="flex items-end lg:items-center flex-col-reverse lg:flex-row justify-between gap-2">
            <p className="text-light text-xs w-full">
              Pola oznaczone * są wymagane.
            </p>
            <Button
              className="rounded-none w-40 h-16 flex-center gap-2 bg-accent1 hover:bg-darkerGray text-dark text-lg font-bold"
              type="submit"
              disabled={isSending ? true : status === "success" ? true : false}
            >
              <ClipLoader
                color={"dark"}
                loading={isSending}
                size={25}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              Wyślij
            </Button>

            {status === "success" ? (
              <p className="text-green-500 text-sm">
                Formularz został pomyślnie wysłany
              </p>
            ) : status === "failure" ? (
              <p className="text-red-500 text-sm">
                Błąd przy wysyłaniu formularza
              </p>
            ) : null}
          </div>
        </form>
      </Form>
    </div>
  );
}
