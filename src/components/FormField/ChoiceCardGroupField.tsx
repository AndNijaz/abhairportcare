import type { ReactNode } from "react";

import { ChoiceCard } from "@/components/Form/ChoiceCard";
import { FieldShell } from "@/components/Form/FieldShell";
import { useFieldContext } from "@/components/Form/form-context";

import { getFieldPresentation } from "./field-presentation";

type ChoiceCardGroupFieldProps<TValue extends string> = {
  label: string;
  required?: boolean;
  options: ReadonlyArray<{
    value: TValue;
    label: string;
    description?: string;
    icon?: ReactNode;
  }>;
};

export function ChoiceCardGroupField<TValue extends string>({
  label,
  required = false,
  options,
}: ChoiceCardGroupFieldProps<TValue>) {
  const field = useFieldContext<TValue | "">();

  const { status, message } = getFieldPresentation(field.state.meta);

  return (
    <FieldShell
      label={label}
      message={message}
      required={required}
      status={status}
    >
      <div className="grid gap-3 md:grid-cols-2">
        {options.map((option) => (
          <ChoiceCard
            key={option.value}
            title={option.label}
            description={option.description}
            icon={option.icon}
            selected={field.state.value === option.value}
            onClick={() => {
              field.handleChange(option.value);
              field.handleBlur();
            }}
          />
        ))}
      </div>
    </FieldShell>
  );
}
