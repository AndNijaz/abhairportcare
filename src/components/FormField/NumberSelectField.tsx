import { FieldShell } from "@/components/Form/FieldShell";
import { Select } from "@/components/Form/Select";
import { useFieldContext } from "@/form/form-context";

import { getFieldPresentation } from "./field-presentation";

type NumberSelectFieldProps = {
  label: string;
  required?: boolean;
  options: ReadonlyArray<{
    value: number;
    label: string;
  }>;
};

export function NumberSelectField({
  label,
  required = false,
  options,
}: NumberSelectFieldProps) {
  const field = useFieldContext<number>();

  const { status, message } = getFieldPresentation(field.state.meta);

  return (
    <FieldShell
      htmlFor={field.name}
      label={label}
      message={message}
      required={required}
      status={status}
    >
      <Select
        id={field.name}
        name={field.name}
        value={field.state.value}
        status={status}
        onBlur={field.handleBlur}
        onChange={(event) => field.handleChange(Number(event.target.value))}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </FieldShell>
  );
}
