import { FieldShell } from "@/components/Form/FieldShell";
import { Radio } from "@/components/Form/Radio";
import { useFieldContext } from "@/components/Form/form-context";

import { getFieldPresentation } from "./field-presentation";

type RadioGroupFieldProps = {
  label: string;
  required?: boolean;
  options: ReadonlyArray<{
    value: string;
    label: string;
  }>;
};

export function RadioGroupField({
  label,
  required = false,
  options,
}: RadioGroupFieldProps) {
  const field = useFieldContext<string>();

  const { status, message } = getFieldPresentation(field.state.meta);

  return (
    <FieldShell
      label={label}
      message={message}
      required={required}
      status={status}
    >
      <div className="space-y-3">
        {options.map((option) => (
          <Radio
            key={option.value}
            label={option.label}
            name={field.name}
            value={option.value}
            checked={field.state.value === option.value}
            onBlur={field.handleBlur}
            onChange={() => field.handleChange(option.value)}
          />
        ))}
      </div>
    </FieldShell>
  );
}
