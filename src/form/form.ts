import { createFormHook } from "@tanstack/react-form";

import { ChoiceCardGroupField } from "@/components/FormField/ChoiceCardGroupField";
import { CheckboxGroupField } from "@/components/FormField/CheckboxGroupField";
import { NumberSelectField } from "@/components/FormField/NumberSelectField";
import { PhoneField } from "@/components/FormField/PhoneField";
import { RadioGroupField } from "@/components/FormField/RadioGroupField";
import { SelectField } from "@/components/FormField/SelectField";
import { TextField } from "@/components/FormField/TextField";
import { TextareaField } from "@/components/FormField/TextareaField";

import {
  fieldContext,
  formContext,
} from "./form-context";

export const {
  useAppForm,
  withForm,
} = createFormHook({
  fieldContext,
  formContext,

  fieldComponents: {
    TextField,
    PhoneField,
    NumberSelectField,
    CheckboxGroupField,
    SelectField,
    RadioGroupField,
    TextareaField,
    ChoiceCardGroupField,
  },

  formComponents: {},
});
