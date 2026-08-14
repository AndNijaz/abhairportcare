import { FieldShell } from "@/components/Form/FieldShell";
import { Select } from "@/components/Form/Select";
import { useFieldContext } from "@/components/Form/form-context";

import { getFieldPresentation } from "./field-presentation";

type SelectFieldProps = {
  label: string;
  required?: boolean;
  placeholder?: string;
  options: ReadonlyArray<{
    value: string;
    label: string;
  }>;
};

export function SelectField({
  label,
  required = false,
  placeholder,
  options,
}: SelectFieldProps) {
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
      <Select
        id={field.name}
        name={field.name}
        value={field.state.value}
        status={status}
        onBlur={field.handleBlur}
        onChange={(event) => field.handleChange(event.target.value)}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </FieldShell>
  );
}
