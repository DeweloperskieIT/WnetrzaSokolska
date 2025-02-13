"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormItemInput from "@/components/form-components/formItemInput";
import { cn } from "@/lib/utils";
import { FileField, JobFormBuildingBlockData } from "@/types/forms";

interface DynamicFormProps {
  FormBuildingBlockData: JobFormBuildingBlockData;
  enableDynamicFileAdding?: boolean;
  collectionId?: string; // New property for collection ID
  isBoundToUser?: boolean; // New property for user binding
  customSuccessMessage?: string;
}

const DynamicForm = ({
  FormBuildingBlockData,
  enableDynamicFileAdding,
  collectionId,
  isBoundToUser = false,
  customSuccessMessage,
}: DynamicFormProps) => {
  const [submitStatus, setSubmitStatus] = useState<boolean | null>();
  const [submitMessage, setSubmitMessage] = useState<string | null>();
  const [fileFieldAddMessage, setfileFieldAddMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  // New state to track interaction times
  const [interactionTimes, setInteractionTimes] = useState<
    Record<string, number>
  >({});

  // New timers state
  const [timers, setTimers] = useState<Record<string, number | null>>({});

  // State for dynamically added fields
  const [dynamicFileFields, setDynamicFileFields] = useState<FileField[]>([]);

  // Merge dynamic file fields with static form fields for the complete form
  const allFormFields = [
    ...FormBuildingBlockData.formFields, // Your predefined form fields
    ...dynamicFileFields, // Dynamically added file fields
  ];

  // Function to add a new file field dynamically with user-specified name
  const handleAddFileField = () => {
    if (!newFileFieldForm.watch("name").trim()) {
      setfileFieldAddMessage("Podaj nazwę opisującą plik, który chcesz dodać");
      return;
    }

    const newFieldName = newFileFieldForm.watch("name");

    if (allFormFields.some((field) => field.name === newFieldName)) {
      setfileFieldAddMessage("Dodałeś już pole o takiej nazwie");
      return;
    }

    // Add the new file field to state with required properties
    const newFileField: FileField = {
      name: newFieldName,
      label: newFieldName,
      type: "file",
      accept: ".pdf, .doc, .docx, .txt", // You can adjust this as needed
      zod: z.any(), // Zod validation for File
      defaultValue: undefined, // Default value for the field
      deletable: true,
    };

    setDynamicFileFields((prev) => [...prev, newFileField]);

    // Reset file name input
    newFileFieldForm.reset({ name: "" });
  };

  const handleDeleteFileField = (fieldName: string) => {
    setDynamicFileFields((prev) =>
      prev.filter((field) => field.name !== fieldName)
    );
  };

  const handleFocus = (name: string) => {
    // If there's already a timer running, do nothing
    if (timers[name] !== undefined) return; // Change to check if it exists

    // console.log("STARTED TRACKING " + name);
    const startTime = Date.now();
    setTimers((prev) => ({
      ...prev,
      [name]: startTime,
    }));
  };

  const handleBlur = (name: string) => {
    const startTime = timers[name];
    if (startTime === null) return;

    const timeSpent = Date.now() - startTime;
    setInteractionTimes((prev) => ({
      ...prev,
      [name]: (prev[name] || 0) + timeSpent,
    }));

    setTimers((prev) => ({
      ...prev,
      [name]: null,
    }));
  };

  const formSchema = z.object(
    allFormFields
      .filter((field) => field.type !== "header" && field.type !== "paragraph") // Filter out header fields
      .reduce((acc: any, field) => {
        acc[field.name] = field.zod;
        return acc;
      }, {})
  );

  const defaultValues = allFormFields
    .filter((field) => field.type !== "header" && field.type !== "paragraph") // Filter out header fields
    .reduce((acc: any, field) => {
      acc[field.name] = field.defaultValue;
      return acc;
    }, {});

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const renderFormField = (field: any, index: number) => {
    const isHidden = field.hiddenBy
      ? form.watch(field.hiddenBy) !== field.hiddenValue
      : false;

    return (
      <div
        key={field.name}
        className={cn(
          "",
          isHidden
            ? "h-0 opacity-0 scale-0 hidden"
            : "h-fit opacity-100 scale-100 block"
        )}
      >
        {(() => {
          switch (field.type) {
            case "header":
              return (
                <h1 className={cn("font-bold text-2xl", field.style)}>
                  {field.name}
                </h1>
              );
            case "paragraph":
              return (
                <span className={cn("default-paragraph", field.style)}>
                  {field.name}
                </span>
              );
            case "tel":
              return (
                <FormItemInput
                  inputClass="bg-light"
                  descriptionClass="text-light/80"
                  autocomplete="off"
                  control={form.control}
                  label={field.label}
                  name={field.name}
                  description={field.description}
                  type={field.type}
                  onFocus={() => handleFocus(field.name)}
                  onBlur={() => handleBlur(field.name)}
                />
              );
            case "select":
              return (
                <FormItemInput
                  inputClass="bg-light"
                  descriptionClass="text-light/80"
                  autocomplete="off"
                  placeholder={field.placeholder}
                  selectItems={field.selectItems}
                  control={form.control}
                  label={field.label}
                  name={field.name}
                  description={field.description}
                  type={field.type}
                  onFocus={() => handleFocus(field.name)}
                  onBlur={() => handleBlur(field.name)}
                />
              );
            case "checkboxArray":
              return (
                <FormItemInput
                  inputClass="bg-light"
                  descriptionClass="text-light/80"
                  autocomplete="off"
                  placeholder={field.placeholder}
                  checkboxItems={field.checkboxItems}
                  control={form.control}
                  label={field.label}
                  name={field.name}
                  description={field.description}
                  type={field.type}
                  onFocus={() => handleFocus(field.name)}
                  onBlur={() => handleBlur(field.name)}
                />
              );
            case "text":
            case "textarea":
              return (
                <FormItemInput
                  inputClass="bg-light"
                  descriptionClass="text-light/80"
                  autocomplete="off"
                  control={form.control}
                  label={field.label}
                  name={field.name}
                  description={field.description}
                  type={field.type}
                  onFocus={() => handleFocus(field.name)}
                  onBlur={() => handleBlur(field.name)}
                />
              );
            case "file":
              return (
                <>
                  <FormItemInput
                    inputClass="text-light"
                    control={form.control}
                    label={field.label}
                    name={field.name}
                    description={field.description}
                    type="file"
                    accept={field.accept}
                    onFocus={() => handleFocus(field.name)}
                    onBlur={() => handleBlur(field.name)}
                  />
                  {(field as FileField).deletable && (
                    <Button
                      type="button"
                      onClick={() => handleDeleteFileField(field.name)}
                      className="mt-2"
                      variant="destructive" // You can style it as you want
                    >
                      Usuń
                    </Button>
                  )}
                </>
              );
            case "radio":
              return (
                <FormItemInput
                  inputClass="text-light border-light"
                  control={form.control}
                  name={field.name}
                  label={field.label}
                  type="radio"
                  radioItems={field.radioItems}
                  onFocus={() => handleFocus(field.name)}
                  onBlur={() => handleBlur(field.name)}
                />
              );
            case "switch":
              return (
                <FormItemInput
                  inputClass="text-light border-light"
                  control={form.control}
                  name={field.name}
                  label={field.label}
                  description={field.description}
                  type="switch"
                  href={field.href}
                  hrefDescription={field.hrefDescription}
                />
              );
            default:
              return null;
          }
        })()}
      </div>
    );
  };

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (value && value.length > 0 && value[0] instanceof File) {
          formData.append(key, value[0]);
        } else if (value !== undefined) {
          // Skip undefined values and append only defined values
          formData.append(key, value);
        }
      });

      // Append interaction times to the formData
      formData.append("jsonTimesSpent", JSON.stringify(interactionTimes));

      // Append offerId to the formData
      formData.append("offerId", FormBuildingBlockData.offerId); // Add this line

      if (collectionId) {
        formData.append("collectionId", collectionId); // Add collection ID
      }
      if (isBoundToUser !== undefined) {
        formData.append("isBoundToUser", JSON.stringify(isBoundToUser)); // Add user binding
      }

      const response = await fetch("/api/dynamicForm/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setSubmitStatus(true);
        setSubmitMessage(
          customSuccessMessage || "Pomyślnie wysłano formularz!"
        );
        try {
          const response = await fetch("/api/email", {
            method: "POST",
            body: JSON.stringify({ offerId: FormBuildingBlockData.offerId }),
          });
        } catch (error) {}
      } else {
        console.error("Form submission failed:", result.error);
        setSubmitStatus(false);
        setSubmitMessage(
          "Wystąpił problem - proszę spróbować ponownie później."
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const newFileFieldSchema = z.object({
    name: z.string(),
  });

  const newFileFieldForm = useForm({
    resolver: zodResolver(newFileFieldSchema),
    defaultValues: {
      name: "",
    },
  });

  return (
    <div className="flex flex-col items-center h-full bg-websiteBackground2 text-light p-4 border-light border-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full flex flex-col gap-3"
        >
          {allFormFields.map((field, index) => renderFormField(field, index))}
          {enableDynamicFileAdding && (
            <Form {...newFileFieldForm}>
              <div className="flex flex-col justify-center items-center w-full space-y-4">
                <div className="min-w-[350px] w-fit">
                  {/* Input to specify the name of the custom file field */}
                  <FormItemInput
                    inputClass="bg-light"
                    control={newFileFieldForm.control}
                    label="Nazwij odpowiednio i dodaj nowy załącznik"
                    type="text"
                    name="name"
                    description={fileFieldAddMessage}
                  />
                </div>
                {/* Button to add a new file field */}
                <Button
                  className="!rounded-none bg-dark text-light hover:bg-dark/80"
                  type="button"
                  variant="default"
                  onClick={handleAddFileField}
                >
                  Dodaj plik
                </Button>
              </div>
            </Form>
          )}
          <div className="flex justify-center items-center w-full gap-4 flex-col mt-4">
            <Button
              // onClick={() => console.log(form.control._formValues)}
              className="!rounded-none bg-dark text-light hover:bg-dark/80"
              type="submit"
              variant="default"
              disabled={submitStatus ? true : isSubmitting}
            >
              {submitStatus ? (
                submitStatus === true ? (
                  <p className="text-green-400 ">{submitMessage} </p>
                ) : (
                  <p className="text-destructive ">{submitMessage} </p>
                )
              ) : isSubmitting ? (
                "Wysyłam formularz..."
              ) : (
                "Wyślij formularz"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default DynamicForm;
