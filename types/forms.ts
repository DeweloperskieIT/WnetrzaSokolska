import { z } from "zod";

export interface BaseField {
  name: string; // Unique name of the field
  label: string; // Display label for the field
  description?: string; // Optional description of the field
  zod?: z.ZodType<any>; // Optional Zod validation schema (not needed for headers/paragraphs)
  defaultValue?: any; // Optional default value
  hiddenBy?: string; // Field that controls visibility
  hiddenValue?: boolean | string; // Value that hides this field
}

export interface FileField extends BaseField {
  type: "file";
  accept: string; // Accepted file types (e.g., ".pdf, .doc")
  deletable?: boolean;
}

export interface TextField extends BaseField {
  type: "text";
}

export interface NumberField extends BaseField {
  type: "tel";
}

export interface TextAreaField extends BaseField {
  type: "textarea";
}

export interface RadioField extends BaseField {
  type: "radio";
  placeholder?: string;
  radioItems: {
    value: boolean | string | any;
    label: string;
  }[];
}

export interface HeaderField extends Partial<BaseField> {
  type: "header";
  name: string;
  style?: string;
}

export interface ParagraphField extends Partial<BaseField> {
  type: "paragraph";
  name: string;
  style?: string;
}

export interface SelectField extends BaseField {
  type: "select";
  placeholder?: string;
  selectItems: SelectItemProps[];
}

export interface CheckboxArrayField extends BaseField {
  type: "checkboxArray";
  placeholder?: string;
  checkboxItems: string[];
}

export interface SwitchField extends BaseField {
  type: "switch";
  href?: string;
  hrefDescription?: string;
}

// Union type of all field types
export type FormField =
  | FileField
  | TextField
  | NumberField
  | TextAreaField
  | RadioField
  | HeaderField
  | ParagraphField
  | SwitchField
  | CheckboxArrayField
  | SelectField;

// Define the form fields array type
export type FormFields = FormField[];

export type RadioItemProps = {
  value: any;
  label: string;
};

export type SelectItemProps = {
  value: string;
  label: string;
};

export type JobFormBuildingBlockData = {
  formFields: FormFields;
  offerId: string;
};
