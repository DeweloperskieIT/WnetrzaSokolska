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

const formSchema = z.object({
  imie: z.string().min(2, {
    message: "Imie jest wymagane.",
  }),
  telefon: z.string().optional(),
  email: z
    .string({ message: "Proszę podać właściwy adres email." })
    .email({ message: "Proszę podać właściwy adres email." }),
  zgoda: z.boolean().refine((val) => val === true, {
    message: "Proszę zaznaczyć zgodę na przetwarzanie danych.",
  }),
  files: z
    .array(z.instanceof(File))
    .refine(
      (files) =>
        files.every((file) =>
          [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "text/plain",
          ].includes(file.type)
        ),
      {
        message: "Proszę dodać pliki w formacie PDF, DOC, DOCX lub TXT.",
      }
    )
    .optional(),
});

export function FormWithFileUpload() {
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
    if (values.files) {
      values.files.forEach((file: File) => formData.append("files", file));
    }

    try {
      const response = await fetch("/api/contact1", {
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
    <div className="bg-dark text-light flex-center flex-col-reverse w-full p-6 rounded">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="imie"
            render={({ field }) => (
              <FormItem className="!mt-0">
                <FormLabel>Imię*</FormLabel>
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
                <FormLabel>Adres email*</FormLabel>
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
                <FormLabel>Numer telefonu</FormLabel>
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
            name="files"
            render={({ field }) => (
              <FormItem className="!mt-0">
                <FormLabel>Pliki</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept=".pdf, .doc, .docx, .txt"
                    multiple
                    onChange={(e) =>
                      field.onChange(Array.from(e.target.files || []))
                    }
                  />
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
                  <FormLabel className="text-base">Zgoda*</FormLabel>
                  <FormDescription>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w
                    celach marketingowych dotyczących wyżej wymienionej oferty.
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <p className="text-dark text-xs !mt-4">
            Pola oznaczone * są wymagane.
          </p>

          <div className="flex items-center justify-between">
            <Button
              className="flex-center gap-2"
              type="submit"
              disabled={isSending ? true : status === "success" ? true : false}
            >
              Wyślij
              <ClipLoader
                color={"dark"}
                loading={isSending}
                size={25}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
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
