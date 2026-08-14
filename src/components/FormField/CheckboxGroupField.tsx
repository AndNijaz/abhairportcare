import { Checkbox } from "@/components/Form/Checkbox";
import { CheckboxGroup } from "@/components/Form/CheckboxGroup";
import { useFieldContext } from "@/components/Form/form-context";

type CheckboxGroupFieldProps<TValue extends string> = {
  label: string;
  optional?: boolean;
  options: ReadonlyArray<{
    value: TValue;
    label: string;
  }>;
};

export function CheckboxGroupField<TValue extends string>({
  label,
  optional = false,
  options,
}: CheckboxGroupFieldProps<TValue>) {
  const field = useFieldContext<TValue[]>();

  return (
    <CheckboxGroup label={label} optional={optional}>
      {options.map((option) => {
        const checked = field.state.value.includes(option.value);

        return (
          <Checkbox
            key={option.value}
            label={option.label}
            checked={checked}
            onBlur={field.handleBlur}
            onChange={(event) => {
              if (event.target.checked) {
                field.handleChange([...field.state.value, option.value]);

                return;
              }

              field.handleChange(
                field.state.value.filter((value) => value !== option.value)
              );
            }}
          />
        );
      })}
    </CheckboxGroup>
  );
}
