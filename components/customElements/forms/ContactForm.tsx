"use client";

import { useParams } from "next/navigation";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { getDictionary, Locales } from "@/app/dictionaries";

interface ContactFormProps {
  className?: string;
  sendTo?: string;
  oferta?: string;
  dict: any;
}

export function ContactForm({
  className,
  sendTo = "kontakt@deweloperskie.pl",
  oferta = "Kontakt",
  dict,
}: ContactFormProps) {
  const [status, setStatus] = useState<"success" | "failure" | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);

  const formSchema = z.object({
    imie: z.string().min(2, {
      message: dict.contact_form.name_error,
    }),
    telefon: z
      .string({ message: dict.contact_form.telephone_error })
      .optional(),
    email: z
      .string({ message: dict.contact_form.email_error })
      .email({ message: dict.contact_form.email_error }),
    zgodaPrzetwarzanieDanych: z.boolean().refine((val) => val === true, {
      message: dict.contact_form.name_error,
    }),
    oświadczeniePrzetwarzanieDanych: z.boolean().refine((val) => val === true, {
      message: dict.contact_form.required_error,
    }),
    zgodaPrzetwarzanieEmail: z.boolean().refine((val) => val === true, {
      message: dict.contact_form.required_error,
    }),
    zgodaPrzetwarzanieTelefon: z.boolean().refine((val) => val === true, {
      message: dict.contact_form.required_error,
    }),
    formMessage: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      formMessage: dict.contact_form.message_placeholder,
      imie: "",
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
    const formData = new FormData();
    formData.append(
      "formMessage",
      values.formMessage ? values.formMessage : "Brak wiadomości"
    );
    formData.append("imie", values.imie);
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
    formData.append("offer", oferta);

    try {
      const response = await fetch("/api/contact", {
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
          {dict.contact_form.title}
        </span>
      </div>
      <div className="md:hidden flex flex-col gap-0 items-start justify-start w-full pb-2 md:pb-6">
        <span className="text-accent1 font-bold text-2xl">
          {dict.contact_form.title_top}
        </span>
        <span className="text-light font-light text-3xl">
          {dict.contact_form.title_bottom}
        </span>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-dark w-full max-w-screen-xl"
        >
          <FormField
            control={form.control}
            name="imie"
            render={({ field }) => (
              <FormItem className="!mt-0">
                <FormLabel className="text-light">
                  {dict.contact_form.name}*
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="!mt-0">
                <FormLabel className="text-light">
                  {dict.contact_form.email}*
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="" {...field} />
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
                <FormLabel className="text-light">
                  {dict.contact_form.telephone}
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder=""
                    {...field}
                    value={field.value || ""} // Ensure controlled value
                    onChange={(e) => {
                      const value = e.target.value;
                      // Remove non-numeric characters
                      field.onChange(value.replace(/\D/g, ""));
                    }}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Wiadomość */}

          <FormField
            control={form.control}
            name="formMessage"
            render={({ field }) => (
              <FormItem className="!mt-0">
                <FormLabel className="text-light">
                  {dict.contact_form.message}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={dict.contact_form.message_placeholder}
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
                    aria-label={dict.contact_form.accept_condition_data}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="flex flex-col gap-2">
                  <FormLabel className="text-light text-base">
                    {dict.contact_form.accept_condition_data}*
                  </FormLabel>

                  <div className="form-toggle-description">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionContent>
                          {dict.contact_form.accept_condition_data_paragraph}
                        </AccordionContent>
                        <AccordionTrigger
                          className="text-sm"
                          openStateChildren={
                            <span>
                              {dict.contact_form.hide_condition_button}
                            </span>
                          }
                        >
                          {dict.contact_form.show_condition_button}
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
                    aria-label={dict.contact_form.accept_condition_data_read_01}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="flex flex-col gap-2">
                  <FormLabel className="text-light text-base">
                    {dict.contact_form.accept_condition_data_read_01}
                    <Link
                      className={cn(
                        "text-accent1 font-bold",
                        oferta === "Katowice 3" && "text-accent2"
                      )}
                      href={"/informacje#klauzula"}
                      target="_blank"
                    >
                      &nbsp;{dict.contact_form.information_clause}
                      &nbsp;
                    </Link>
                    {dict.contact_form.accept_condition_data_read_02}
                    <Link
                      className={cn(
                        "text-accent1 font-bold",
                        oferta === "Katowice 3" && "text-accent2"
                      )}
                      href={"/informacje#polityka"}
                      target="_blank"
                    >
                      &nbsp;{dict.contact_form.privacy_clause}&nbsp;
                    </Link>
                    {dict.contact_form.accept_condition_data_read_03}*
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
                    aria-label={dict.contact_form.accept_condition_email}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="flex flex-col gap-2">
                  <FormLabel className="text-light text-base">
                    {dict.contact_form.accept_condition_email}*
                  </FormLabel>

                  <div className="form-toggle-description">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionContent>
                          {dict.contact_form.accept_condition_email_paragraph}
                          <Link
                            className={cn(
                              "text-accent1 font-bold",
                              oferta === "Katowice 3" && "text-accent2"
                            )}
                            href={"/informacje#podmioty"}
                            target="_blank"
                          >
                            &nbsp;{dict.contact_form.list_of_entities}
                            &nbsp;
                          </Link>
                        </AccordionContent>
                        <AccordionTrigger
                          className="text-sm"
                          openStateChildren={
                            <span>
                              {dict.contact_form.hide_condition_button}
                            </span>
                          }
                        >
                          {dict.contact_form.show_condition_button}
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
                    aria-label={dict.contact_form.accept_condition_phone}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="flex flex-col gap-2">
                  <FormLabel className="text-light text-base">
                    {dict.contact_form.accept_condition_phone}
                  </FormLabel>

                  <div className="form-toggle-description">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionContent>
                          {dict.contact_form.accept_condition_phone_paragraph}
                          <Link
                            className={cn(
                              "text-accent1 font-bold",
                              oferta === "Katowice 3" && "text-accent2"
                            )}
                            href={"/informacje#podmioty"}
                            target="_blank"
                          >
                            &nbsp;{dict.contact_form.list_of_entities}
                            &nbsp;
                          </Link>
                        </AccordionContent>
                        <AccordionTrigger
                          className="text-sm"
                          openStateChildren={
                            <span>
                              {dict.contact_form.hide_condition_button}
                            </span>
                          }
                        >
                          {dict.contact_form.show_condition_button}
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
              {dict.contact_form.required_fields}
            </p>

            <div className="flex flex-row items-center justify-end gap-6">
              {status === "success" ? (
                <p className="text-green-500 text-sm">
                  {dict.contact_form.form_sent_success}
                </p>
              ) : status === "failure" ? (
                <p className="text-red-500 text-sm">
                  {dict.contact_form.form_sent_error}
                </p>
              ) : null}
              <Button
                className={cn(
                  "rounded-none aspect-video w-30 md:w-36 h-auto flex-center gap-2 bg-accent1 hover:bg-darkerGray text-dark text-base  md:text-lg font-bold",
                  oferta === "Katowice 3" && "bg-accent2"
                )}
                type="submit"
                disabled={
                  isSending ? true : status === "success" ? true : false
                }
              >
                <ClipLoader
                  color={"dark"}
                  loading={isSending}
                  size={25}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
                {dict.contact_form.form_send}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
