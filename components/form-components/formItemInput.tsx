import React, { ReactNode } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, InputProps } from "@/components/ui/input";
import { Control, FieldValues, Path } from "react-hook-form";
import { Textarea, TextareaProps } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { RadioItemProps, SelectItemProps } from "@/types/forms";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "../ui/checkbox";
import { Switch } from "../ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface FormItemInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
  label: string;
  type?: string;
  description?: string;
  accept?: string;
  options?: InputProps;
  textAreaOptions?: TextareaProps;
  className?: string;
  children?: ReactNode;
  radioItems?: RadioItemProps[];
  selectItems?: SelectItemProps[];
  disabled?: boolean;
  inputClass?: string;
  labelClass?: string;
  checkboxItems?: string[];
  descriptionClass?: string;
  autocomplete?: React.HTMLInputAutoCompleteAttribute | undefined;
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  href?: string;
  hrefDescription?: string;
}

const FormItemInput = <T extends FieldValues>({
  children,
  control,
  name,
  placeholder = "",
  label,
  type = "text",
  description,
  accept,
  options,
  textAreaOptions,
  className,
  radioItems,
  selectItems,
  disabled,
  onBlur,
  checkboxItems,
  onFocus,
  inputClass,
  labelClass,
  descriptionClass,
  autocomplete,
  href,
  hrefDescription,
}: FormItemInputProps<T>) => {
  if (type === "select") {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className={cn("flex-row", className)}>
            <FormLabel className={cn("", labelClass)}>{label}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="!text-dark rounded-none">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="!text-dark">
                {selectItems?.map((item, id) => (
                  <SelectItem key={id} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormDescription className={cn("", descriptionClass)}>
              {description}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }
  if (type === "checkboxArray") {
    return (
      <FormField
        control={control}
        name={name}
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className={cn("", labelClass)}>{label}</FormLabel>
            </div>
            {checkboxItems!.map((item, id) => (
              <FormField
                key={id}
                control={control}
                name={name}
                render={({ field }) => {
                  // Ensure that field.value is initialized to an empty array if undefined, and assert the type as string[]
                  const currentValue = (field.value || []) as string[];

                  return (
                    <FormItem
                      key={item} // Use item directly as the key since it's a string now
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          className="bg-light  border border-light  data-[state=checked]:border-light size-5"
                          checked={currentValue.includes(item) || false} // Check if the current value (item) is in the array
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...currentValue, item]) // Add the item if checked
                              : field.onChange(
                                  currentValue.filter(
                                    (value: string) => value !== item
                                  ) // Remove the item if unchecked
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {item} {/* The string itself is the label */}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
            <FormDescription className={cn("", descriptionClass)}>
              {description}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }
  if (type === "switch") {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="w-full flex flex-row items-start justify-start rounded-none gap-4 !mt-0;">
            <FormControl className="mt-4">
              <Switch
                aria-label={name}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="flex flex-col gap-2">
              <FormLabel className="text-light text-base">{label}</FormLabel>

              <div className="form-toggle-description">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionContent>
                      {description}
                      {href && (
                        <Link
                          className={cn("text-accent1 font-bold")}
                          href={href || "/"}
                          target="_blank"
                        >
                          {hrefDescription}
                        </Link>
                      )}
                    </AccordionContent>
                    <AccordionTrigger
                      className="text-sm mb-0 pb-0"
                      openStateChildren={<span>Ukryj pełną treść zgody</span>}
                    >
                      Pokaż pełną treść zgody
                    </AccordionTrigger>
                  </AccordionItem>
                </Accordion>
              </div>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    );
  } else {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className={cn("flex-row", className)}>
            <FormLabel className={cn("", labelClass)}>{label}</FormLabel>
            <FormControl>
              {type === "otp" ? (
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot
                      className="border-websiteBackground2"
                      index={0}
                    />
                    <InputOTPSlot
                      className="border-websiteBackground2"
                      index={1}
                    />
                    <InputOTPSlot
                      className="border-websiteBackground2"
                      index={2}
                    />
                    <InputOTPSlot
                      className="border-websiteBackground2"
                      index={3}
                    />
                    <InputOTPSlot
                      className="border-websiteBackground2"
                      index={4}
                    />
                    <InputOTPSlot
                      className="border-websiteBackground2"
                      index={5}
                    />
                  </InputOTPGroup>
                </InputOTP>
              ) : type === "tel" ? (
                <Input
                  autoComplete={autocomplete}
                  className={cn(
                    "rounded-none text-dark border-websiteBackground2",
                    inputClass
                  )}
                  disabled={disabled}
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder={placeholder}
                  {...field}
                  value={field.value || ""} // Ensure controlled value
                  onChange={(e) => {
                    const value = e.target.value;
                    // Remove non-numeric characters
                    field.onChange(value.replace(/\D/g, ""));
                  }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              ) : type === "file" ? (
                <Input
                  autoComplete={autocomplete}
                  className={cn("rounded-none !text-dark", inputClass)}
                  disabled={disabled}
                  type="file"
                  accept={accept}
                  onChange={(e) =>
                    field.onChange(Array.from(e.target.files || []))
                  }
                  {...options}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              ) : type === "textarea" ? (
                <Textarea
                  autoComplete={autocomplete}
                  className={cn("rounded-none text-dark", inputClass)}
                  disabled={disabled}
                  placeholder={placeholder}
                  {...field}
                  {...textAreaOptions}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              ) : type === "radio" ? (
                <RadioGroup
                  disabled={disabled}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1 rounded-none"
                >
                  {radioItems &&
                    radioItems.map((item, index) => (
                      <FormItem
                        key={index}
                        className={cn(
                          "flex items-center space-x-3 space-y-0",
                          inputClass
                        )}
                      >
                        <FormControl>
                          <RadioGroupItem
                            className={cn("", inputClass)}
                            value={item.value}
                          />
                        </FormControl>
                        <FormLabel className={cn("", labelClass)}>
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                </RadioGroup>
              ) : type === "checkbox" ? (
                <div className="">
                  <Checkbox
                    className={cn("rounded-none text-dark", inputClass)}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </div>
              ) : (
                <Input
                  autoComplete={autocomplete}
                  className={cn(
                    "rounded-none text-dark border-websiteBackground2",
                    inputClass
                  )}
                  disabled={disabled}
                  placeholder={placeholder}
                  type={type}
                  {...field}
                  onFocus={onFocus}
                  onBlur={onBlur}
                >
                  {children}
                </Input>
              )}
            </FormControl>

            <FormDescription className={cn("", descriptionClass)}>
              {description}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }
};

export default FormItemInput;
