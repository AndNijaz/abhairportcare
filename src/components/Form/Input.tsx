import type { InputHTMLAttributes } from "react";
import { CircleAlert, CircleCheck } from "lucide-react";
import {
  controlBaseStyles,
  getControlStatusStyles,
} from "./form-control.styles";
import type { FieldStatus } from "./FieldShell";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  status?: FieldStatus;
};

export function Input({
  status = "default",
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="relative">
      <input
        className={[
          controlBaseStyles,
          getControlStatusStyles(status),
          "px-4 placeholder:text-slate-400",
          status !== "default" ? "pr-11" : "",
          className,
        ].join(" ")}
        {...props}
      />

      {status === "success" && (
        <CircleCheck
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-500"
          strokeWidth={1.8}
        />
      )}

      {status === "error" && (
        <CircleAlert
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-red-500"
          strokeWidth={1.8}
        />
      )}
    </div>
  );
}
