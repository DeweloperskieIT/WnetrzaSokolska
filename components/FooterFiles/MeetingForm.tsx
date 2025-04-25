"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { SVGProps, useState } from "react";
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
    const formData = {
      imie: values.imie,
      nazwisko: values.nazwisko,
      email: values.email,
      telefon: values.telefon || "",
      message: values.message || "",
      zgodaPrzetwarzanieDanych: values.zgodaPrzetwarzanieDanych,
      zgodaPrzetwarzanieEmail: values.zgodaPrzetwarzanieEmail,
      zgodaPrzetwarzanieTelefon: values.zgodaPrzetwarzanieTelefon,
    };

    try {
      const response = await fetch("/api/email/generic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure the API knows it's JSON
        },
        body: JSON.stringify(formData),
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
        "limited-width  flex-center justify-start flex-col w-full px-10  lg:px-10 md:max-h-full pb-4",
        props.className
      )}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-dark w-full max-w-screen-xl "
        >
          <div className="grid grid-cols-2 gap-6 w-full justify-between text-[#5A5A5A]">
            {/* Imię */}
            <FormItemInput
              control={form.control}
              name="imie"
              label="Imię"
              type="text"
              placeholder="Jan"
              className="border-b-[1px] border-[rgb(169,169,169)] w-full h-fit transition-all"
              descriptionClass=""
              inputClass="text-xl text-dark bg-transparent h-12 !border-none"
              labelClass="text-[#5A5A5A] font-bold text-2xl"
            />

            {/* Nazwisko */}
            <FormItemInput
              control={form.control}
              name="nazwisko"
              label="Nazwisko"
              type="text"
              placeholder="Nowak"
              className="border-b-[1px] border-[rgb(169,169,169)] w-full h-fit transition-all"
              descriptionClass=""
              inputClass="text-xl text-dark bg-transparent h-12 !border-none"
              labelClass="text-[#5A5A5A] font-bold text-2xl"
            />
            {/* Email */}
            <FormItemInput
              control={form.control}
              name="email"
              label="Email"
              type="email"
              placeholder="jannowak@mail.pl"
              className="border-b-[1px] border-[rgb(169,169,169)] w-full h-fit transition-all"
              descriptionClass=""
              inputClass="text-xl text-dark bg-transparent h-12 !border-none"
              labelClass="text-[#5A5A5A] font-bold text-2xl"
            />

            {/* Telefon */}
            <FormItemInput
              control={form.control}
              name="telefon"
              label="Telefon"
              type="tel"
              placeholder="123456789"
              className="border-b-[1px] border-[rgb(169,169,169)] w-full h-fit transition-all"
              descriptionClass=""
              inputClass="text-xl text-dark bg-transparent h-12 !border-none"
              labelClass="text-[#5A5A5A] font-bold text-2xl"
            />
          </div>
          <div className="h-4" />
          {/* Jak możemy pomóc? */}
          <FormItemInput
            control={form.control}
            name="message"
            label="Jak możemy ci pomóc?"
            type="textarea"
            placeholder="Wpisz waidomość..."
            className="border-b-[1px] border-[#A9A9A9] w-full h-fit transition-all "
            descriptionClass=""
            inputClass="text-xl text-dark bg-transparent h-12 border-none min-h-[150px]"
            labelClass="text-[#5A5A5A] font-bold text-2xl"
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
            labelClass="text-[#5A5A5A]"
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
            labelClass="text-[#5A5A5A]"
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
            labelClass="text-[#5A5A5A]"
          />
          {/* Submit Button */}
          <div className="flex flex-col items-center justify-center w-full gap-6  pt-00">
            <span className="text-[#5a5a5a] text-sm pl-14 self-start pb-6">
              * pola wymagane
            </span>
            <Button
              type="submit"
              disabled={isSending || status === "success"}
              className=" self-center px-20 text-xl bg-transparent hover:bg-transparent rounded-none text-dark hover:brightness-110  transition-all relative"
            >
              {isSending ? (
                <ClipLoader color={"dark"} loading={isSending} size={25} />
              ) : (
                <Wyślij className="" />
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

const Wyślij = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={151}
    height={63}
    fill="none"
    {...props}
  >
    <path
      fill="#FACA32"
      d="M148.283 48.87c.008 2.143-1.626 4.556-4.523 4.556H27.037c0 .08.29 5.316-4.147 9.264h-.007l-8.646-9.264H2.717V.296H143.76c2.497 0 4.523 2.042 4.523 4.558V48.87Z"
    />
    <path
      fill="#000"
      d="m66.65 18.939-4.008 14.99h-1.754l-2.973-10.09a40.707 40.707 0 0 1-.257-.86c-.075-.294-.147-.571-.215-.831a50.42 50.42 0 0 1-.174-.697l-.093-.462a6.95 6.95 0 0 1-.082.451c-.034.199-.082.428-.143.687-.055.26-.123.537-.205.831-.076.294-.158.591-.247.892l-2.891 10.08h-1.753l-3.979-14.991h1.815l2.41 9.402c.082.315.157.626.225.933.075.301.14.595.195.882.062.287.116.568.164.841s.092.54.133.8c.035-.267.079-.544.134-.83.054-.295.113-.592.174-.893.068-.3.14-.605.215-.912.082-.308.168-.616.257-.923l2.696-9.3h1.795l2.81 9.372c.095.32.184.639.266.953.082.315.154.622.215.923.069.294.127.578.175.851.054.267.102.52.143.759.048-.335.106-.687.175-1.056.068-.37.147-.756.235-1.159.096-.403.199-.82.308-1.25l2.41-9.393h1.825Zm.34 3.752h1.825l2.48 6.522c.144.383.278.752.4 1.107.124.349.233.684.329 1.005.096.322.17.633.225.933h.072c.096-.342.233-.79.41-1.343.178-.56.37-1.131.575-1.712l2.348-6.512h1.835l-4.89 12.89a8.555 8.555 0 0 1-.913 1.804 3.604 3.604 0 0 1-1.251 1.18c-.493.28-1.087.42-1.785.42-.32 0-.605-.02-.85-.062a5.26 5.26 0 0 1-.636-.123v-1.363a5.886 5.886 0 0 0 1.22.133c.424 0 .79-.082 1.097-.246.314-.157.584-.39.81-.697.226-.308.42-.674.585-1.098l.615-1.579-4.502-11.259Zm19.564 8.163c0 .717-.181 1.322-.544 1.815-.355.485-.868.85-1.538 1.097-.663.246-1.456.369-2.379.369-.786 0-1.466-.062-2.04-.185a5.91 5.91 0 0 1-1.508-.523v-1.569c.458.226 1.005.431 1.641.616a6.953 6.953 0 0 0 1.948.277c.971 0 1.675-.158 2.113-.472.437-.315.656-.742.656-1.282 0-.308-.089-.578-.267-.81-.17-.24-.461-.468-.871-.687-.41-.226-.978-.472-1.703-.738a19.646 19.646 0 0 1-1.866-.81c-.52-.274-.923-.605-1.21-.995-.28-.39-.42-.896-.42-1.518 0-.95.383-1.678 1.148-2.184.773-.512 1.785-.769 3.035-.769.677 0 1.31.069 1.898.205a8.75 8.75 0 0 1 1.66.534l-.574 1.363c-.464-.198-.96-.365-1.486-.502a6.379 6.379 0 0 0-1.61-.205c-.786 0-1.391.13-1.815.39-.417.26-.626.615-.626 1.066 0 .349.096.636.287.861.199.226.513.438.944.636.43.198.998.43 1.702.697.704.26 1.312.53 1.825.81.513.274.906.609 1.18 1.005.28.39.42.892.42 1.508ZM85.477 17.84v.205a9.226 9.226 0 0 1-.564.718c-.232.274-.492.564-.78.872-.286.3-.577.588-.87.861-.288.273-.555.51-.8.708h-1.139v-.246c.219-.26.458-.571.718-.934.26-.369.513-.745.759-1.127.246-.39.451-.742.615-1.057h2.061Zm5.527 16.089H89.29V17.975h1.713V33.93Zm5.301-11.239V33.93h-1.702V22.69h1.702Zm-.83-4.204c.28 0 .52.093.717.277.206.178.308.458.308.841 0 .376-.103.656-.308.84a1.016 1.016 0 0 1-.717.278c-.294 0-.54-.093-.739-.277-.191-.185-.287-.465-.287-.841 0-.383.096-.663.287-.84.199-.185.445-.278.739-.278Zm3.086 20.488c-.349 0-.653-.028-.913-.082a4.412 4.412 0 0 1-.676-.175v-1.384c.212.068.427.12.646.154.218.04.465.061.738.061.465 0 .84-.13 1.128-.39.287-.26.43-.73.43-1.414V22.69h1.703v13.013c0 .683-.11 1.268-.328 1.753a2.382 2.382 0 0 1-1.005 1.128c-.452.26-1.026.39-1.723.39Zm1.2-19.37c0-.383.095-.663.287-.84a1.04 1.04 0 0 1 .738-.278c.28 0 .52.093.718.277.205.178.308.458.308.841 0 .376-.103.656-.308.84a1.016 1.016 0 0 1-.718.278 1.04 1.04 0 0 1-.738-.277c-.192-.185-.287-.465-.287-.841Z"
    />
  </svg>
);
