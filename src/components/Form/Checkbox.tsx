import type { InputHTMLAttributes } from "react";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
};

export function Checkbox({ label, className = "", ...props }: CheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-3">
      <input
        type="checkbox"
        className={[
          "h-[18px] w-[18px] shrink-0 cursor-pointer rounded border border-slate-300",
          "accent-[#1463ff]",
          "focus:outline-none focus:ring-2 focus:ring-blue-500/20",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        ].join(" ")}
        {...props}
      />

      {label && <span className="text-sm text-slate-700">{label}</span>}
    </label>
  );
}
