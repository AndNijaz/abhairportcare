import { FieldShell } from "@/components/Form/FieldShell";
import { PhoneInput } from "@/components/Form/PhoneInput";
import { useFieldContext } from "@/components/Form/form-context";

import { getFieldPresentation } from "./field-presentation";

type PhoneFieldProps = {
  label: string;
  required?: boolean;
};

export function PhoneField({ label, required = false }: PhoneFieldProps) {
  const field = useFieldContext<string>();

  const { status, message } = getFieldPresentation(field.state.meta);

  return (
    <FieldShell
      htmlFor={field.name}
      label={label}
      message={message}
      required={required}
      status={status}
    >
      <PhoneInput
        id={field.name}
        name={field.name}
        value={field.state.value}
        status={status}
        onBlur={field.handleBlur}
        onChange={(event) => field.handleChange(event.target.value)}
      />
    </FieldShell>
  );
}
