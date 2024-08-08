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

const formSchema = z.object({
  imie: z.string().min(2, {
    message: "Prosimy o podanie swojego Imienia.",
  }),
  telefon: z.string().optional(),
  email: z
    .string({ message: "Proszę podać właściwy adres email." })
    .email({ message: "Proszę podać właściwy adres email." }),
  zgoda: z.boolean().refine((val) => val === true, {
    message: "Prosimy o udzielenie zgody na przetwarzanie danych.",
  }),
});

interface OfferContactFormProps {
  className?: string;
  sendTo?: string;
  oferta: string;
}

export function OfferContactForm({
  className,
  sendTo = "kontakt@deweloperskie.pl",
  oferta,
}: OfferContactFormProps) {
  const [status, setStatus] = useState<"success" | "failure" | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imie: "",
      zgoda: false,
      email: "",
      telefon: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSending(true);
    const formData = new FormData();
    formData.append("imie", values.imie);
    formData.append("email", values.email);
    formData.append("telefon", values.telefon || "");
    formData.append("zgoda", values.zgoda.toString());
    formData.append("destinationAddress", sendTo);
    formData.append("offer", oferta);

    try {
      const response = await fetch("/api/offerContact", {
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
        "bg-dark flex-center justify-start flex-col w-full px-6 lg:p-6 max-w-[600px] xl:max-w-full max-h-svh",
        className
      )}
    >
      <div className="hidden md:block">
        <span className="md:text-light font-bold text-2xl pb-6">
          Formularz Kontaktowy
        </span>
      </div>
      <div className="md:hidden flex flex-col gap-0 items-start justify-start w-full  pb-6">
        <span className="text-accent1 font-bold text-4xl">FORMULARZ</span>
        <span className="text-light font-light text-5xl">KONTAKTOWY</span>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-dark"
        >
          <FormField
            control={form.control}
            name="imie"
            render={({ field }) => (
              <FormItem className="!mt-0">
                <FormLabel className="text-light">Imię*</FormLabel>
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
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zgoda"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-2 gap-4 !mt-4">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-0.5">
                  <FormLabel className="text-light text-base">Zgoda*</FormLabel>
                  <FormDescription className="text-light">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w
                    celach marketingowych dotyczących wyżej wymienionej oferty.
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <div className="flex items-end lg:items-center flex-col-reverse lg:flex-row justify-between gap-2">
            <p className="text-light text-xs w-full">
              Pola oznaczone * są wymagane.
            </p>

            {status === "success" ? (
              <p className="text-green-500 text-sm">
                Formularz został pomyślnie wysłany
              </p>
            ) : status === "failure" ? (
              <p className="text-red-500 text-sm">
                Błąd przy wysyłaniu formularza
              </p>
            ) : null}
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
          </div>
        </form>
      </Form>
      <div className="w-full h-full mt-10 flex items-start lg:items-center flex-col lg:flex-row lg:gap-5 pb-5 ">
        <Button className="text-light px-0 hover:text-accent1 bg-transparent hover:bg-transparent">
          Polityka prywatności
        </Button>
        <span className="hidden lg:visible h-[20px] w-[1px] bg-darkerGray/40"></span>
        <Button className="text-light px-0 hover:text-accent1 bg-transparent hover:bg-transparent">
          Dane spółki
        </Button>
      </div>
    </div>
  );
}
