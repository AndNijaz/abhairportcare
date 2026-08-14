import type { SelectHTMLAttributes } from "react";
import { ChevronDown, CircleAlert, CircleCheck } from "lucide-react";
import {
  controlBaseStyles,
  getControlStatusStyles,
} from "./form-control.styles";
import type { FieldStatus } from "./FieldShell";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  status?: FieldStatus;
};

export function Select({
  children,
  status = "default",
  className = "",
  ...props
}: SelectProps) {
  return (
    <div className="relative">
      <select
        className={[
          controlBaseStyles,
          getControlStatusStyles(status),
          "appearance-none px-4",
          status === "default" ? "pr-10" : "pr-16",
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </select>

      {status === "success" && (
        <CircleCheck
          aria-hidden="true"
          className="pointer-events-none absolute right-9 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-500"
          strokeWidth={1.8}
        />
      )}

      {status === "error" && (
        <CircleAlert
          aria-hidden="true"
          className="pointer-events-none absolute right-9 top-1/2 h-5 w-5 -translate-y-1/2 text-red-500"
          strokeWidth={1.8}
        />
      )}

      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
        strokeWidth={1.8}
      />
    </div>
  );
}
