import { FieldShell } from "@/components/Form/FieldShell";
import { Textarea } from "@/components/Form/Textarea";
import { useFieldContext } from "@/components/Form/form-context";

import { getFieldPresentation } from "./field-presentation";

type TextareaFieldProps = {
  label: string;
  required?: boolean;
  placeholder?: string;
};

export function TextareaField({
  label,
  required = false,
  placeholder,
}: TextareaFieldProps) {
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
      <Textarea
        id={field.name}
        name={field.name}
        value={field.state.value}
        status={status}
        placeholder={placeholder}
        onBlur={field.handleBlur}
        onChange={(event) => field.handleChange(event.target.value)}
      />
    </FieldShell>
  );
}
