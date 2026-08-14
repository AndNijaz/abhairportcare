import type { ReactNode } from "react";

type CheckboxGroupProps = {
  label: string;
  optional?: boolean;
  children: ReactNode;
};

export function CheckboxGroup({
  label,
  optional = false,
  children,
}: CheckboxGroupProps) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-semibold text-[#172044]">
        {label}

        {optional && (
          <span className="ml-1 font-normal text-slate-500">(optional)</span>
        )}
      </legend>

      <div className="space-y-3">{children}</div>
    </fieldset>
  );
}
