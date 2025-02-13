import { z } from "zod";

export interface BaseField {
  name: string; // Unique name of the field
  label: string; // Display label for the field
  description?: string; // Optional description of the field
  zod: z.ZodType<any>; // Zod validation schema
  defaultValue: any; // Default value for the field
  hiddenBy?: string; // Field that controls visibility
  hiddenValue?: boolean | string; // Value that hides this field
}

export interface FileField extends BaseField {
  type: "file"; // Field type
  accept: string; // Accepted file types (e.g., ".pdf, .doc")
  deletable?: boolean;
}

export interface TextField extends BaseField {
  type: "text"; // Field type
}

export interface NumberField extends BaseField {
  type: "tel"; // Field type
}

export interface TextAreaField extends BaseField {
  type: "textarea"; // Field type
}

export interface RadioField extends BaseField {
  type: "radio"; // Field type
  placeholder: any;
  radioItems: {
    // Options for radio buttons
    value: boolean | string | any;
    label: string;
  }[];
}

export interface HeaderField {
  type: "header"; // Field type
  name: string; // Header name
  hiddenBy?: string; // Field that controls visibility
  hiddenValue?: boolean; // Value that hides this field
  style?: string;
}

export interface ParagraphField {
  type: "paragraph"; // Field type
  name: string;
  hiddenBy?: string; // Field that controls visibility
  hiddenValue?: boolean | string; // Value that hides this field
  style?: string;
}

export interface SelectField extends BaseField {
  type: "select"; // Field type
  placeholder: string;
  selectItems: SelectItemProps[];
}

export interface CheckboxArrayField extends BaseField {
  type: "checkboxArray"; // Field type
  placeholder: string;
  checkboxItems: string[];
}

export interface SwitchField extends BaseField {
  type: "switch"; // Field type
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
  | SelectField; // Header type is a special case

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
