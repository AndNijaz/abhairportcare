import type { InputHTMLAttributes } from "react";
import { CircleAlert, CircleCheck } from "lucide-react";
import {
  controlBaseStyles,
  getControlStatusStyles,
} from "./form-control.styles";
import type { FieldStatus } from "./FieldShell";

type PhoneInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  status?: FieldStatus;
};

export function PhoneInput({
  status = "default",
  className = "",
  ...props
}: PhoneInputProps) {
  return (
    <div
      className={[
        controlBaseStyles,
        getControlStatusStyles(status),
        "relative flex overflow-hidden",
        className,
      ].join(" ")}
    >
      <div className="flex shrink-0 items-center border-r border-slate-200 px-3 text-xs font-medium text-slate-600">
        BA
      </div>

      <input
        className={[
          "min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-800 outline-none",
          status !== "default" ? "pr-11" : "",
        ].join(" ")}
        type="tel"
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
