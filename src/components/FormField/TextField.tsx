import { FieldShell } from "@/components/Form/FieldShell";
import { Input } from "@/components/Form/Input";
import { useFieldContext } from "@/components/Form/form-context";

import { getFieldPresentation } from "./field-presentation";

type TextFieldProps = {
  label: string;
  required?: boolean;
  type?: "text" | "email" | "date" | "time";
  placeholder?: string;
};

export function TextField({
  label,
  required = false,
  type = "text",
  placeholder,
}: TextFieldProps) {
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
      <Input
        id={field.name}
        name={field.name}
        type={type}
        placeholder={placeholder}
        value={field.state.value}
        status={status}
        onBlur={field.handleBlur}
        onChange={(event) => field.handleChange(event.target.value)}
      />
    </FieldShell>
  );
}
